import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js';

const LOOP_SECONDS = 8;
const TAU = Math.PI * 2;
const CAPTURE_MODE = new URLSearchParams(window.location.search).get('capture') === '1';
const root = document.documentElement;
const mount = document.querySelector('#scene');
const motionButton = document.querySelector('#motion-toggle');
const motionLabel = motionButton.querySelector('.motion-label');
const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

root.classList.toggle('capture', CAPTURE_MODE);

let renderer;

try {
  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance',
  });
} catch (error) {
  root.classList.add('webgl-failed');
  motionButton.hidden = true;
  window.renderFrame = () => {};
  console.warn('WebGL is unavailable; displaying the static artwork.', error);
}

if (renderer) {
  startArtwork(renderer);
}

function startArtwork(webglRenderer) {
  webglRenderer.setClearColor(0x060d0f, 0);
  webglRenderer.outputColorSpace = THREE.SRGBColorSpace;
  mount.appendChild(webglRenderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 60);
  const composition = new THREE.Group();
  const ribbonGroup = new THREE.Group();
  const coreGroup = new THREE.Group();
  const innerGroup = new THREE.Group();

  scene.add(composition);
  composition.add(ribbonGroup, coreGroup);
  coreGroup.add(innerGroup);

  const pointerTarget = new THREE.Vector2();
  const pointerCurrent = new THREE.Vector2();
  const ribbonMaterials = [];
  const timeUniforms = [];
  const pixelRatioUniforms = [];
  const random = mulberry32(0x4f574944);

  let currentTime = 0;
  let startTime = 0;
  let frameRequest = 0;
  let motionEnabled = !CAPTURE_MODE && !motionQuery.matches;
  let baseCameraZ = 9;

  const windField = /* glsl */ `
    const float PI = 3.141592653589793;
    const float TAU = 6.283185307179586;

    vec3 windPosition(float u, float lane, float phase) {
      float travel = u - 0.5;
      float envelope = exp(-travel * travel * 7.0);
      float offset = lane * TAU;
      float theta = travel * 5.2 + offset + 0.20 * sin(phase + offset + u * TAU);
      float spread = (lane - 0.5) * 3.3 * (1.0 - 0.72 * envelope);

      float x = travel * 11.2 + 0.18 * sin(theta + phase) * envelope;
      float y = spread + sin(theta) * 1.08 * envelope;
      y += 0.13 * sin(u * TAU * 2.0 + phase + offset);
      float z = cos(theta) * (1.18 * envelope + 0.12);
      z += (lane - 0.5) * 0.72 + 0.16 * cos(u * TAU - phase + offset);

      return vec3(x, y, z);
    }
  `;

  createRibbons();
  const particleMaterial = createParticles();
  createCore();
  const glow = createGlow();

  function registerMaterial(material, withPixelRatio = false) {
    if (material.uniforms.uPhase) timeUniforms.push(material.uniforms.uPhase);
    if (withPixelRatio) pixelRatioUniforms.push(material.uniforms.uPixelRatio);
    return material;
  }

  function createRibbons() {
    const segments = 180;
    const vertexCount = (segments + 1) * 2;
    const positions = new Float32Array(vertexCount * 3);
    const uValues = new Float32Array(vertexCount);
    const sides = new Float32Array(vertexCount);
    const indices = new Uint16Array(segments * 6);

    for (let i = 0; i <= segments; i += 1) {
      const vertex = i * 2;
      uValues[vertex] = i / segments;
      uValues[vertex + 1] = i / segments;
      sides[vertex] = -1;
      sides[vertex + 1] = 1;

      if (i < segments) {
        const index = i * 6;
        indices[index] = vertex;
        indices[index + 1] = vertex + 1;
        indices[index + 2] = vertex + 2;
        indices[index + 3] = vertex + 1;
        indices[index + 4] = vertex + 3;
        indices[index + 5] = vertex + 2;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('aU', new THREE.BufferAttribute(uValues, 1));
    geometry.setAttribute('aSide', new THREE.BufferAttribute(sides, 1));
    geometry.setIndex(new THREE.BufferAttribute(indices, 1));

    const vertexShader = /* glsl */ `
      attribute float aU;
      attribute float aSide;
      uniform float uPhase;
      uniform float uLane;
      uniform float uWidth;
      varying float vU;
      varying float vSide;
      ${windField}

      void main() {
        vec3 center = windPosition(aU, uLane, uPhase);
        vec3 ahead = windPosition(min(aU + 0.002, 1.0), uLane, uPhase);
        vec3 behind = windPosition(max(aU - 0.002, 0.0), uLane, uPhase);

        vec4 viewPosition = modelViewMatrix * vec4(center, 1.0);
        vec4 viewAhead = modelViewMatrix * vec4(ahead, 1.0);
        vec4 viewBehind = modelViewMatrix * vec4(behind, 1.0);
        vec2 tangent = normalize(viewAhead.xy - viewBehind.xy);
        vec2 ribbonNormal = vec2(-tangent.y, tangent.x);

        float taper = pow(max(sin(PI * aU), 0.0), 0.55);
        float width = uWidth * (0.16 + 0.84 * taper);
        width *= 0.92 + 0.08 * sin(uPhase + aU * TAU + uLane * TAU);
        viewPosition.xy += ribbonNormal * aSide * width;

        vU = aU;
        vSide = aSide;
        gl_Position = projectionMatrix * viewPosition;
      }
    `;

    const fragmentShader = /* glsl */ `
      uniform vec3 uColor;
      uniform vec3 uCoral;
      uniform float uCycle;
      uniform float uLane;
      uniform float uOpacity;
      varying float vU;
      varying float vSide;

      void main() {
        float across = max(1.0 - abs(vSide), 0.0);
        float filament = pow(across, 2.4);
        float endFade = smoothstep(0.0, 0.12, vU) * (1.0 - smoothstep(0.86, 1.0, vU));
        float pulsePosition = fract(uCycle + uLane * 1.7);
        float pulseDistance = abs(fract(vU - pulsePosition + 0.5) - 0.5);
        float pulse = exp(-pulseDistance * pulseDistance * 2400.0);
        float hasCoral = step(0.79, fract(uLane * 7.31));

        vec3 color = mix(uColor, uCoral, pulse * hasCoral * 0.72);
        float alpha = uOpacity * endFade * (0.07 + filament * 0.58);
        alpha += pulse * hasCoral * endFade * filament * 0.08;

        gl_FragColor = vec4(color, alpha);
        #include <colorspace_fragment>
      }
    `;

    const ribbonCount = 9;
    const teal = new THREE.Color('#2fe0c0');
    const blue = new THREE.Color('#5b8cef');
    const coral = new THREE.Color('#ff7d5a');

    for (let i = 0; i < ribbonCount; i += 1) {
      const lane = (i + 0.5) / ribbonCount;
      const color = teal.clone().lerp(blue, 0.12 + lane * 0.68);
      const material = new THREE.ShaderMaterial({
        uniforms: {
          uPhase: { value: 0 },
          uCycle: { value: 0 },
          uLane: { value: lane },
          uWidth: { value: 0.024 + random() * 0.052 },
          uColor: { value: color },
          uCoral: { value: coral },
          uOpacity: { value: 0.28 + random() * 0.22 },
        },
        vertexShader,
        fragmentShader,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
      });

      registerMaterial(material);
      const ribbon = new THREE.Mesh(geometry, material);
      ribbon.frustumCulled = false;
      ribbon.renderOrder = 1;
      ribbonGroup.add(ribbon);
      ribbonMaterials.push(material);
    }
  }

  function createParticles() {
    const count = 720;
    const positions = new Float32Array(count * 3);
    const uValues = new Float32Array(count);
    const lanes = new Float32Array(count);
    const sizes = new Float32Array(count);
    const tints = new Float32Array(count);
    const accents = new Float32Array(count);
    const speeds = new Float32Array(count);

    for (let i = 0; i < count; i += 1) {
      uValues[i] = random();
      lanes[i] = random();
      sizes[i] = 0.65 + Math.pow(random(), 2) * 1.8;
      tints[i] = random();
      accents[i] = random() > 0.982 ? 1 : 0;
      speeds[i] = random() > 0.72 ? 2 : 1;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('aU', new THREE.BufferAttribute(uValues, 1));
    geometry.setAttribute('aLane', new THREE.BufferAttribute(lanes, 1));
    geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute('aTint', new THREE.BufferAttribute(tints, 1));
    geometry.setAttribute('aAccent', new THREE.BufferAttribute(accents, 1));
    geometry.setAttribute('aSpeed', new THREE.BufferAttribute(speeds, 1));

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uPhase: { value: 0 },
        uCycle: { value: 0 },
        uPixelRatio: { value: 1 },
        uTeal: { value: new THREE.Color('#2fe0c0') },
        uBlue: { value: new THREE.Color('#5b8cef') },
        uCoral: { value: new THREE.Color('#ff7d5a') },
      },
      vertexShader: /* glsl */ `
        attribute float aU;
        attribute float aLane;
        attribute float aSize;
        attribute float aTint;
        attribute float aAccent;
        attribute float aSpeed;
        uniform float uPhase;
        uniform float uCycle;
        uniform float uPixelRatio;
        varying float vAlpha;
        varying float vTint;
        varying float vAccent;
        ${windField}

        void main() {
          float u = fract(aU + uCycle * aSpeed);
          float lane = clamp(aLane + 0.012 * sin(uPhase + aU * TAU), 0.0, 1.0);
          vec3 fieldPosition = windPosition(u, lane, uPhase);
          vec4 viewPosition = modelViewMatrix * vec4(fieldPosition, 1.0);

          float endFade = smoothstep(0.0, 0.1, u) * (1.0 - smoothstep(0.88, 1.0, u));
          vAlpha = endFade * (0.24 + 0.5 * aSize / 2.45);
          vTint = aTint;
          vAccent = aAccent;
          gl_PointSize = aSize * uPixelRatio * (8.0 / max(-viewPosition.z, 1.0));
          gl_Position = projectionMatrix * viewPosition;
        }
      `,
      fragmentShader: /* glsl */ `
        uniform vec3 uTeal;
        uniform vec3 uBlue;
        uniform vec3 uCoral;
        varying float vAlpha;
        varying float vTint;
        varying float vAccent;

        void main() {
          float distanceToCenter = length(gl_PointCoord - 0.5);
          if (distanceToCenter > 0.5) discard;
          float softDisc = 1.0 - smoothstep(0.06, 0.5, distanceToCenter);
          vec3 color = mix(uTeal, uBlue, vTint * 0.78);
          color = mix(color, uCoral, vAccent);
          gl_FragColor = vec4(color, softDisc * vAlpha);
          #include <colorspace_fragment>
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    registerMaterial(material, true);
    const particles = new THREE.Points(geometry, material);
    particles.frustumCulled = false;
    particles.renderOrder = 2;
    ribbonGroup.add(particles);
    return material;
  }

  function createCore() {
    const coreGeometry = new THREE.IcosahedronGeometry(1.08, 1);
    const innerGeometry = new THREE.IcosahedronGeometry(0.64, 0);

    const vertexShader = /* glsl */ `
      uniform float uPhase;
      varying float vPulse;

      void main() {
        vec3 p = position;
        float breath = 1.0 + 0.046 * sin(uPhase + p.y * 3.2 + p.x * 1.4);
        breath += 0.024 * cos(uPhase * 2.0 + p.z * 4.0);
        p *= breath;
        p.x += 0.025 * sin(uPhase + p.y * 4.0);
        vPulse = 0.5 + 0.5 * sin(uPhase + p.y * 2.0 + p.x);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }
    `;

    const fragmentShader = /* glsl */ `
      uniform vec3 uTeal;
      uniform vec3 uBlue;
      uniform float uOpacity;
      varying float vPulse;

      void main() {
        vec3 color = mix(uTeal, uBlue, vPulse * 0.72);
        gl_FragColor = vec4(color, uOpacity * (0.5 + 0.5 * vPulse));
        #include <colorspace_fragment>
      }
    `;

    const sharedUniforms = {
      uPhase: { value: 0 },
      uTeal: { value: new THREE.Color('#2fe0c0') },
      uBlue: { value: new THREE.Color('#5b8cef') },
    };

    const faceMaterial = new THREE.ShaderMaterial({
      uniforms: { ...sharedUniforms, uOpacity: { value: 0.026 } },
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
    });

    const lineMaterial = new THREE.ShaderMaterial({
      uniforms: { ...sharedUniforms, uOpacity: { value: 0.24 } },
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      wireframe: true,
    });

    const innerMaterial = new THREE.ShaderMaterial({
      uniforms: { ...sharedUniforms, uOpacity: { value: 0.13 } },
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      wireframe: true,
    });

    [faceMaterial, lineMaterial, innerMaterial].forEach((material) => registerMaterial(material));

    const faces = new THREE.Mesh(coreGeometry, faceMaterial);
    const lattice = new THREE.Mesh(coreGeometry, lineMaterial);
    const innerLattice = new THREE.Mesh(innerGeometry, innerMaterial);
    faces.renderOrder = 3;
    lattice.renderOrder = 4;
    innerLattice.renderOrder = 5;
    coreGroup.add(faces, lattice);
    innerGroup.add(innerLattice);
  }

  function createGlow() {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const context = canvas.getContext('2d');
    const gradient = context.createRadialGradient(64, 64, 0, 64, 64, 64);
    gradient.addColorStop(0, 'rgba(47, 224, 192, 0.5)');
    gradient.addColorStop(0.25, 'rgba(47, 224, 192, 0.15)');
    gradient.addColorStop(1, 'rgba(47, 224, 192, 0)');
    context.fillStyle = gradient;
    context.fillRect(0, 0, 128, 128);

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    const material = new THREE.SpriteMaterial({
      map: texture,
      color: 0x2fe0c0,
      transparent: true,
      opacity: 0.1,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const sprite = new THREE.Sprite(material);
    sprite.position.z = -1.4;
    sprite.scale.set(5.4, 5.4, 1);
    sprite.renderOrder = 0;
    coreGroup.add(sprite);
    return sprite;
  }

  function updateScene(seconds) {
    const phase = (seconds / LOOP_SECONDS) * TAU;
    const cycle = seconds / LOOP_SECONDS;

    timeUniforms.forEach((uniform) => { uniform.value = phase; });
    particleMaterial.uniforms.uCycle.value = cycle;
    ribbonMaterials.forEach((material) => { material.uniforms.uCycle.value = cycle; });

    coreGroup.rotation.set(
      0.12 * Math.cos(phase),
      0.17 * Math.sin(phase),
      0.035 * Math.sin(phase * 2),
    );
    coreGroup.position.y = 0.075 * Math.sin(phase);
    innerGroup.rotation.set(
      0.16 * Math.sin(phase),
      -0.32 * Math.sin(phase),
      0.12 * Math.cos(phase),
    );
    glow.material.opacity = 0.085 + 0.014 * Math.sin(phase);

    composition.rotation.x = pointerCurrent.y * 0.024;
    composition.rotation.y = pointerCurrent.x * 0.045;
    camera.position.x = pointerCurrent.x * 0.11;
    camera.position.y = -pointerCurrent.y * 0.075;
    camera.position.z = baseCameraZ;
    camera.lookAt(0, 0, 0);
  }

  function renderFrame(seconds = 0) {
    const safeSeconds = Number.isFinite(seconds) ? seconds : 0;
    currentTime = ((safeSeconds % LOOP_SECONDS) + LOOP_SECONDS) % LOOP_SECONDS;
    updateScene(currentTime);
    webglRenderer.render(scene, camera);
  }

  function resize() {
    const width = Math.max(window.innerWidth, 1);
    const height = Math.max(window.innerHeight, 1);
    const aspect = width / height;
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    const isMobile = width <= 700;
    const isWide = aspect > 2.2;

    webglRenderer.setPixelRatio(pixelRatio);
    webglRenderer.setSize(width, height, false);
    pixelRatioUniforms.forEach((uniform) => { uniform.value = pixelRatio; });

    camera.aspect = aspect;
    camera.fov = isMobile ? 48 : 40;
    camera.updateProjectionMatrix();
    baseCameraZ = isMobile ? 10.5 : 9;

    composition.position.x = isWide
      ? Math.min(3.5, 1.6 + aspect * 0.45)
      : (aspect > 1.1 ? 1.8 : 0.6);
    composition.position.y = isMobile ? 1.35 : 0.05;
    composition.scale.setScalar(isMobile ? 0.82 : (isWide ? 1.06 : 1));
    ribbonGroup.scale.x = isWide ? Math.min(1.65, aspect / 2.3) : 1;

    renderFrame(currentTime);
  }

  function syncMotionControl() {
    motionButton.setAttribute('aria-pressed', String(motionEnabled));
    motionButton.setAttribute('aria-label', motionEnabled ? 'Pause animation' : 'Play animation');
    motionLabel.textContent = motionEnabled ? 'Motion' : 'Still';
  }

  function stopMotion() {
    if (frameRequest) cancelAnimationFrame(frameRequest);
    frameRequest = 0;
  }

  function startMotion() {
    stopMotion();
    startTime = performance.now() - currentTime * 1000;

    const tick = (now) => {
      pointerCurrent.lerp(pointerTarget, 0.045);
      currentTime = (now - startTime) / 1000;
      renderFrame(currentTime);
      frameRequest = requestAnimationFrame(tick);
    };

    frameRequest = requestAnimationFrame(tick);
  }

  window.renderFrame = renderFrame;
  resize();
  root.classList.add('webgl-ready');
  root.classList.remove('webgl-failed');
  syncMotionControl();

  if (CAPTURE_MODE) window.renderFrame(0);
  else if (motionEnabled) startMotion();

  window.addEventListener('resize', resize, { passive: true });

  if (!CAPTURE_MODE) {
    window.addEventListener('pointermove', (event) => {
      if (motionQuery.matches) return;
      pointerTarget.set(
        (event.clientX / window.innerWidth - 0.5) * 2,
        (event.clientY / window.innerHeight - 0.5) * 2,
      );
    }, { passive: true });

    document.documentElement.addEventListener('pointerleave', () => {
      pointerTarget.set(0, 0);
    });
  }

  motionButton.addEventListener('click', () => {
    motionEnabled = !motionEnabled;
    if (motionEnabled) startMotion();
    else stopMotion();
    syncMotionControl();
  });

  motionQuery.addEventListener('change', (event) => {
    if (!event.matches) return;
    motionEnabled = false;
    stopMotion();
    pointerTarget.set(0, 0);
    pointerCurrent.set(0, 0);
    renderFrame(0);
    syncMotionControl();
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopMotion();
    else if (motionEnabled && !CAPTURE_MODE) startMotion();
  });

  webglRenderer.domElement.addEventListener('webglcontextlost', (event) => {
    event.preventDefault();
    stopMotion();
    root.classList.remove('webgl-ready');
    root.classList.add('webgl-failed');
    motionButton.hidden = true;
  });

  webglRenderer.domElement.addEventListener('webglcontextrestored', () => {
    root.classList.add('webgl-ready');
    root.classList.remove('webgl-failed');
    motionButton.hidden = CAPTURE_MODE;
    resize();
    if (motionEnabled && !CAPTURE_MODE) startMotion();
  });
}

function mulberry32(seed) {
  return function random() {
    let value = seed += 0x6d2b79f5;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

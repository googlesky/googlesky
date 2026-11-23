<div align="center">
  <a href="https://hieulp.1devops.io/googlesky/" aria-label="Open the interactive Three.js artwork">
    <img src="assets/profile-header.gif" alt="Freedom Windss — DevOps, SRE and Security Researcher" width="100%">
  </a>
</div>

<div align="center">
  <a href="https://1devops.io"><strong>Website</strong></a> ·
  <a href="https://www.linkedin.com/in/googlesky/">LinkedIn</a> ·
  <a href="mailto:hieulp@1devops.io">Email</a> ·
  <a href="https://1devops.io/#contact">Work with me</a>
</div>

## Hi, I'm Freedom Windss 👋

**Senior DevOps/SRE Engineer and Security Researcher** with **13+ years of experience** building resilient cloud infrastructure, automating delivery, and turning operational complexity into systems teams can confidently own.

I work across the full lifecycle — architecture, Kubernetes, Infrastructure as Code, CI/CD, observability, incident response, and security. I also publish open-source tools and reproducible vulnerability research with clear evidence, root-cause analysis, and mitigation guidance.

### What I focus on

- **Platform engineering:** production-grade Kubernetes, cloud architecture, GitOps, and automated delivery.
- **Reliability:** observability, performance, incident response, disaster recovery, and practical runbooks.
- **Security research:** hands-on analysis in isolated labs, validated against both vulnerable and patched versions.
- **Open source:** small, useful tools, community firmware, public datasets, and documentation that helps others reproduce the result.

> **Research approach:** reproduce → isolate root cause → validate vulnerable vs. fixed → document impact and mitigations.

## Explore my work

The lists below are generated from my public GitHub repositories — new projects appear automatically.

<!-- PROJECTS:START -->
### Latest security research

| Project | Description |
| --- | --- |
| [CVE-2026-45325](https://github.com/googlesky/CVE-2026-45325) | @tmlmobilidade/utils &lt;20260509.340.15: setValueAtPath walks dotted paths with inherited-key lookups — __proto__/constructor segments pollute Object.prototype process-wide. Verbatim function from b10505b^ vs fixed UNSAFE_KEYS guard:… |
| [CVE-2022-24905](https://github.com/googlesky/CVE-2022-24905) | Argo CD with SSO: Dex proxy puts attacker-influenced error into ?sso_error and login UI renders it verbatim — crafted URL spoofs messages on the trusted login screen. Verbatim redirect blocks from df79d7d^ vs patched 2.3.4: attacker text… |
| [CVE-2026-33203](https://github.com/googlesky/CVE-2026-33203) | SiYuan &lt;=3.6.1: WebSocket auth-keepalive session is unauthenticated and messages use unchecked type assertions — malformed '{}' panics and kills the kernel. Verbatim parsing block from 1048a2b^ vs fix: crash on vuln, IsAuthSession early-… |
| [CVE-2026-55621](https://github.com/googlesky/CVE-2026-55621) | Incus &lt;7.2.0: volume copy handler authorizes destination only — attacker-controlled Source.Project reaches copy with no CanView on source volume, duplicating foreign secrets. Verbatim 19-line guard from 2e01078: attacker copy succeeds on… |
| [CVE-2026-27119](https://github.com/googlesky/CVE-2026-27119) | Svelte 5.39.3-5.51.4: SSR Renderer.option() emits option bodies verbatim — '&lt;/option&gt;&lt;script&gt;...' injects markup into the rendered page. Verbatim option()+escape_html() from f7c80da^ vs 5.51.5: raw script on vuln, escaped to &amp;lt;script on… |
| [CVE-2026-77380](https://github.com/googlesky/CVE-2026-77380) | Bolt &lt;6.1.5: upload-url/embed validate only the submitted URL but follow redirects without rechecking — public-to-internal redirect reaches 127.0.0.1/metadata. Verbatim UrlSafetyChecker + modeled fetch loop: internal hop fetched on vuln vs… |

### Open source & community

| Project | Description |
| --- | --- |
| [vietlott-data](https://github.com/googlesky/vietlott-data) | Vietlott lottery data crawler - Auto-updated daily at midnight |
| [thue-2026](https://github.com/googlesky/thue-2026) | Công cụ tính thuế thu nhập cá nhân Việt Nam miễn phí. So sánh luật thuế cũ (7 bậc) và mới 2026 (5 bậc). Tính GROSS-NET, quyết toán thuế, thưởng Tết, ESOP, thuế chứng khoán, thuế cho thuê nhà, vay mua nhà. |
| [RG-MA2820-OpenWrt-Community](https://github.com/googlesky/RG-MA2820-OpenWrt-Community) | Community OpenWrt hybrid build system for Ruijie RG-MA2820(T), with per-device calibration, A/B rollback and wired roaming |
| [1sh.pw](https://github.com/googlesky/1sh.pw) | URL Shortener with Analytics on Cloudflare Workers |

<sub>Updated automatically from public repositories. Forks, archived projects, and repositories without descriptions are excluded.</sub>
<!-- PROJECTS:END -->

## Engineering toolbox

| Domain | Tools and practices |
| --- | --- |
| **Cloud & platforms** | AWS · Azure · GCP · Kubernetes · Docker |
| **IaC & delivery** | Terraform · Ansible · Helm · Argo CD · GitHub Actions · GitLab CI · Jenkins |
| **Observability** | Prometheus · Grafana · ELK · Datadog |
| **Security** | Vault · Falco · Trivy · DevSecOps · Vulnerability research |
| **Languages** | Go · Python · TypeScript · Shell · C |

### How I work

**Boring infrastructure where it matters, measurable reliability everywhere, and security claims backed by reproducible evidence.** I care about clean handover, useful documentation, and leaving teams stronger than I found them.

---

<div align="center">
  Based in Ho Chi Minh City, Vietnam · Working remotely worldwide<br>
  <a href="https://1devops.io">1devops.io</a> · <a href="mailto:hieulp@1devops.io">hieulp@1devops.io</a>
</div>

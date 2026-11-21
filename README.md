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
| [CVE-2026-77359](https://github.com/googlesky/CVE-2026-77359) | jupyter-mcp-server &lt;=1.0.2: /mcp rejected forged Host/Origin but management routes didn't — DNS-rebinding website PUT /api/connect replaces the Jupyter backend (kernel hijack). Real server v1.0.2 vs v1.0.3: /api/connect accepted (not 421)… |
| [CVE-2026-63415](https://github.com/googlesky/CVE-2026-63415) | jane-php &lt;=7.11.2: Reference::doResolve fetched $ref via file_get_contents with no restriction — attacker OpenAPI doc causes SSRF/RFI + path-traversal LFI, inlining local JSON/YAML into generated code. Real Reference resolver pre-fix vs… |
| [CVE-2026-63184](https://github.com/googlesky/CVE-2026-63184) | Refitter &lt;2.1.1: NJsonSchema $ref resolution fetched remote URLs and read out-of-tree local files (absolute + ../ traversal), inlining them into generated Refit contracts (SSRF/RFI/LFI). Real refitter tool 2.1.0 vs 2.1.1: out-of-tree… |
| [CVE-2026-58254](https://github.com/googlesky/CVE-2026-58254) | nats-server &lt;=v2.12.7/v2.14.2: allowedToPublishOnMsgTraceDest skipped the publish-permission check for leafnode messages — a leaf operator leaks trace events to unauthorized subjects (+trace-only suppresses delivery). Real hub pre-fix vs… |
| [CVE-2026-69133](https://github.com/googlesky/CVE-2026-69133) | netty-incubator-codec-ohttp &lt;0.0.27.Final: OHTTP codecs retain the outer cumulationBuffer after a valid exchange, pinning attacker-influenced memory on idle keep-alive channels (memory-exhaustion DoS). Real OHTTP round-trip pre-fix vs… |
| [CVE-2026-35374](https://github.com/googlesky/CVE-2026-35374) | uutils coreutils split &lt;0.10.0: output writer path-checked before open+truncate, leaving a TOCTOU window — a swapped output symlink to the input truncates the input. Real instantiate_current_writer pre-fix vs 58040feb: input truncated on… |

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

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
| [CVE-2026-77378](https://github.com/googlesky/CVE-2026-77378) | Bolt CMS &lt;6.1.4: ListFormatHelper interpolates content-type slugs into raw SQL — an authenticated upload-permission user injects SQL via /async/select-options. Real getSelect() from 6.1.3 vs vendor-fixed 6.1.4: UNION payload reaches SQL on… |
| [CVE-2026-63012](https://github.com/googlesky/CVE-2026-63012) | baserCMS &lt;5.3.0: isSameReferrerAsCurrent used an unanchored host prefix match — a lookalike Referer (example.com.evil.test) passes the same-site gate for the Api/Admin session fallback, enabling operator privilege escalation. Real BcUtil… |
| [CVE-2026-77318](https://github.com/googlesky/CVE-2026-77318) | jupyter-mcp-server &lt;1.0.3: standalone streamable-http management routes /api/connect and /api/stop skip MCP_TOKEN enforcement — an unauthenticated PUT resets the server context and points it at an attacker Jupyter backend. Real server… |
| [CVE-2026-103025](https://github.com/googlesky/CVE-2026-103025) | bep/imagemeta &lt;0.17.3: PNG zTXt iptc path allocates from declared chunk length and inflates zlib unbounded — a 65KB PNG allocates ~471MB (memory-exhaustion DoS). Real Decode from v0.17.2 vs vendor-fixed v0.17.3: unbounded alloc on vuln,… |
| [CVE-2026-62955](https://github.com/googlesky/CVE-2026-62955) | baserCMS 5.2.3-5.2.x: getFullpath() skips its realpath containment check when the theme subdirectory for the chosen type is absent — an admin can write outside the theme via ../ (RCE). Incomplete fix of CVE-2026-30940. Real method from… |
| [CVE-2026-103033](https://github.com/googlesky/CVE-2026-103033) | ALTCHA lib-go 2.0.x: parseServerSignature writes unknown keys into a nil Extra map when url.ParseQuery returns partial pairs with an error for a malformed %-escape — pre-auth panic before HMAC check. Real VerifyServerSignature from v2.0.0… |

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

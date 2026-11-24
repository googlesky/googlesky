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
| [CVE-2026-133780](https://github.com/googlesky/CVE-2026-133780) | Symfony stimulus-bridge: Stimulus magic comments evaluated with node:vm.runInNewContext — arbitrary code execution at build time. Verbatim VM path from 25f1ff0^ vs literal-only AST parser: marker set on vuln, rejected on fixed |
| [CVE-2026-30940](https://github.com/googlesky/CVE-2026-30940) | baserCMS 5.2.3 incomplete patch: theme path boundary check skipped when realpath() fails — '../../webroot/webshell.php' accepted for write (RCE). Verbatim PHP guards from c650017^ vs complete fix: traversal on vuln, rejection on fixed |
| [CVE-2026-115375](https://github.com/googlesky/CVE-2026-115375) | Incus &lt;7.0.2/7.5.0: dependent volume names from a backup index used as path segments without validation — '../escape/pwned' creates a volume outside the pool. Verbatim IsAPIName guards from f7b57f4^ vs fix: traversal path on vuln,… |
| [CVE-2026-129975](https://github.com/googlesky/CVE-2026-129975) | GPGME &lt;2.3.1: realloced status buffer assigned to context only at end of reader — crafted long user ID returns early leaving stale pointer, double free at cleanup. Verbatim placement from 14499348^ vs fix with ASan: double-free on vuln,… |
| [CVE-2026-130453](https://github.com/googlesky/CVE-2026-130453) | Wireshark 4.4.x/4.6.x OpenWire dissector recurses on nested complex types with a NULL tree and no depth bound — stack exhaustion DoS. Verbatim depth guards from 3823253^ vs fix: RecursionError on vuln, depth-limit error on fixed |
| [CVE-2026-132825](https://github.com/googlesky/CVE-2026-132825) | Ruby2Shell CVE-2026-132825: case_map checks one byte of output room but sharp-s 0xDF expands to two bytes — one-byte heap overflow. Verbatim loop guard from d582f8f^ vs fix with ASan: OOB write on vuln, safe on fixed |

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

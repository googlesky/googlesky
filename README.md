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
| [CVE-2026-126837](https://github.com/googlesky/CVE-2026-126837) | Containerized differential lab and PoC for CVE-2026-126837: MongoDB Node.js driver 3.3.3-7.7.x validates SRV targets with an uncanonicalized endsWith, so '#', '?' or '/' in an SRV target redirects mongodb+srv clients to an attacker host,… |
| [CVE-2026-110697](https://github.com/googlesky/CVE-2026-110697) | Proof-of-concept and containerized differential lab for CVE-2026-110697: Red Hat Quay builds robot-listing SQL LIKE patterns from the caller's namespace without escaping wildcards, so an underscore namespace returns other tenants' robot… |
| [CVE-2026-107360](https://github.com/googlesky/CVE-2026-107360) | rubygem-safemode evaluates compound assignments in sandboxed Foreman/Satellite templates without Jail allow-list mediation: a template author invokes arbitrary no-arg methods on template objects (host deletion) and reads non-allow-listed… |
| [CVE-2026-123039](https://github.com/googlesky/CVE-2026-123039) | Containerised PoC for CVE-2026-123039: the Check Point Gaia OS Dynamic CLI daemon publishes /tmp/dynamic_socket world-writable and authenticates no caller, so any local user escalates to root. Differential lab (affected vs patched), 4-mode… |
| [CVE-2026-121653](https://github.com/googlesky/CVE-2026-121653) | Containerised PoC for CVE-2026-121653: unauthenticated SQL injection (CWE-89) in the Ivanti Endpoint Manager Core status-event service leads to RCE through the Core database account. A model of /WSStatusEvents runs on real Microsoft SQL… |
| [CVE-2026-119618](https://github.com/googlesky/CVE-2026-119618) | Apache httpd mod_http2 (2.4.55-2.4.70) races on the connection allocator when assign_headers() writes the synthesised Content-Length: 0 into the shared stream table, corrupting the child heap. Containerised lab, stdlib HTTP/2 PoC, ASan and… |

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

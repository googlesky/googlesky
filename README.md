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
| [CVE-2026-124079](https://github.com/googlesky/CVE-2026-124079) | PoC for CVE-2026-124079 — rConfig Core &lt;=8.2.18 / Pro &lt;8.4.1 unauthenticated RCE via Redis-backed Laravel Horizon queue poisoning (CWE-502); containerised differential lab (8.2.17 / 8.2.18 / 8.2.19) + full-chain PoC |
| [CVE-2026-118383](https://github.com/googlesky/CVE-2026-118383) | PoC for CVE-2026-118383 — MongoDB unauthenticated use-after-free in ReplicationCoordinatorImpl::CatchupState during primary catch-up via readConcern.afterOpTime waiter poisoning, with deterministic crash oracle and fixed-version control. |
| [CVE-2026-105437](https://github.com/googlesky/CVE-2026-105437) | PoC for CVE-2026-105437 — Git's three-way merge (xdiff/xmerge.c) sizes the merge output buffer in a 32-bit int, so a committed conflict-marker-size gitattribute plus many conflicts overflows it and the merge is written past an undersized… |
| [CVE-2026-86829](https://github.com/googlesky/CVE-2026-86829) | Apache Airflow &lt; 3.4.0: scheduler-side deserialization of task-controlled XCom (CVE-2026-86829) leading to code execution in the scheduler process. PoC, fixed-version control, and a triggerer classpath validation-order finding. |
| [CVE-2026-124552](https://github.com/googlesky/CVE-2026-124552) | PoC for CVE-2026-124552 — Webmin &lt;= 2.670 stored XSS in Shorewall/Shorewall6 list.cgi leading to RCE as root; includes an unpatched path traversal (arbitrary file write as root) found in the same module |
| [CVE-2026-99273](https://github.com/googlesky/CVE-2026-99273) | PoC and containerized lab for CVE-2026-99273 — Linux ksmbd writes a UTF-16 terminator 2 bytes past a 448-byte response buffer in get_file_stream_info() (SMB2 QUERY_INFO FileStreamInformation): exact-fill stream entry and trailing ::$DATA… |

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

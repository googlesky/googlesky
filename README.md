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
| [CVE-2026-110486](https://github.com/googlesky/CVE-2026-110486) | Mosquitto 2.1-2.1.2: net__read_ws returns 4 for a zero-length WebSocket data frame without writing payload, so the MQTT parser reads uninitialised heap bytes in CONNECT before auth. ASan differential of real broker 2.1.2 vs vendor-fixed… |
| [CVE-2026-73504](https://github.com/googlesky/CVE-2026-73504) | cassandra-jdbc-wrapper &lt;4.16.4: DriverUtil redaction helpers added for password logging only redact TAG_PASSWORD — the live Astra auth token stays in SessionHolder DEBUG log strings. Real upstream artifacts 4.16.3 vs 4.16.4: token leaked… |
| [CVE-2026-132252](https://github.com/googlesky/CVE-2026-132252) | October CMS &lt;=4.4.6: validateExternalImageHost trusts DNS for numeric-looking hosts while libc parses octal/decimal as 127.0.0.1 at fetch time — an external image URL reaches loopback services. Advisory is one line; fix visible in the… |
| [CVE-2026-130587](https://github.com/googlesky/CVE-2026-130587) | OpenFunction &lt;=1.2.0: Serving.spec.template is a tenant-supplied PodSpec copied verbatim into operator workloads — a tenant with only create-Serving rights gets privileged host-namespace pods mounting the node root. Go driver against the… |
| [CVE-2026-131873](https://github.com/googlesky/CVE-2026-131873) | Gargoyle 2023.1-2026.1.1: Plus interpreter ReadAction() writes into a 1024-entry stack conditions array with no bounds check — an unterminated chain in a crafted/truncated .plus file crashes the player. ASan+UBSan differential: stack-… |
| [CVE-2026-131852](https://github.com/googlesky/CVE-2026-131852) | OwnTracks Recorder &lt; 1.0.5: json_response() passes attacker JSON as the printf format of mg_printf_data — a stored location tid with %p leaks live pointers via GET /api/0/last and %n crashes the daemon (rc=139) into a storage crash-loop.… |

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

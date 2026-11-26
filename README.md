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
| [CVE-2026-133210](https://github.com/googlesky/CVE-2026-133210) | Revive Adserver through 6.0.9: includebanner array keys are concatenated unquoted into a banner-lookup SQL query — blind SQL injection by a zone-linking user. No public fix commit; derived guard from lab: injected on vuln, rejected on guard |
| [CVE-2026-133204](https://github.com/googlesky/CVE-2026-133204) | Revive Adserver through 6.0.9: zone-linking selection lists are not restricted to the zone's agency — another agency's campaign and banner names are disclosed. No public fix commit; derived guard from lab: disclosed on vuln, rejected on… |
| [CVE-2026-133202](https://github.com/googlesky/CVE-2026-133202) | Revive Adserver through 6.0.9: manager links a tracker owned by one advertiser to a campaign owned by another — per-object access checks miss the relationship. No public fix commit; derived guard from lab: linked on vuln, rejected on guard |
| [CVE-2026-133206](https://github.com/googlesky/CVE-2026-133206) | Revive Adserver through 6.0.9: unescaped advertiser creative fields inject XML elements into VAST responses — attacker controls tracking elements served to publishers. No public fix commit; derived guard from lab: injected on vuln,… |
| [CVE-2026-133207](https://github.com/googlesky/CVE-2026-133207) | Revive Adserver through 6.0.9: entity name exported verbatim into an XLS cell — spreadsheet evaluates attacker formula when another user opens the report. No public fix commit; derived guard from lab: formula on vuln, text-prefixed on guard |
| [CVE-2026-133205](https://github.com/googlesky/CVE-2026-133205) | Revive Adserver through 6.0.9: XLS report accepts another agency's entity id as scope — victim name leaks into the header. No public fix commit; derived guard from lab: leaked on vuln, rejected on guard |

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

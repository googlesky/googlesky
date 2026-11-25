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
| [CVE-2026-135472](https://github.com/googlesky/CVE-2026-135472) | open62541 1.5.0-1.5.10: lookupRefType shallow-copies a string NodeId then frees results — UAF/double free. ASan differential: heap-use-after-free on vuln, clean read on fixed |
| [CVE-2026-107784](https://github.com/googlesky/CVE-2026-107784) | CPython before e4c751b: Windows tarfile extraction filters accept drive-relative names like C:foo — writes escape destination. Verbatim splitdrive guard: extracted on vuln, AbsolutePathError on fixed |
| [CVE-2026-129830](https://github.com/googlesky/CVE-2026-129830) | rsyslog before fc9a1e9: short timestamp rewrite left imuxsock TAG cursor ahead of remaining length — OOB read. ASan differential: heap-buffer-overflow on vuln, consistent cursor on fixed |
| [CVE-2026-136139](https://github.com/googlesky/CVE-2026-136139) | R-KV before 0fdff6e: untrusted safetensors index shard names joined to model dir — path traversal. Verbatim bare-name guard: escape on vuln, ValueError on fixed |
| [CVE-2026-135817](https://github.com/googlesky/CVE-2026-135817) | AiSOC before 8f22242: audit middleware labeled rows with unverified Bearer token claims — unauthenticated caller forges audit attribution. Verbatim principal guard: victim-admin audited on vuln, ignored on fixed |
| [CVE-2026-16668](https://github.com/googlesky/CVE-2026-16668) | MCUboot before 1b9d870: vendored zcbor_any_skip recurses through nested CBOR without a bound — stack exhaustion. Verbatim depth guard: RecursionError on vuln, ZCBOR_ERR_MAX_DEPTH on fixed |

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

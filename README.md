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
| [CVE-2026-130335](https://github.com/googlesky/CVE-2026-130335) | Info-ZIP Zip 3.0/3.1b-c: check_zipfile wraps the archive name in single quotes before system() — a name with ' breaks out and runs commands when a victim runs zip -T. Zip 3.0 + Debian patches without/with the fix (3.0-15 vs 3.0-16);… |
| [CVE-2026-129491](https://github.com/googlesky/CVE-2026-129491) | forum-java 20f7e68-63152c49: comment content stored verbatim reaches jQuery.html() via data-reply-content when a victim clicks Reply; sid cookie not HttpOnly -&gt; session theft + admin takeover. Real build @63152c49 + seeded MySQL; delivery… |
| [CVE-2026-129492](https://github.com/googlesky/CVE-2026-129492) | bolo-solo 1.7-2.6.4: addArticleComment stores the request's commentOriginalCommentName verbatim and skins render it unescaped — one unauthenticated POST to /article/comments = stored XSS in every visitor's page (sid not HttpOnly). Real… |
| [CVE-2026-129493](https://github.com/googlesky/CVE-2026-129493) | bolo-solo 1.7-2.6.4: GET /articles ships the plaintext articleViewPwd of protected articles to any anonymous visitor (paginated path skips removeUnusedProperties); leaked pwd unlocks the content via /console/article-pwd. Real v2.6.4 build;… |
| [CVE-2026-129494](https://github.com/googlesky/CVE-2026-129494) | CloudPaste 1.1.0-1.9.1: unauthenticated POST /api/proxy/link returns the WebDAV Basic Authorization header of any WebDAV-backed share — one anonymous request = full storage read/write/delete. Vendor 1.9.1 image vs synthetic internal-secret… |
| [CVE-2026-129358](https://github.com/googlesky/CVE-2026-129358) | Magma NMS &lt;=1.9.0 stored XSS: org names stored unvalidated and rendered unescaped (!{configJson}, JSON.stringify leaves &lt;&gt; alone) — an org named xss-&lt;/script&gt;&lt;script&gt;… executes in every member's browser. Real NMS+Postgres; raw breakout vs… |

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

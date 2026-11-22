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
| [CVE-2026-129230](https://github.com/googlesky/CVE-2026-129230) | NLTK &lt;=3.10.3: the WordNet Synset hypernym walkers recursed through the hypernym graph with no visited set and no depth cap — a cyclic or over-deep crafted data.&lt;pos&gt; graph raises an uncaught RecursionError. Verbatim wordnet.py 3.10.3 vs… |
| [CVE-2026-129228](https://github.com/googlesky/CVE-2026-129228) | NLTK &lt;=3.10.3: Toolbox settings-tree helpers recursed per element level with no counter and the parse producer builds unbounded nesting — a deeply nested settings file crashes to_settings_string with an uncaught RecursionError. Verbatim… |
| [CVE-2026-129226](https://github.com/googlesky/CVE-2026-129226) | NLTK &lt;=3.10.3: the semantic-logic type parser read_type recursed on both halves of every &lt;a,b&gt; with no depth bound — MAX_PARSE_DEPTH never ran on that path, so nested type strings via Type.fromstring raise an uncaught RecursionError.… |
| [CVE-2026-129225](https://github.com/googlesky/CVE-2026-129225) | NLTK &lt;=3.10.3: DependencyGraph traversal helpers (_tree/triples/get_cycle_path) recursed once per dependency link with no depth bound — a 2000-link chain raises an unhandled RecursionError in tree(). Verbatim dependencygraph.py 3.10.3 vs… |
| [CVE-2026-129232](https://github.com/googlesky/CVE-2026-129232) | NLTK &lt;=3.10.3: XMLCorpusView.read_block re-joined the root-to-node path on every start tag — O(depth) each, unbounded nesting costs O(n^2) CPU while iterating an attacker XML file. Verbatim xmldocs.py 3.10.3 vs 3.10.4: a 20000-deep file… |
| [CVE-2026-129231](https://github.com/googlesky/CVE-2026-129231) | NLTK &lt;=3.10.3: SeekableUnicodeStreamReader.readline re-ran splitlines over the whole growing buffer per 8000-char block — one unterminated line of N chars costs O(N^2) CPU through the default size=None corpus path. Verbatim data.py 3.10.3… |

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

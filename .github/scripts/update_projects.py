#!/usr/bin/env python3
"""Generate the profile project showcase from public GitHub repositories."""

from __future__ import annotations

import html
import json
import os
import re
import textwrap
import urllib.request
from pathlib import Path

OWNER = os.environ.get("GITHUB_REPOSITORY_OWNER", "googlesky")
API_ROOT = "https://api.github.com"
START = "<!-- PROJECTS:START -->"
END = "<!-- PROJECTS:END -->"
SECURITY_LIMIT = 6
OSS_LIMIT = 4
EXCLUDED_NAMES = {
    OWNER.lower(),
    "test",
    "backup-zcoder",
    "sky-mavis-devops-test",
    "ucp-admin-profile",
}
SECURITY_NAME = re.compile(r"^(?:CVE-\d{4}-\d+|GHSA-[a-z0-9]{4}(?:-[a-z0-9]{4}){3})$", re.I)


def fetch_repositories() -> list[dict]:
    repositories: list[dict] = []
    page = 1
    token = os.environ.get("GITHUB_TOKEN")

    while True:
        url = f"{API_ROOT}/users/{OWNER}/repos?per_page=100&type=owner&sort=updated&page={page}"
        headers = {
            "Accept": "application/vnd.github+json",
            "User-Agent": f"{OWNER}-profile-generator",
            "X-GitHub-Api-Version": "2022-11-28",
        }
        if token:
            headers["Authorization"] = f"Bearer {token}"
        request = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(request, timeout=30) as response:
            batch = json.load(response)
        repositories.extend(batch)
        if len(batch) < 100:
            return repositories
        page += 1


def clean_description(repository: dict) -> str:
    description = " ".join((repository.get("description") or "").split())
    description = textwrap.shorten(description, width=240, placeholder="…")
    return html.escape(description, quote=False).replace("|", "\\|")


def is_security_project(repository: dict) -> bool:
    topics = set(repository.get("topics") or [])
    return bool(SECURITY_NAME.match(repository["name"])) or "security-research" in topics


def is_presentable(repository: dict) -> bool:
    return (
        not repository["fork"]
        and not repository["archived"]
        and repository["name"].lower() not in EXCLUDED_NAMES
        and bool((repository.get("description") or "").strip())
    )


def project_table(repositories: list[dict]) -> str:
    rows = ["| Project | Description |", "| --- | --- |"]
    for repository in repositories:
        name = repository["name"]
        rows.append(f"| [{name}]({repository['html_url']}) | {clean_description(repository)} |")
    return "\n".join(rows)


def generate(repositories: list[dict]) -> str:
    presentable = [repository for repository in repositories if is_presentable(repository)]
    security = sorted(
        (repository for repository in presentable if is_security_project(repository)),
        key=lambda repository: (repository["created_at"], repository["name"]),
        reverse=True,
    )[:SECURITY_LIMIT]
    open_source = sorted(
        (repository for repository in presentable if not is_security_project(repository)),
        key=lambda repository: (repository["pushed_at"], repository["name"]),
        reverse=True,
    )[:OSS_LIMIT]

    sections = ["### Latest security research", ""]
    if security:
        sections.extend([project_table(security), ""])
    else:
        sections.extend(["New reproducible security research will appear here automatically.", ""])

    sections.extend(["### Open source & community", ""])
    if open_source:
        sections.extend([project_table(open_source), ""])
    else:
        sections.extend(["New public projects will appear here automatically.", ""])

    sections.append(
        "<sub>Updated automatically from public repositories. "
        "Forks, archived projects, and repositories without descriptions are excluded.</sub>"
    )
    return "\n".join(sections)


def main() -> None:
    readme = Path(__file__).resolve().parents[2] / "README.md"
    content = readme.read_text(encoding="utf-8")
    pattern = re.compile(f"{re.escape(START)}.*?{re.escape(END)}", re.S)
    replacement = f"{START}\n{generate(fetch_repositories())}\n{END}"
    updated, replacements = pattern.subn(replacement, content)
    if replacements != 1:
        raise SystemExit("README must contain exactly one PROJECTS marker pair")
    readme.write_text(updated, encoding="utf-8")
    print("Project showcase refreshed from GitHub repositories.")


if __name__ == "__main__":
    main()

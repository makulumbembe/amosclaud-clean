from __future__ import annotations

from dataclasses import dataclass, field
from typing import Any, Callable, Dict, Optional


@dataclass(frozen=True)
class Metadata:
    title: str = "App"
    description: str = ""


@dataclass
class LayoutResult:
    html_lang: str
    body_class: str
    metadata: Metadata
    children: Any
    extras: Dict[str, Any] = field(default_factory=dict)


def cn(*classes: Optional[str]) -> str:
    parts = []
    for c in classes:
        if not c:
            continue
        if isinstance(c, str):
            parts.extend([p for p in c.split() if p])
        else:
            parts.append(str(c))
    return " ".join(parts)


def font_sans(variable: str = "--font-sans") -> Dict[str, str]:
    return {"variable": variable, "className": "font-sans"}


def font_mono(variable: str = "--font-mono") -> Dict[str, str]:
    return {"variable": variable, "className": "font-mono"}


DEFAULT_METADATA = Metadata(title="App", description="")


def root_layout(
    children: Any,
    *,
    metadata: Metadata = DEFAULT_METADATA,
    lang: str = "en",
    font_sans_var: str = "--font-sans",
    font_mono_var: str = "--font-mono",
    body_extra_class: str = "",
    extras: Optional[Dict[str, Any]] = None,
) -> LayoutResult:
    sans = font_sans(font_sans_var)
    mono = font_mono(font_mono_var)

    body_class = cn(
        "min-h-screen bg-background font-sans antialiased",
        sans.get("variable"),
        mono.get("variable"),
        body_extra_class,
    )

    return LayoutResult(
        html_lang=lang,
        body_class=body_class,
        metadata=metadata,
        children=children,
        extras=dict(extras or {}),
    )


def render_layout(
    result: LayoutResult,
    *,
    render_children: Optional[Callable[[Any], str]] = None,
) -> str:
    rc = render_children or (lambda x: "" if x is None else str(x))
    head = f"<title>{_escape_html(result.metadata.title)}</title>"
    if result.metadata.description:
        head += (
            f'<meta name="description" content="{_escape_html(result.metadata.description)}"/>'
        )
    body = f'<body class="{_escape_html(result.body_class)}">{rc(result.children)}</body>'
    html = f'<!doctype html><html lang="{_escape_html(result.html_lang)}"><head>{head}</head>{body}</html>'
    return html


def _escape_html(s: str) -> str:
    return (
        s.replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace('"', "&quot;")
        .replace("'", "&#39;")
    )

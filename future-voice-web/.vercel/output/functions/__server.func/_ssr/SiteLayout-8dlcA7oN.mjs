import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { X, g as Menu } from "../_libs/lucide-react.mjs";
const logoAsset = "/assets/GIP_logo-BzHn1_CJ.jpeg";
const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/ideology", label: "Ideology" },
  { to: "/manifesto", label: "Manifesto" },
  { to: "/gallery", label: "Gallery" },
  { to: "/news", label: "News" },
  { to: "/join", label: "Join Us" },
  { to: "/contact", label: "Contact" }
];
function SiteLayout({ children }) {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tricolor-bar" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-40 backdrop-blur bg-background/85 border-b border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page flex items-center justify-between h-18 py-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-3 group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoAsset, alt: "Graduate India Party logo", className: "h-12 w-12 rounded-full ring-1 ring-border" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg text-navy", children: "Graduate India Party" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-[0.2em] uppercase text-india-green font-semibold", children: "No Corruption · No Casteism" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-1", children: navItems.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: n.to,
            className: "px-3 py-2 text-sm font-medium text-foreground/75 hover:text-navy transition-colors rounded-md",
            activeProps: { className: "px-3 py-2 text-sm font-semibold text-navy rounded-md bg-accent/15" },
            children: n.label
          },
          n.to
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "lg:hidden p-2", onClick: () => setOpen(!open), "aria-label": "Menu", children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-6 w-6" }) })
      ] }),
      open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden border-t border-border bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-page py-3 flex flex-col", children: navItems.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: n.to,
          onClick: () => setOpen(false),
          className: "py-3 text-sm font-medium text-foreground/80 border-b border-border last:border-b-0",
          activeProps: { className: "py-3 text-sm font-semibold text-navy border-b border-border last:border-b-0" },
          children: n.label
        },
        n.to
      )) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-24 border-t border-border bg-secondary/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-12 grid gap-10 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoAsset, alt: "", className: "h-10 w-10 rounded-full" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg text-navy", children: "Graduate India Party" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground max-w-xs", children: "Justice Without Corruption, Unity Beyond Caste. A movement for clean, transparent, people-first politics." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-navy mb-3 uppercase tracking-wider", children: "Explore" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm", children: navItems.slice(1).map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: n.to, className: "text-muted-foreground hover:text-navy transition-colors", children: n.label }) }, n.to)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-navy mb-3 uppercase tracking-wider", children: "Contact" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Email: contact@graduateindiaparty.in" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Helpline: +91 00000 00000" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Office address — to be announced" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tricolor-bar" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-4 text-xs text-muted-foreground flex flex-wrap justify-between gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Graduate India Party. All rights reserved."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admin", className: "hover:text-navy", children: "Admin" })
      ] })
    ] })
  ] });
}
export {
  SiteLayout as S,
  logoAsset as l
};

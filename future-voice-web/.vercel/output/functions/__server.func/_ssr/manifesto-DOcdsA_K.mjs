import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout } from "./SiteLayout-8dlcA7oN.mjs";
import { P as PageHeader, S as Section } from "./Section-CuUFh6n-.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/lucide-react.mjs";
const sections = [{
  title: "Anti-Corruption Measures",
  items: ["Whistleblower protection laws", "E-governance for every public service", "Public audits of all government spending", "Strict penalties for misuse of public office"]
}, {
  title: "Social Equality",
  items: ["Reservation reforms based on need", "Inclusive welfare schemes", "Anti-discrimination enforcement in education & jobs", "Representation reform at every level"]
}, {
  title: "Economic Development",
  items: ["Support for farmers and MSMEs", "Skill development for youth", "Fair credit access for rural entrepreneurs", "Modern, transparent procurement"]
}, {
  title: "Environmental Responsibility",
  items: ["Sustainable energy expansion", "Clean water initiatives", "Forest and biodiversity protection", "Climate-resilient infrastructure"]
}];
function ManifestoPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Manifesto", title: "Our promises to India.", subtitle: "Concrete commitments across the issues that matter most to citizens." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-8", children: sections.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-8", style: {
      boxShadow: "var(--shadow-soft)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl font-display text-accent/40 leading-none", children: String(i + 1).padStart(2, "0") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-2xl text-navy", children: s.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2 text-muted-foreground", children: s.items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 h-1.5 w-1.5 rounded-full bg-india-green flex-shrink-0" }),
        it
      ] }, it)) })
    ] }, s.title)) }) })
  ] });
}
export {
  ManifestoPage as component
};

import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout } from "./SiteLayout-8dlcA7oN.mjs";
import { P as PageHeader, S as Section } from "./Section-CuUFh6n-.mjs";
import { C as Calendar } from "../_libs/lucide-react.mjs";
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
const items = [{
  date: "Coming soon",
  title: "Party launch announcement",
  body: "Our first public address introducing Graduate India Party to citizens across the country."
}, {
  date: "Coming soon",
  title: "Grassroots membership drive",
  body: "District-level membership camps will open in every state. Watch this space for dates near you."
}, {
  date: "Coming soon",
  title: "Youth & women's leadership program",
  body: "Applications will open for the first cohort of GIP's leadership and civic-training program."
}];
function NewsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "News & Updates", title: "What's happening at GIP.", subtitle: "Press releases, events, and stories from our grassroots." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: items.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "rounded-2xl border border-border bg-card p-6", style: {
        boxShadow: "var(--shadow-soft)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs uppercase tracking-widest text-india-green font-semibold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3.5 w-3.5" }),
          n.date
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-xl text-navy", children: n.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: n.body })
      ] }, n.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-10 text-center text-sm text-muted-foreground", children: "More announcements coming soon. Follow us to stay updated." })
    ] })
  ] });
}
export {
  NewsPage as component
};

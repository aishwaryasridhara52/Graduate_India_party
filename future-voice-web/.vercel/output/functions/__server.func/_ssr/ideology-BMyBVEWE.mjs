import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout } from "./SiteLayout-8dlcA7oN.mjs";
import { P as PageHeader, S as Section } from "./Section-CuUFh6n-.mjs";
import { S as ShieldCheck, b as Scale, U as Users, c as Sprout, E as Eye } from "../_libs/lucide-react.mjs";
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
const principles = [{
  icon: ShieldCheck,
  title: "No Corruption",
  points: ["Introduce digital governance to reduce human interference and bribery.", "Enforce strict anti-corruption laws with real consequences.", "Protect whistleblowers and encourage citizen reporting.", "Publish public audits of government projects and expenditures."]
}, {
  icon: Scale,
  title: "No Casteism",
  points: ["End caste-based discrimination in politics, education, and employment.", "Promote unity and inclusiveness across communities.", "Ensure fair representation without bias or favoritism.", "Build policies that uplift marginalized groups while fostering social harmony."]
}, {
  icon: Users,
  title: "Democracy First",
  points: ["Strengthen grassroots participation in governance.", "Empower local bodies like Panchayats and Municipalities.", "Encourage citizen feedback in policymaking."]
}, {
  icon: Sprout,
  title: "Development for All",
  points: ["Invest in education, healthcare, and skill development.", "Support farmers, rural entrepreneurs, and small businesses.", "Promote sustainable infrastructure and clean energy.", "Ensure balanced growth between urban and rural areas."]
}, {
  icon: Eye,
  title: "Transparency & Accountability",
  points: ["Publish party finances and donations openly.", "Run a citizen oversight platform for monitoring government projects.", "Encourage participatory budgeting at local levels."]
}];
function IdeologyPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Our Ideology", title: "Five principles. One movement.", subtitle: "The values that shape every policy, every candidate, and every action GIP takes." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid lg:grid-cols-2 gap-8", children: principles.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "rounded-2xl border border-border bg-card p-8", style: {
      boxShadow: "var(--shadow-soft)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-lg bg-accent/20 text-navy flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl text-navy", children: p.title })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-muted-foreground", children: p.points.map((pt) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 h-1.5 w-1.5 rounded-full bg-india-green flex-shrink-0" }),
        pt
      ] }, pt)) })
    ] }, p.title)) }) })
  ] });
}
export {
  IdeologyPage as component
};

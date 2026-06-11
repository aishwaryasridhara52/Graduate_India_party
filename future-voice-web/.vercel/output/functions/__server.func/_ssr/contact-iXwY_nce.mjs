import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout } from "./SiteLayout-8dlcA7oN.mjs";
import { P as PageHeader, S as Section } from "./Section-CuUFh6n-.mjs";
import { M as MapPin, d as Phone, e as Mail } from "../_libs/lucide-react.mjs";
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
function ContactPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Contact Us", title: "Get in touch.", subtitle: "We believe in open communication and transparent politics. Reach out with queries, suggestions, or support." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: [{
        icon: MapPin,
        title: "Office",
        body: "Address to be announced"
      }, {
        icon: Phone,
        title: "Helpline",
        body: "+91 00000 00000"
      }, {
        icon: Mail,
        title: "Email",
        body: "contact@graduateindiaparty.in"
      }].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-8 text-center", style: {
        boxShadow: "var(--shadow-soft)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto h-12 w-12 rounded-full bg-accent/20 text-navy flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-xl text-navy", children: c.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: c.body })
      ] }, c.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-12 text-center text-sm text-muted-foreground max-w-xl mx-auto", children: [
        "To submit a membership application or volunteer, please visit our ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/join", className: "text-navy font-semibold hover:text-india-green", children: "Join Us" }),
        " page."
      ] })
    ] })
  ] });
}
export {
  ContactPage as component
};

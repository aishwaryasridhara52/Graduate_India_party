import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./SiteLayout-8dlcA7oN.mjs";
import { A as ArrowRight, S as ShieldCheck, b as Scale, U as Users, c as Sprout } from "../_libs/lucide-react.mjs";
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
const logoAsset = "/assets/GIP_logo-BzHn1_CJ.jpeg";
const narayanAsset = "/assets/Narayan-D5xt0FzH.jpeg";
const pillars = [{
  icon: ShieldCheck,
  title: "No Corruption",
  desc: "Transparency, accountability, and digital governance at every level."
}, {
  icon: Scale,
  title: "No Casteism",
  desc: "Equal rights, fair representation, and opportunity for every community."
}, {
  icon: Users,
  title: "Democracy First",
  desc: "People-centric policies and grassroots participation."
}, {
  icon: Sprout,
  title: "Development for All",
  desc: "Education, healthcare, farmers, and rural empowerment."
}];
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative overflow-hidden", style: {
      background: "var(--gradient-hero)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page grid md:grid-cols-2 gap-12 items-center py-16 md:py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow mb-4", children: "A movement for clean politics" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl md:text-6xl text-navy leading-[1.05]", children: [
          "Justice Without Corruption,",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-india-green", children: "Unity Beyond Caste." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-xl", children: "Graduate India Party (GIP) stands for transparent governance, equal opportunity, and inclusive development — built by citizens, for citizens." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/join", className: "inline-flex items-center gap-2 rounded-full bg-navy text-white px-6 py-3 text-sm font-semibold hover:opacity-90 transition-opacity", style: {
            boxShadow: "var(--shadow-elegant)"
          }, children: [
            "Join the Movement ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/manifesto", className: "inline-flex items-center gap-2 rounded-full border border-navy/20 px-6 py-3 text-sm font-semibold text-navy hover:bg-navy/5", children: "Read Manifesto" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-6 rounded-full opacity-20 blur-3xl", style: {
          background: "var(--gradient-tricolor)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl bg-card p-8 ring-1 ring-border", style: {
          boxShadow: "var(--shadow-elegant)"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoAsset, alt: "Graduate India Party emblem", className: "mx-auto h-56 w-56 object-contain" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl text-navy", children: "Graduate India Party" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs tracking-[0.25em] uppercase text-india-green", children: "No Corruption · No Casteism" })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-page py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow mb-3", children: "Our Core Principles" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl text-navy", children: "Four pillars that guide every decision we make." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: pillars.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-6 hover:-translate-y-1 transition-transform", style: {
        boxShadow: "var(--shadow-soft)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-lg bg-accent/20 text-navy flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl text-navy", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: p.desc })
      ] }, p.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary/40 border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-20 grid md:grid-cols-[auto_1fr] gap-10 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-3 rounded-full", style: {
          background: "var(--gradient-tricolor)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: narayanAsset, alt: "Narayan", className: "relative h-44 w-44 rounded-full object-cover ring-4 ring-card" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow mb-2", children: "Leadership" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl text-navy", children: "Narayan" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground max-w-2xl", children: '"Politics must return to its first purpose — service. We are building a party where every graduate, farmer, worker, and student has an equal voice, and where corruption finds no shelter."' }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/about", className: "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-india-green", children: [
          "Learn more about us ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-page py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl p-10 md:p-16 text-center text-white", style: {
      background: "linear-gradient(135deg, var(--navy), oklch(0.35 0.1 250))",
      boxShadow: "var(--shadow-elegant)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl", children: "Be part of the change." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-white/80 max-w-xl mx-auto", children: "Become a member, volunteer, or simply stay informed. Every voice strengthens the movement." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/join", className: "rounded-full bg-accent text-navy px-6 py-3 text-sm font-bold hover:opacity-90", children: "Become a Member" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/gallery", className: "rounded-full border border-white/30 px-6 py-3 text-sm font-semibold hover:bg-white/10", children: "Watch & Explore" })
      ] })
    ] }) })
  ] });
}
export {
  HomePage as component
};

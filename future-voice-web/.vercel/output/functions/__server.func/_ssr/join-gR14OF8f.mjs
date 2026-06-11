import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout } from "./SiteLayout-8dlcA7oN.mjs";
import { P as PageHeader, S as Section } from "./Section-CuUFh6n-.mjs";
import { s as supabase } from "./client-hyNIc-FW.mjs";
import { a as CircleCheck } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType, l as literalType } from "../_libs/zod.mjs";
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
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
const schema = objectType({
  name: stringType().trim().min(1, "Name required").max(100),
  email: stringType().trim().email("Valid email required").max(255),
  phone: stringType().trim().min(5, "Phone required").max(30),
  state: stringType().trim().min(1, "State required").max(80),
  occupation: stringType().trim().min(1, "Occupation required").max(100),
  message: stringType().trim().max(2e3).optional().or(literalType(""))
});
const states = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Other"];
function JoinPage() {
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    occupation: "",
    message: ""
  });
  const [errors, setErrors] = reactExports.useState({});
  const [status, setStatus] = reactExports.useState("idle");
  const [errMsg, setErrMsg] = reactExports.useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    setErrors({});
    const result = schema.safeParse(form);
    if (!result.success) {
      const fe = {};
      result.error.issues.forEach((i) => {
        if (i.path[0]) fe[String(i.path[0])] = i.message;
      });
      setErrors(fe);
      return;
    }
    setStatus("loading");
    const {
      error
    } = await supabase.from("memberships").insert({
      ...result.data,
      message: result.data.message || null
    });
    if (error) {
      setErrMsg(error.message);
      setStatus("error");
    } else {
      setStatus("done");
      setForm({
        name: "",
        email: "",
        phone: "",
        state: "",
        occupation: "",
        message: ""
      });
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Join Us", title: "Add your voice to the movement.", subtitle: "Membership is open to every citizen who believes in clean, casteless, accountable politics." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-5 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "lg:col-span-2 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl text-navy", children: "Why join?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "As a member, you help shape policy, support local candidates, and join a network of citizens building a corruption-free India." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3 text-sm text-muted-foreground", children: ["Volunteer in your district", "Take part in youth & women's programs", "Receive policy briefings and updates", "Support compliant, transparent fundraising"].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-india-green flex-shrink-0" }),
          b
        ] }, b)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-3", children: status === "done" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-india-green/30 bg-india-green/5 p-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mx-auto h-12 w-12 text-india-green" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-2xl text-navy", children: "Welcome to the movement." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "Your membership application has been received. We'll be in touch shortly." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setStatus("idle"), className: "mt-6 rounded-full border border-navy/20 px-6 py-2 text-sm font-semibold text-navy hover:bg-navy/5", children: "Submit another" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "rounded-2xl border border-border bg-card p-8 space-y-5", style: {
        boxShadow: "var(--shadow-soft)"
      }, children: [
        ["name", "email", "phone", "occupation"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium text-navy capitalize", children: k }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: k === "email" ? "email" : k === "phone" ? "tel" : "text", value: form[k], onChange: (e) => setForm({
            ...form,
            [k]: e.target.value
          }), className: "mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" }),
          errors[k] && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-destructive", children: errors[k] })
        ] }, k)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium text-navy", children: "State" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: form.state, onChange: (e) => setForm({
            ...form,
            state: e.target.value
          }), className: "mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select your state…" }),
            states.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s, children: s }, s))
          ] }),
          errors.state && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-destructive", children: errors.state })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-sm font-medium text-navy", children: [
            "Message ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-normal", children: "(optional)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 4, value: form.message, onChange: (e) => setForm({
            ...form,
            message: e.target.value
          }), className: "mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring", placeholder: "Why do you want to join GIP?" })
        ] }),
        status === "error" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive", children: errMsg }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: status === "loading", className: "w-full rounded-full bg-navy text-white py-3 text-sm font-semibold hover:opacity-90 disabled:opacity-50", style: {
          boxShadow: "var(--shadow-elegant)"
        }, children: status === "loading" ? "Submitting…" : "Become a Member" })
      ] }) })
    ] }) })
  ] });
}
export {
  JoinPage as component
};

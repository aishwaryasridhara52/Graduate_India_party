import { j as jsxRuntimeExports } from "../_libs/react.mjs";
function PageHeader({ eyebrow, title, subtitle }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative overflow-hidden border-b border-border", style: { background: "var(--gradient-hero)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-16 md:py-24", children: [
    eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow mb-3", children: eyebrow }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl text-navy max-w-3xl", children: title }),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-muted-foreground max-w-2xl", children: subtitle })
  ] }) });
}
function Section({ children, className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: `container-page py-12 md:py-16 ${className}`, children });
}
export {
  PageHeader as P,
  Section as S
};

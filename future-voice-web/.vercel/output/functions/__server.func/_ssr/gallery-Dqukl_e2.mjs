import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout } from "./SiteLayout-8dlcA7oN.mjs";
import { P as PageHeader, S as Section } from "./Section-CuUFh6n-.mjs";
import { s as supabase } from "./client-hyNIc-FW.mjs";
import { I as Image, P as Play } from "../_libs/lucide-react.mjs";
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
function GalleryPage() {
  const [items, setItems] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [active, setActive] = reactExports.useState(null);
  reactExports.useEffect(() => {
    (async () => {
      const {
        data,
        error
      } = await supabase.from("media_items").select("id,title,description,media_type,storage_path").order("created_at", {
        ascending: false
      });
      if (error || !data) {
        setLoading(false);
        return;
      }
      const withUrls = await Promise.all(data.map(async (it) => {
        const {
          data: signed
        } = await supabase.storage.from("gip-media").createSignedUrl(it.storage_path, 60 * 60 * 24);
        return {
          ...it,
          signedUrl: signed?.signedUrl
        };
      }));
      setItems(withUrls);
      setLoading(false);
    })();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Gallery", title: "Watch & explore.", subtitle: "AI-generated videos and photographs from the Graduate India Party movement." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
      loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-muted-foreground", children: "Loading…" }) : items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16 border border-dashed border-border rounded-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "mx-auto h-10 w-10 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "No media yet. Check back soon." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActive(it), className: "group text-left rounded-2xl overflow-hidden border border-border bg-card hover:-translate-y-1 transition-transform", style: {
        boxShadow: "var(--shadow-soft)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-video bg-secondary overflow-hidden", children: it.media_type === "image" && it.signedUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: it.signedUrl, alt: it.title, className: "h-full w-full object-cover group-hover:scale-105 transition-transform" }) : it.signedUrl ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("video", { src: it.signedUrl, className: "h-full w-full object-cover", muted: true, preload: "metadata" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-navy/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 w-14 rounded-full bg-white/90 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-6 w-6 text-navy ml-1" }) }) })
        ] }) : null }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-india-green font-semibold", children: it.media_type }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 font-display text-lg text-navy", children: it.title }),
          it.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground line-clamp-2", children: it.description })
        ] })
      ] }, it.id)) }),
      active && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-navy/80 backdrop-blur flex items-center justify-center p-4", onClick: () => setActive(null), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl w-full bg-card rounded-2xl overflow-hidden", onClick: (e) => e.stopPropagation(), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video bg-black", children: active.media_type === "image" && active.signedUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: active.signedUrl, alt: active.title, className: "h-full w-full object-contain" }) : active.signedUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx("video", { src: active.signedUrl, controls: true, autoPlay: true, className: "h-full w-full" }) : null }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl text-navy", children: active.title }),
          active.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: active.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActive(null), className: "mt-4 text-sm text-navy font-semibold hover:text-india-green", children: "Close" })
        ] })
      ] }) })
    ] })
  ] });
}
export {
  GalleryPage as component
};

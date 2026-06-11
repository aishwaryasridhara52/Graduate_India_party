import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
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
const appCss = "/assets/styles-B2OwfqlE.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-display text-navy", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90", children: "Go home" }) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
        router.invalidate();
        reset();
      }, className: "rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground", children: "Try again" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "rounded-md border border-input bg-background px-4 py-2 text-sm font-medium", children: "Go home" })
    ] })
  ] }) });
}
const Route$a = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Graduate India Party — No Corruption, No Casteism" },
      { name: "description", content: "Graduate India Party (GIP): a movement for clean, transparent, people-first politics. Justice without corruption, unity beyond caste." },
      { name: "author", content: "Graduate India Party" },
      { property: "og:title", content: "Graduate India Party" },
      { property: "og:description", content: "Justice Without Corruption, Unity Beyond Caste." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700;800&display=swap" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$a.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const BASE_URL = "";
const Route$9 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = ["/", "/about", "/ideology", "/manifesto", "/gallery", "/news", "/join", "/contact"];
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...paths.map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`),
          `</urlset>`
        ].join("\n");
        return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      }
    }
  }
});
const $$splitComponentImporter$8 = () => import("./news-BizQVaR-.mjs");
const Route$8 = createFileRoute("/news")({
  head: () => ({
    meta: [{
      title: "News & Updates — Graduate India Party"
    }, {
      name: "description",
      content: "Press releases, upcoming events, media coverage, and grassroots stories from Graduate India Party."
    }, {
      property: "og:title",
      content: "News & Updates — GIP"
    }, {
      property: "og:description",
      content: "Latest from the Graduate India Party movement."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./manifesto-DOcdsA_K.mjs");
const Route$7 = createFileRoute("/manifesto")({
  head: () => ({
    meta: [{
      title: "Manifesto — Graduate India Party"
    }, {
      name: "description",
      content: "GIP's commitments: anti-corruption measures, social equality, economic development, and environmental responsibility."
    }, {
      property: "og:title",
      content: "Manifesto — Graduate India Party"
    }, {
      property: "og:description",
      content: "What we will do — anti-corruption, equality, development, environment."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./join-gR14OF8f.mjs");
const Route$6 = createFileRoute("/join")({
  head: () => ({
    meta: [{
      title: "Join Us — Graduate India Party"
    }, {
      name: "description",
      content: "Become a member of Graduate India Party. Add your voice to a movement for clean, transparent, people-first politics."
    }, {
      property: "og:title",
      content: "Join Graduate India Party"
    }, {
      property: "og:description",
      content: "Membership form — join the movement."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./ideology-BMyBVEWE.mjs");
const Route$5 = createFileRoute("/ideology")({
  head: () => ({
    meta: [{
      title: "Our Ideology — Graduate India Party"
    }, {
      name: "description",
      content: "The core principles guiding GIP: no corruption, no casteism, democracy first, development for all, transparency and accountability."
    }, {
      property: "og:title",
      content: "Our Ideology — Graduate India Party"
    }, {
      property: "og:description",
      content: "Five core principles guiding our movement."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./gallery-Dqukl_e2.mjs");
const Route$4 = createFileRoute("/gallery")({
  head: () => ({
    meta: [{
      title: "Gallery — Graduate India Party"
    }, {
      name: "description",
      content: "Watch AI videos and view photos from the Graduate India Party movement."
    }, {
      property: "og:title",
      content: "GIP Gallery"
    }, {
      property: "og:description",
      content: "AI videos and photos from the movement."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./contact-iXwY_nce.mjs");
const Route$3 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact Us — Graduate India Party"
    }, {
      name: "description",
      content: "Get in touch with Graduate India Party for queries, suggestions, or support."
    }, {
      property: "og:title",
      content: "Contact Graduate India Party"
    }, {
      property: "og:description",
      content: "We believe in open communication and transparent politics."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./admin-Cfa4tI5B.mjs");
const Route$2 = createFileRoute("/admin")({
  head: () => ({
    meta: [{
      title: "Admin — Graduate India Party"
    }, {
      name: "robots",
      content: "noindex"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-B-s0yaun.mjs");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About Us — Graduate India Party"
    }, {
      name: "description",
      content: "Why Graduate India Party was founded, our mission to end corruption and casteism, and our vision for transparent governance."
    }, {
      property: "og:title",
      content: "About Graduate India Party"
    }, {
      property: "og:description",
      content: "Founding story, mission, and leadership of GIP."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-c-wQRLTL.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Graduate India Party — Justice Without Corruption, Unity Beyond Caste"
    }, {
      name: "description",
      content: "Join the Graduate India Party movement for transparent governance, equal opportunity, and inclusive development."
    }, {
      property: "og:title",
      content: "Graduate India Party"
    }, {
      property: "og:description",
      content: "Justice Without Corruption, Unity Beyond Caste."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SitemapDotxmlRoute = Route$9.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$a
});
const NewsRoute = Route$8.update({
  id: "/news",
  path: "/news",
  getParentRoute: () => Route$a
});
const ManifestoRoute = Route$7.update({
  id: "/manifesto",
  path: "/manifesto",
  getParentRoute: () => Route$a
});
const JoinRoute = Route$6.update({
  id: "/join",
  path: "/join",
  getParentRoute: () => Route$a
});
const IdeologyRoute = Route$5.update({
  id: "/ideology",
  path: "/ideology",
  getParentRoute: () => Route$a
});
const GalleryRoute = Route$4.update({
  id: "/gallery",
  path: "/gallery",
  getParentRoute: () => Route$a
});
const ContactRoute = Route$3.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$a
});
const AdminRoute = Route$2.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => Route$a
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$a
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$a
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  AdminRoute,
  ContactRoute,
  GalleryRoute,
  IdeologyRoute,
  JoinRoute,
  ManifestoRoute,
  NewsRoute,
  SitemapDotxmlRoute
};
const routeTree = Route$a._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};

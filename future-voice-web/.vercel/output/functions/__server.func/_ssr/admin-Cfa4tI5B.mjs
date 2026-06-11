import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout } from "./SiteLayout-8dlcA7oN.mjs";
import { S as Section, P as PageHeader } from "./Section-CuUFh6n-.mjs";
import { s as supabase } from "./client-hyNIc-FW.mjs";
import { L as LogOut, f as Upload, T as Trash2, U as Users } from "../_libs/lucide-react.mjs";
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
function AdminPage() {
  const [session, setSession] = reactExports.useState(null);
  const [isAdmin, setIsAdmin] = reactExports.useState(false);
  const [checking, setChecking] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const {
      data: sub
    } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    supabase.auth.getSession().then(({
      data
    }) => setSession(data.session));
    return () => sub.subscription.unsubscribe();
  }, []);
  reactExports.useEffect(() => {
    if (!session) {
      setIsAdmin(false);
      setChecking(false);
      return;
    }
    setChecking(true);
    supabase.from("user_roles").select("role").eq("user_id", session.user.id).eq("role", "admin").maybeSingle().then(({
      data
    }) => {
      setIsAdmin(!!data);
      setChecking(false);
    });
  }, [session]);
  if (!session) return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AuthPanel, {}) });
  if (checking) return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-muted-foreground", children: "Loading…" }) }) });
  if (!isAdmin) return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md mx-auto text-center rounded-2xl border border-border bg-card p-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Your account is signed in but does not have admin access." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => supabase.auth.signOut(), className: "mt-4 rounded-full border border-navy/20 px-4 py-2 text-sm font-semibold text-navy", children: "Sign out" })
  ] }) }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AdminDashboard, {}) });
}
function AuthPanel() {
  const [mode, setMode] = reactExports.useState("signin");
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [error, setError] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  async function submit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const fn = mode === "signin" ? supabase.auth.signInWithPassword({
      email,
      password
    }) : supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/admin`
      }
    });
    const {
      error: error2
    } = await fn;
    if (error2) setError(error2.message);
    setLoading(false);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Admin", title: "Sign in to manage GIP" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md mx-auto rounded-2xl border border-border bg-card p-8", style: {
      boxShadow: "var(--shadow-soft)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setMode("signin"), className: `flex-1 py-2 text-sm font-semibold rounded-md ${mode === "signin" ? "bg-navy text-white" : "bg-secondary text-foreground"}`, children: "Sign In" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setMode("signup"), className: `flex-1 py-2 text-sm font-semibold rounded-md ${mode === "signup" ? "bg-navy text-white" : "bg-secondary text-foreground"}`, children: "Sign Up" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium text-navy", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", required: true, value: email, onChange: (e) => setEmail(e.target.value), className: "mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium text-navy", children: "Password" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", required: true, minLength: 8, value: password, onChange: (e) => setPassword(e.target.value), className: "mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm" })
        ] }),
        error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive", children: error }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: loading, type: "submit", className: "w-full rounded-full bg-navy text-white py-2.5 text-sm font-semibold disabled:opacity-50", children: loading ? "Please wait…" : mode === "signin" ? "Sign In" : "Create Account" }),
        mode === "signup" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "The first account created becomes the site administrator." })
      ] })
    ] }) })
  ] });
}
function AdminDashboard() {
  const [tab, setTab] = reactExports.useState("media");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Admin", title: "Manage GIP" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-6 flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setTab("media"), className: `px-4 py-2 text-sm font-semibold rounded-md ${tab === "media" ? "bg-navy text-white" : "bg-secondary"}`, children: "Media" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setTab("members"), className: `px-4 py-2 text-sm font-semibold rounded-md ${tab === "members" ? "bg-navy text-white" : "bg-secondary"}`, children: "Members" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => supabase.auth.signOut(), className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-navy", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }),
          " Sign out"
        ] })
      ] }),
      tab === "media" ? /* @__PURE__ */ jsxRuntimeExports.jsx(MediaManager, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(MembersList, {})
    ] })
  ] });
}
function MediaManager() {
  const [items, setItems] = reactExports.useState([]);
  const [title, setTitle] = reactExports.useState("");
  const [description, setDescription] = reactExports.useState("");
  const [file, setFile] = reactExports.useState(null);
  const [uploading, setUploading] = reactExports.useState(false);
  const [err, setErr] = reactExports.useState("");
  async function load() {
    const {
      data
    } = await supabase.from("media_items").select("*").order("created_at", {
      ascending: false
    });
    setItems(data ?? []);
  }
  reactExports.useEffect(() => {
    load();
  }, []);
  async function handleUpload(e) {
    e.preventDefault();
    setErr("");
    if (!file || !title.trim()) {
      setErr("Title and file are required.");
      return;
    }
    setUploading(true);
    const mediaType = file.type.startsWith("video/") ? "video" : file.type.startsWith("image/") ? "image" : null;
    if (!mediaType) {
      setErr("Only images and videos are supported.");
      setUploading(false);
      return;
    }
    const ext = file.name.split(".").pop() ?? "bin";
    const path = `${mediaType}s/${crypto.randomUUID()}.${ext}`;
    const {
      error: upErr
    } = await supabase.storage.from("gip-media").upload(path, file, {
      contentType: file.type
    });
    if (upErr) {
      setErr(upErr.message);
      setUploading(false);
      return;
    }
    const {
      data: pub
    } = supabase.storage.from("gip-media").getPublicUrl(path);
    const {
      error: insErr
    } = await supabase.from("media_items").insert({
      title: title.trim(),
      description: description.trim() || null,
      media_type: mediaType,
      storage_path: path,
      public_url: pub.publicUrl
    });
    if (insErr) {
      setErr(insErr.message);
      setUploading(false);
      return;
    }
    setTitle("");
    setDescription("");
    setFile(null);
    document.getElementById("file-input").value = "";
    setUploading(false);
    load();
  }
  async function remove(item) {
    if (!confirm(`Delete "${item.title}"?`)) return;
    await supabase.storage.from("gip-media").remove([item.storage_path]);
    await supabase.from("media_items").delete().eq("id", item.id);
    load();
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleUpload, className: "rounded-2xl border border-border bg-card p-6 space-y-4 h-fit", style: {
      boxShadow: "var(--shadow-soft)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-xl text-navy flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-5 w-5" }),
        " Upload media"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium text-navy", children: "Title" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: title, onChange: (e) => setTitle(e.target.value), maxLength: 120, className: "mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium text-navy", children: "Description (optional)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: description, onChange: (e) => setDescription(e.target.value), rows: 3, maxLength: 500, className: "mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium text-navy", children: "Image or video file" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "file-input", type: "file", accept: "image/*,video/*", onChange: (e) => setFile(e.target.files?.[0] ?? null), className: "mt-1.5 w-full text-sm" })
      ] }),
      err && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive", children: err }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: uploading, type: "submit", className: "w-full rounded-full bg-navy text-white py-2.5 text-sm font-semibold disabled:opacity-50", children: uploading ? "Uploading…" : "Upload" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-xl text-navy", children: [
        "Existing media (",
        items.length,
        ")"
      ] }),
      items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Nothing uploaded yet." }) : items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4 rounded-lg border border-border bg-card p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-india-green font-semibold", children: it.media_type }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-navy truncate", children: it.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: new Date(it.created_at).toLocaleString() })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => remove(it), className: "text-destructive hover:opacity-70 p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
      ] }, it.id))
    ] })
  ] });
}
function MembersList() {
  const [list, setList] = reactExports.useState([]);
  reactExports.useEffect(() => {
    supabase.from("memberships").select("*").order("created_at", {
      ascending: false
    }).then(({
      data
    }) => setList(data ?? []));
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-xl text-navy flex items-center gap-2 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5" }),
      " Members (",
      list.length,
      ")"
    ] }),
    list.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No membership applications yet." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto rounded-lg border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-secondary text-navy", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: ["Name", "Email", "Phone", "State", "Occupation", "Date"].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-3 font-semibold", children: h }, h)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: list.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: m.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: m.email }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: m.phone }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: m.state }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: m.occupation }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-muted-foreground", children: new Date(m.created_at).toLocaleDateString() })
      ] }, m.id)) })
    ] }) })
  ] });
}
export {
  AdminPage as component
};

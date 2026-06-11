import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader, Section } from "@/components/Section";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { Session } from "@supabase/supabase-js";
import { LogOut, Upload, Trash2, Users } from "lucide-react";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [{ title: "Admin — Graduate India Party" }, { name: "robots", content: "noindex" }],
  }),
  component: AdminPage,
});

type Media = { id: string; title: string; description: string | null; media_type: string; storage_path: string; created_at: string };
type Membership = { id: string; name: string; email: string; phone: string; state: string; occupation: string; message: string | null; created_at: string };

function AdminPage() {
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    return () => sub.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session) { setIsAdmin(false); setChecking(false); return; }
    setChecking(true);
    supabase.from("user_roles").select("role").eq("user_id", session.user.id).eq("role", "admin").maybeSingle()
      .then(({ data }) => { setIsAdmin(!!data); setChecking(false); });
  }, [session]);

  if (!session) return <SiteLayout><AuthPanel /></SiteLayout>;
  if (checking) return <SiteLayout><Section><p className="text-center text-muted-foreground">Loading…</p></Section></SiteLayout>;
  if (!isAdmin) return (
    <SiteLayout>
      <Section>
        <div className="max-w-md mx-auto text-center rounded-2xl border border-border bg-card p-8">
          <p className="text-muted-foreground">Your account is signed in but does not have admin access.</p>
          <button onClick={() => supabase.auth.signOut()} className="mt-4 rounded-full border border-navy/20 px-4 py-2 text-sm font-semibold text-navy">Sign out</button>
        </div>
      </Section>
    </SiteLayout>
  );

  return <SiteLayout><AdminDashboard /></SiteLayout>;
}

function AuthPanel() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(""); setLoading(true);
    const fn = mode === "signin" ? supabase.auth.signInWithPassword({ email, password }) : supabase.auth.signUp({ email, password, options: { emailRedirectTo: `${window.location.origin}/admin` } });
    const { error } = await fn;
    if (error) setError(error.message);
    setLoading(false);
  }

  return (
    <>
      <PageHeader eyebrow="Admin" title="Sign in to manage GIP" />
      <Section>
        <div className="max-w-md mx-auto rounded-2xl border border-border bg-card p-8" style={{ boxShadow: "var(--shadow-soft)" }}>
          <div className="flex gap-2 mb-6">
            <button onClick={() => setMode("signin")} className={`flex-1 py-2 text-sm font-semibold rounded-md ${mode === "signin" ? "bg-navy text-white" : "bg-secondary text-foreground"}`}>Sign In</button>
            <button onClick={() => setMode("signup")} className={`flex-1 py-2 text-sm font-semibold rounded-md ${mode === "signup" ? "bg-navy text-white" : "bg-secondary text-foreground"}`}>Sign Up</button>
          </div>
          <form onSubmit={submit} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-navy">Email</label>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm" />
            </div>
            <div>
              <label className="text-sm font-medium text-navy">Password</label>
              <input type="password" required minLength={8} value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm" />
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <button disabled={loading} type="submit" className="w-full rounded-full bg-navy text-white py-2.5 text-sm font-semibold disabled:opacity-50">
              {loading ? "Please wait…" : mode === "signin" ? "Sign In" : "Create Account"}
            </button>
            {mode === "signup" && <p className="text-xs text-muted-foreground">The first account created becomes the site administrator.</p>}
          </form>
        </div>
      </Section>
    </>
  );
}

function AdminDashboard() {
  const [tab, setTab] = useState<"media" | "members">("media");
  return (
    <>
      <PageHeader eyebrow="Admin" title="Manage GIP" />
      <Section>
        <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
          <div className="flex gap-2">
            <button onClick={() => setTab("media")} className={`px-4 py-2 text-sm font-semibold rounded-md ${tab === "media" ? "bg-navy text-white" : "bg-secondary"}`}>Media</button>
            <button onClick={() => setTab("members")} className={`px-4 py-2 text-sm font-semibold rounded-md ${tab === "members" ? "bg-navy text-white" : "bg-secondary"}`}>Members</button>
          </div>
          <button onClick={() => supabase.auth.signOut()} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-navy">
            <LogOut className="h-4 w-4" /> Sign out
          </button>
        </div>
        {tab === "media" ? <MediaManager /> : <MembersList />}
      </Section>
    </>
  );
}

function MediaManager() {
  const [items, setItems] = useState<Media[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [err, setErr] = useState("");

  async function load() {
    const { data } = await supabase.from("media_items").select("*").order("created_at", { ascending: false });
    setItems(data ?? []);
  }
  useEffect(() => { load(); }, []);

  async function handleUpload(e: React.FormEvent) {
    e.preventDefault();
    setErr("");
    if (!file || !title.trim()) { setErr("Title and file are required."); return; }
    setUploading(true);
    const mediaType = file.type.startsWith("video/") ? "video" : file.type.startsWith("image/") ? "image" : null;
    if (!mediaType) { setErr("Only images and videos are supported."); setUploading(false); return; }
    const ext = file.name.split(".").pop() ?? "bin";
    const path = `${mediaType}s/${crypto.randomUUID()}.${ext}`;
    const { error: upErr } = await supabase.storage.from("gip-media").upload(path, file, { contentType: file.type });
    if (upErr) { setErr(upErr.message); setUploading(false); return; }
    const { data: pub } = supabase.storage.from("gip-media").getPublicUrl(path);
    const { error: insErr } = await supabase.from("media_items").insert({
      title: title.trim(), description: description.trim() || null, media_type: mediaType,
      storage_path: path, public_url: pub.publicUrl,
    });
    if (insErr) { setErr(insErr.message); setUploading(false); return; }
    setTitle(""); setDescription(""); setFile(null);
    (document.getElementById("file-input") as HTMLInputElement | null)!.value = "";
    setUploading(false);
    load();
  }

  async function remove(item: Media) {
    if (!confirm(`Delete "${item.title}"?`)) return;
    await supabase.storage.from("gip-media").remove([item.storage_path]);
    await supabase.from("media_items").delete().eq("id", item.id);
    load();
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <form onSubmit={handleUpload} className="rounded-2xl border border-border bg-card p-6 space-y-4 h-fit" style={{ boxShadow: "var(--shadow-soft)" }}>
        <h3 className="font-display text-xl text-navy flex items-center gap-2"><Upload className="h-5 w-5" /> Upload media</h3>
        <div>
          <label className="text-sm font-medium text-navy">Title</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} maxLength={120} className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="text-sm font-medium text-navy">Description (optional)</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={3} maxLength={500} className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
        </div>
        <div>
          <label className="text-sm font-medium text-navy">Image or video file</label>
          <input id="file-input" type="file" accept="image/*,video/*" onChange={(e) => setFile(e.target.files?.[0] ?? null)} className="mt-1.5 w-full text-sm" />
        </div>
        {err && <p className="text-sm text-destructive">{err}</p>}
        <button disabled={uploading} type="submit" className="w-full rounded-full bg-navy text-white py-2.5 text-sm font-semibold disabled:opacity-50">
          {uploading ? "Uploading…" : "Upload"}
        </button>
      </form>
      <div className="space-y-3">
        <h3 className="font-display text-xl text-navy">Existing media ({items.length})</h3>
        {items.length === 0 ? (
          <p className="text-sm text-muted-foreground">Nothing uploaded yet.</p>
        ) : items.map((it) => (
          <div key={it.id} className="flex items-center justify-between gap-4 rounded-lg border border-border bg-card p-4">
            <div className="min-w-0">
              <div className="text-xs uppercase tracking-widest text-india-green font-semibold">{it.media_type}</div>
              <div className="font-semibold text-navy truncate">{it.title}</div>
              <div className="text-xs text-muted-foreground">{new Date(it.created_at).toLocaleString()}</div>
            </div>
            <button onClick={() => remove(it)} className="text-destructive hover:opacity-70 p-2"><Trash2 className="h-4 w-4" /></button>
          </div>
        ))}
      </div>
    </div>
  );
}

function MembersList() {
  const [list, setList] = useState<Membership[]>([]);
  useEffect(() => {
    supabase.from("memberships").select("*").order("created_at", { ascending: false })
      .then(({ data }) => setList(data ?? []));
  }, []);
  return (
    <div>
      <h3 className="font-display text-xl text-navy flex items-center gap-2 mb-4"><Users className="h-5 w-5" /> Members ({list.length})</h3>
      {list.length === 0 ? <p className="text-sm text-muted-foreground">No membership applications yet.</p> : (
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="bg-secondary text-navy">
              <tr>
                {["Name","Email","Phone","State","Occupation","Date"].map(h => <th key={h} className="text-left p-3 font-semibold">{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {list.map((m) => (
                <tr key={m.id} className="border-t border-border">
                  <td className="p-3">{m.name}</td>
                  <td className="p-3">{m.email}</td>
                  <td className="p-3">{m.phone}</td>
                  <td className="p-3">{m.state}</td>
                  <td className="p-3">{m.occupation}</td>
                  <td className="p-3 text-muted-foreground">{new Date(m.created_at).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

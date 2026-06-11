import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader, Section } from "@/components/Section";
import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Join Us — Graduate India Party" },
      { name: "description", content: "Become a member of Graduate India Party. Add your voice to a movement for clean, transparent, people-first politics." },
      { property: "og:title", content: "Join Graduate India Party" },
      { property: "og:description", content: "Membership form — join the movement." },
    ],
  }),
  component: JoinPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().min(5, "Phone required").max(30),
  state: z.string().trim().min(1, "State required").max(80),
  occupation: z.string().trim().min(1, "Occupation required").max(100),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

const states = ["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Delhi","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Other"];

function JoinPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", state: "", occupation: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [errMsg, setErrMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrors({});
    const result = schema.safeParse(form);
    if (!result.success) {
      const fe: Record<string, string> = {};
      result.error.issues.forEach((i) => { if (i.path[0]) fe[String(i.path[0])] = i.message; });
      setErrors(fe);
      return;
    }
    setStatus("loading");
    const { error } = await supabase.from("memberships").insert({
      ...result.data,
      message: result.data.message || null,
    });
    if (error) {
      setErrMsg(error.message);
      setStatus("error");
    } else {
      setStatus("done");
      setForm({ name: "", email: "", phone: "", state: "", occupation: "", message: "" });
    }
  }

  return (
    <SiteLayout>
      <PageHeader eyebrow="Join Us" title="Add your voice to the movement." subtitle="Membership is open to every citizen who believes in clean, casteless, accountable politics." />
      <Section>
        <div className="grid lg:grid-cols-5 gap-12">
          <aside className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="font-display text-2xl text-navy">Why join?</h2>
              <p className="mt-3 text-muted-foreground">As a member, you help shape policy, support local candidates, and join a network of citizens building a corruption-free India.</p>
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {["Volunteer in your district","Take part in youth & women's programs","Receive policy briefings and updates","Support compliant, transparent fundraising"].map((b) => (
                <li key={b} className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-india-green flex-shrink-0" />{b}</li>
              ))}
            </ul>
          </aside>

          <div className="lg:col-span-3">
            {status === "done" ? (
              <div className="rounded-2xl border border-india-green/30 bg-india-green/5 p-10 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-india-green" />
                <h3 className="mt-4 font-display text-2xl text-navy">Welcome to the movement.</h3>
                <p className="mt-2 text-muted-foreground">Your membership application has been received. We'll be in touch shortly.</p>
                <button onClick={() => setStatus("idle")} className="mt-6 rounded-full border border-navy/20 px-6 py-2 text-sm font-semibold text-navy hover:bg-navy/5">Submit another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-8 space-y-5" style={{ boxShadow: "var(--shadow-soft)" }}>
                {(["name","email","phone","occupation"] as const).map((k) => (
                  <div key={k}>
                    <label className="text-sm font-medium text-navy capitalize">{k}</label>
                    <input
                      type={k === "email" ? "email" : k === "phone" ? "tel" : "text"}
                      value={form[k]}
                      onChange={(e) => setForm({ ...form, [k]: e.target.value })}
                      className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                    {errors[k] && <p className="mt-1 text-xs text-destructive">{errors[k]}</p>}
                  </div>
                ))}
                <div>
                  <label className="text-sm font-medium text-navy">State</label>
                  <select
                    value={form.state}
                    onChange={(e) => setForm({ ...form, state: e.target.value })}
                    className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select your state…</option>
                    {states.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.state && <p className="mt-1 text-xs text-destructive">{errors.state}</p>}
                </div>
                <div>
                  <label className="text-sm font-medium text-navy">Message <span className="text-muted-foreground font-normal">(optional)</span></label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Why do you want to join GIP?"
                  />
                </div>
                {status === "error" && <p className="text-sm text-destructive">{errMsg}</p>}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full rounded-full bg-navy text-white py-3 text-sm font-semibold hover:opacity-90 disabled:opacity-50"
                  style={{ boxShadow: "var(--shadow-elegant)" }}
                >
                  {status === "loading" ? "Submitting…" : "Become a Member"}
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}

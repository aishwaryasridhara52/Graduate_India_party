import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ArrowRight, ShieldCheck, Scale, Users, Sprout } from "lucide-react";
import logoAsset from "@/assets/GIP_logo.jpeg?url";
import narayanAsset from "@/assets/Narayan.jpeg?url";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Graduate India Party — Justice Without Corruption, Unity Beyond Caste" },
      { name: "description", content: "Join the Graduate India Party movement for transparent governance, equal opportunity, and inclusive development." },
      { property: "og:title", content: "Graduate India Party" },
      { property: "og:description", content: "Justice Without Corruption, Unity Beyond Caste." },
    ],
  }),
  component: HomePage,
});

const pillars = [
  { icon: ShieldCheck, title: "No Corruption", desc: "Transparency, accountability, and digital governance at every level." },
  { icon: Scale, title: "No Casteism", desc: "Equal rights, fair representation, and opportunity for every community." },
  { icon: Users, title: "Democracy First", desc: "People-centric policies and grassroots participation." },
  { icon: Sprout, title: "Development for All", desc: "Education, healthcare, farmers, and rural empowerment." },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="container-page grid md:grid-cols-2 gap-12 items-center py-16 md:py-28">
          <div>
            <div className="eyebrow mb-4">A movement for clean politics</div>
            <h1 className="font-display text-4xl md:text-6xl text-navy leading-[1.05]">
              Justice Without Corruption,<br />
              <span className="text-india-green">Unity Beyond Caste.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Graduate India Party (GIP) stands for transparent governance, equal opportunity, and inclusive development — built by citizens, for citizens.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/join" className="inline-flex items-center gap-2 rounded-full bg-navy text-white px-6 py-3 text-sm font-semibold hover:opacity-90 transition-opacity" style={{ boxShadow: "var(--shadow-elegant)" }}>
                Join the Movement <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/manifesto" className="inline-flex items-center gap-2 rounded-full border border-navy/20 px-6 py-3 text-sm font-semibold text-navy hover:bg-navy/5">
                Read Manifesto
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-full opacity-20 blur-3xl" style={{ background: "var(--gradient-tricolor)" }} />
            <div className="relative rounded-2xl bg-card p-8 ring-1 ring-border" style={{ boxShadow: "var(--shadow-elegant)" }}>
              <img src={logoAsset} alt="Graduate India Party emblem" className="mx-auto h-56 w-56 object-contain" />
              <div className="mt-6 text-center">
                <div className="font-display text-2xl text-navy">Graduate India Party</div>
                <div className="mt-1 text-xs tracking-[0.25em] uppercase text-india-green">No Corruption · No Casteism</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="container-page py-20">
        <div className="max-w-2xl">
          <div className="eyebrow mb-3">Our Core Principles</div>
          <h2 className="font-display text-3xl md:text-4xl text-navy">Four pillars that guide every decision we make.</h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-xl border border-border bg-card p-6 hover:-translate-y-1 transition-transform" style={{ boxShadow: "var(--shadow-soft)" }}>
              <div className="h-11 w-11 rounded-lg bg-accent/20 text-navy flex items-center justify-center mb-4">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl text-navy">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LEADER */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="container-page py-20 grid md:grid-cols-[auto_1fr] gap-10 items-center">
          <div className="relative">
            <div className="absolute -inset-3 rounded-full" style={{ background: "var(--gradient-tricolor)" }} />
            <img src={narayanAsset} alt="Narayan" className="relative h-44 w-44 rounded-full object-cover ring-4 ring-card" />
          </div>
          <div>
            <div className="eyebrow mb-2">Leadership</div>
            <h2 className="font-display text-3xl text-navy">Narayan</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl">
              "Politics must return to its first purpose — service. We are building a party where every graduate, farmer, worker, and student has an equal voice, and where corruption finds no shelter."
            </p>
            <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-india-green">
              Learn more about us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-20">
        <div className="rounded-2xl p-10 md:p-16 text-center text-white" style={{ background: "linear-gradient(135deg, var(--navy), oklch(0.35 0.1 250))", boxShadow: "var(--shadow-elegant)" }}>
          <h2 className="font-display text-3xl md:text-4xl">Be part of the change.</h2>
          <p className="mt-3 text-white/80 max-w-xl mx-auto">Become a member, volunteer, or simply stay informed. Every voice strengthens the movement.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/join" className="rounded-full bg-accent text-navy px-6 py-3 text-sm font-bold hover:opacity-90">Become a Member</Link>
            <Link to="/gallery" className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold hover:bg-white/10">Watch & Explore</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

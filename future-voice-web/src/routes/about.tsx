import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader, Section } from "@/components/Section";
import logoAsset from "@/assets/GIP_logo.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Graduate India Party" },
      { name: "description", content: "Why Graduate India Party was founded, our mission to end corruption and casteism, and our vision for transparent governance." },
      { property: "og:title", content: "About Graduate India Party" },
      { property: "og:description", content: "Founding story, mission, and leadership of GIP." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="About Us" title="A new chapter in Indian politics, written by citizens." subtitle="Graduate India Party was founded with one belief: that politics must serve people, not the other way around." />
      <Section>
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-display text-2xl text-navy mb-3">Our founding story</h2>
              <p className="text-muted-foreground leading-relaxed">
                GIP was born from a conviction shared by educators, professionals, students, and citizens across India — that corruption and caste-based politics have held our country back for too long. We came together to offer a different path: governance that is honest, inclusive, and accountable to the people it serves.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-navy mb-3">Our mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To eliminate corruption from public life and end discrimination based on caste — by building transparent institutions, fair representation, and policies that uplift every community.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-navy mb-3">Our vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                Transparent governance, equal opportunity, and inclusive development — a republic where every citizen, regardless of background, can prosper with dignity.
              </p>
            </div>
          </div>
          <aside>
            <div className="rounded-2xl border border-border bg-card p-6 text-center" style={{ boxShadow: "var(--shadow-soft)" }}>
              <img src={logoAsset} alt="Narayan" className="mx-auto h-32 w-32 rounded-full ring-4 ring-accent/30" />
              <h3 className="mt-4 font-display text-xl text-navy">Narayan</h3>
              <p className="mt-1 text-xs uppercase tracking-widest text-india-green">Leadership</p>
              <p className="mt-3 text-sm text-muted-foreground">"Build the politics you wish to see — clean, courageous, and for everyone."</p>
            </div>
          </aside>
        </div>
      </Section>
    </SiteLayout>
  );
}

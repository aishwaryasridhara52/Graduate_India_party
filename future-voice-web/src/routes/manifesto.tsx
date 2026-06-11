import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader, Section } from "@/components/Section";

export const Route = createFileRoute("/manifesto")({
  head: () => ({
    meta: [
      { title: "Manifesto — Graduate India Party" },
      { name: "description", content: "GIP's commitments: anti-corruption measures, social equality, economic development, and environmental responsibility." },
      { property: "og:title", content: "Manifesto — Graduate India Party" },
      { property: "og:description", content: "What we will do — anti-corruption, equality, development, environment." },
    ],
  }),
  component: ManifestoPage,
});

const sections = [
  { title: "Anti-Corruption Measures", items: ["Whistleblower protection laws", "E-governance for every public service", "Public audits of all government spending", "Strict penalties for misuse of public office"] },
  { title: "Social Equality", items: ["Reservation reforms based on need", "Inclusive welfare schemes", "Anti-discrimination enforcement in education & jobs", "Representation reform at every level"] },
  { title: "Economic Development", items: ["Support for farmers and MSMEs", "Skill development for youth", "Fair credit access for rural entrepreneurs", "Modern, transparent procurement"] },
  { title: "Environmental Responsibility", items: ["Sustainable energy expansion", "Clean water initiatives", "Forest and biodiversity protection", "Climate-resilient infrastructure"] },
];

function ManifestoPage() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Manifesto" title="Our promises to India." subtitle="Concrete commitments across the issues that matter most to citizens." />
      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-border bg-card p-8" style={{ boxShadow: "var(--shadow-soft)" }}>
              <div className="text-5xl font-display text-accent/40 leading-none">{String(i + 1).padStart(2, "0")}</div>
              <h2 className="mt-3 font-display text-2xl text-navy">{s.title}</h2>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                {s.items.map((it) => (
                  <li key={it} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-india-green flex-shrink-0" />{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader, Section } from "@/components/Section";
import { ShieldCheck, Scale, Users, Sprout, Eye } from "lucide-react";

export const Route = createFileRoute("/ideology")({
  head: () => ({
    meta: [
      { title: "Our Ideology — Graduate India Party" },
      { name: "description", content: "The core principles guiding GIP: no corruption, no casteism, democracy first, development for all, transparency and accountability." },
      { property: "og:title", content: "Our Ideology — Graduate India Party" },
      { property: "og:description", content: "Five core principles guiding our movement." },
    ],
  }),
  component: IdeologyPage,
});

const principles = [
  {
    icon: ShieldCheck, title: "No Corruption",
    points: [
      "Introduce digital governance to reduce human interference and bribery.",
      "Enforce strict anti-corruption laws with real consequences.",
      "Protect whistleblowers and encourage citizen reporting.",
      "Publish public audits of government projects and expenditures.",
    ],
  },
  {
    icon: Scale, title: "No Casteism",
    points: [
      "End caste-based discrimination in politics, education, and employment.",
      "Promote unity and inclusiveness across communities.",
      "Ensure fair representation without bias or favoritism.",
      "Build policies that uplift marginalized groups while fostering social harmony.",
    ],
  },
  {
    icon: Users, title: "Democracy First",
    points: [
      "Strengthen grassroots participation in governance.",
      "Empower local bodies like Panchayats and Municipalities.",
      "Encourage citizen feedback in policymaking.",
    ],
  },
  {
    icon: Sprout, title: "Development for All",
    points: [
      "Invest in education, healthcare, and skill development.",
      "Support farmers, rural entrepreneurs, and small businesses.",
      "Promote sustainable infrastructure and clean energy.",
      "Ensure balanced growth between urban and rural areas.",
    ],
  },
  {
    icon: Eye, title: "Transparency & Accountability",
    points: [
      "Publish party finances and donations openly.",
      "Run a citizen oversight platform for monitoring government projects.",
      "Encourage participatory budgeting at local levels.",
    ],
  },
];

function IdeologyPage() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Our Ideology" title="Five principles. One movement." subtitle="The values that shape every policy, every candidate, and every action GIP takes." />
      <Section>
        <div className="grid lg:grid-cols-2 gap-8">
          {principles.map((p) => (
            <article key={p.title} className="rounded-2xl border border-border bg-card p-8" style={{ boxShadow: "var(--shadow-soft)" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-11 w-11 rounded-lg bg-accent/20 text-navy flex items-center justify-center">
                  <p.icon className="h-5 w-5" />
                </div>
                <h2 className="font-display text-2xl text-navy">{p.title}</h2>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-india-green flex-shrink-0" />{pt}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}

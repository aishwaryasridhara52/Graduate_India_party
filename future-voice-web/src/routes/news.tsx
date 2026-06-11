import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader, Section } from "@/components/Section";
import { Calendar } from "lucide-react";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Updates — Graduate India Party" },
      { name: "description", content: "Press releases, upcoming events, media coverage, and grassroots stories from Graduate India Party." },
      { property: "og:title", content: "News & Updates — GIP" },
      { property: "og:description", content: "Latest from the Graduate India Party movement." },
    ],
  }),
  component: NewsPage,
});

const items = [
  { date: "Coming soon", title: "Party launch announcement", body: "Our first public address introducing Graduate India Party to citizens across the country." },
  { date: "Coming soon", title: "Grassroots membership drive", body: "District-level membership camps will open in every state. Watch this space for dates near you." },
  { date: "Coming soon", title: "Youth & women's leadership program", body: "Applications will open for the first cohort of GIP's leadership and civic-training program." },
];

function NewsPage() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="News & Updates" title="What's happening at GIP." subtitle="Press releases, events, and stories from our grassroots." />
      <Section>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((n) => (
            <article key={n.title} className="rounded-2xl border border-border bg-card p-6" style={{ boxShadow: "var(--shadow-soft)" }}>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-india-green font-semibold">
                <Calendar className="h-3.5 w-3.5" />{n.date}
              </div>
              <h3 className="mt-3 font-display text-xl text-navy">{n.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{n.body}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">More announcements coming soon. Follow us to stay updated.</p>
      </Section>
    </SiteLayout>
  );
}

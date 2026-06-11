import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader, Section } from "@/components/Section";
import { Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Graduate India Party" },
      { name: "description", content: "Get in touch with Graduate India Party for queries, suggestions, or support." },
      { property: "og:title", content: "Contact Graduate India Party" },
      { property: "og:description", content: "We believe in open communication and transparent politics." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Contact Us" title="Get in touch." subtitle="We believe in open communication and transparent politics. Reach out with queries, suggestions, or support." />
      <Section>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: MapPin, title: "Office", body: "Address to be announced" },
            { icon: Phone, title: "Helpline", body: "+91 00000 00000" },
            { icon: Mail, title: "Email", body: "contact@graduateindiaparty.in" },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-card p-8 text-center" style={{ boxShadow: "var(--shadow-soft)" }}>
              <div className="mx-auto h-12 w-12 rounded-full bg-accent/20 text-navy flex items-center justify-center">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-xl text-navy">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-sm text-muted-foreground max-w-xl mx-auto">
          To submit a membership application or volunteer, please visit our <a href="/join" className="text-navy font-semibold hover:text-india-green">Join Us</a> page.
        </p>
      </Section>
    </SiteLayout>
  );
}

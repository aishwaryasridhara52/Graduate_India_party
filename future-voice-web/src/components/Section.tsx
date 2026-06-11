import type { ReactNode } from "react";

export function PageHeader({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden border-b border-border" style={{ background: "var(--gradient-hero)" }}>
      <div className="container-page py-16 md:py-24">
        {eyebrow && <div className="eyebrow mb-3">{eyebrow}</div>}
        <h1 className="font-display text-4xl md:text-5xl text-navy max-w-3xl">{title}</h1>
        {subtitle && <p className="mt-4 text-lg text-muted-foreground max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  );
}

export function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <section className={`container-page py-12 md:py-16 ${className}`}>{children}</section>
  );
}

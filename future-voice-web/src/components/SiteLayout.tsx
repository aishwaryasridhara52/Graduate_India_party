import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/GIP_logo.jpeg";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/ideology", label: "Ideology" },
  { to: "/manifesto", label: "Manifesto" },
  { to: "/gallery", label: "Gallery" },
  { to: "/news", label: "News" },
  { to: "/join", label: "Join Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="tricolor-bar" />
      <header className="sticky top-0 z-40 backdrop-blur bg-background/85 border-b border-border">
        <div className="container-page flex items-center justify-between h-18 py-3">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logoAsset} alt="Graduate India Party logo" className="h-12 w-12 rounded-full ring-1 ring-border" />
            <div className="leading-tight">
              <div className="font-display text-lg text-navy">Graduate India Party</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-india-green font-semibold">No Corruption · No Casteism</div>
            </div>
          </Link>
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="px-3 py-2 text-sm font-medium text-foreground/75 hover:text-navy transition-colors rounded-md"
                activeProps={{ className: "px-3 py-2 text-sm font-semibold text-navy rounded-md bg-accent/15" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="lg:hidden border-t border-border bg-background">
            <div className="container-page py-3 flex flex-col">
              {navItems.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="py-3 text-sm font-medium text-foreground/80 border-b border-border last:border-b-0"
                  activeProps={{ className: "py-3 text-sm font-semibold text-navy border-b border-border last:border-b-0" }}
                >
                  {n.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="mt-24 border-t border-border bg-secondary/40">
        <div className="container-page py-12 grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img src={logoAsset} alt="" className="h-10 w-10 rounded-full" />
              <span className="font-display text-lg text-navy">Graduate India Party</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Justice Without Corruption, Unity Beyond Caste. A movement for clean, transparent, people-first politics.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-navy mb-3 uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2 text-sm">
              {navItems.slice(1).map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-muted-foreground hover:text-navy transition-colors">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-navy mb-3 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: contact@graduateindiaparty.in</li>
              <li>Helpline: +91 00000 00000</li>
              <li>Office address — to be announced</li>
            </ul>
          </div>
        </div>
        <div className="tricolor-bar" />
        <div className="container-page py-4 text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} Graduate India Party. All rights reserved.</span>
          <Link to="/admin" className="hover:text-navy">Admin</Link>
        </div>
      </footer>
    </div>
  );
}

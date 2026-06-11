import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader, Section } from "@/components/Section";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Play, Image as ImageIcon } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Graduate India Party" },
      { name: "description", content: "Watch AI videos and view photos from the Graduate India Party movement." },
      { property: "og:title", content: "GIP Gallery" },
      { property: "og:description", content: "AI videos and photos from the movement." },
    ],
  }),
  component: GalleryPage,
});

type Item = {
  id: string;
  title: string;
  description: string | null;
  media_type: "image" | "video";
  storage_path: string;
  signedUrl?: string;
};

function GalleryPage() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState<Item | null>(null);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from("media_items")
        .select("id,title,description,media_type,storage_path")
        .order("created_at", { ascending: false });
      if (error || !data) { setLoading(false); return; }
      const withUrls = await Promise.all(
        data.map(async (it) => {
          const { data: signed } = await supabase.storage
            .from("gip-media")
            .createSignedUrl(it.storage_path, 60 * 60 * 24);
          return { ...it, signedUrl: signed?.signedUrl } as Item;
        })
      );
      setItems(withUrls);
      setLoading(false);
    })();
  }, []);

  return (
    <SiteLayout>
      <PageHeader eyebrow="Gallery" title="Watch & explore." subtitle="AI-generated videos and photographs from the Graduate India Party movement." />
      <Section>
        {loading ? (
          <p className="text-center text-muted-foreground">Loading…</p>
        ) : items.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-border rounded-2xl">
            <ImageIcon className="mx-auto h-10 w-10 text-muted-foreground" />
            <p className="mt-3 text-muted-foreground">No media yet. Check back soon.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((it) => (
              <button key={it.id} onClick={() => setActive(it)} className="group text-left rounded-2xl overflow-hidden border border-border bg-card hover:-translate-y-1 transition-transform" style={{ boxShadow: "var(--shadow-soft)" }}>
                <div className="relative aspect-video bg-secondary overflow-hidden">
                  {it.media_type === "image" && it.signedUrl ? (
                    <img src={it.signedUrl} alt={it.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform" />
                  ) : it.signedUrl ? (
                    <>
                      <video src={it.signedUrl} className="h-full w-full object-cover" muted preload="metadata" />
                      <div className="absolute inset-0 flex items-center justify-center bg-navy/30">
                        <div className="h-14 w-14 rounded-full bg-white/90 flex items-center justify-center">
                          <Play className="h-6 w-6 text-navy ml-1" />
                        </div>
                      </div>
                    </>
                  ) : null}
                </div>
                <div className="p-4">
                  <div className="text-xs uppercase tracking-widest text-india-green font-semibold">{it.media_type}</div>
                  <h3 className="mt-1 font-display text-lg text-navy">{it.title}</h3>
                  {it.description && <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{it.description}</p>}
                </div>
              </button>
            ))}
          </div>
        )}

        {active && (
          <div className="fixed inset-0 z-50 bg-navy/80 backdrop-blur flex items-center justify-center p-4" onClick={() => setActive(null)}>
            <div className="max-w-4xl w-full bg-card rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <div className="aspect-video bg-black">
                {active.media_type === "image" && active.signedUrl ? (
                  <img src={active.signedUrl} alt={active.title} className="h-full w-full object-contain" />
                ) : active.signedUrl ? (
                  <video src={active.signedUrl} controls autoPlay className="h-full w-full" />
                ) : null}
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-navy">{active.title}</h3>
                {active.description && <p className="mt-2 text-muted-foreground">{active.description}</p>}
                <button onClick={() => setActive(null)} className="mt-4 text-sm text-navy font-semibold hover:text-india-green">Close</button>
              </div>
            </div>
          </div>
        )}
      </Section>
    </SiteLayout>
  );
}

import { Badge } from "@/components/ui/badge";

interface TeamHeroProps {
  t: {
    badge: string;
    title: string;
    description: string;
  };
}

export default function TeamHero({ t }: TeamHeroProps) {
  return (
    <section className="w-full border-b border-white/10 bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <Badge className="mb-6 rounded-none border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-[10px] uppercase tracking-[0.35em] text-blue-300 hover:bg-blue-500/10">
            {t.badge}
          </Badge>

          <h1 className="mb-6 text-4xl font-bold tracking-tighter md:text-6xl">
            {t.title}
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">
            {t.description}
          </p>
        </div>
      </div>
    </section>
  );
}
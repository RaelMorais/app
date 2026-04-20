import { Badge } from "@/components/ui/badge";

interface SolutionsHeroProps {
  t: {
    badge: string;
    title: string;
    description: string;
  };
}

export default function SolutionsHero({ t }: SolutionsHeroProps) {
  return (
    <section className="relative w-full min-h-[78vh] overflow-hidden border-b border-white/10 bg-black text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/solutions.png')" }}
      />

      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
      <div className="relative z-10 flex min-h-[78vh] items-center px-6 py-24">
        <div className="mx-auto w-full max-w-6xl">
          <div className="max-w-3xl text-left">
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
      </div>
    </section>
  );
}
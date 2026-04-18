import SolutionCard from "@/components/pages/solutions/solution-card-component";

interface SolutionsGridProps {
  t: {
    title: string;
    description: string;
    learnMore: string;
    items: {
      title: string;
      description: string;
      image: string;
      href: string;
    }[];
  };
}

export default function SolutionsGrid({ t }: SolutionsGridProps) {
  return (
    <section className="w-full bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <h2 className="mb-4 text-3xl font-bold tracking-tighter">
            {t.title}
          </h2>

          <p className="leading-relaxed text-zinc-300">
            {t.description}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {t.items.map((solution) => (
            <SolutionCard
              key={solution.title}
              title={solution.title}
              description={solution.description}
              image={solution.image}
              href={solution.href}
              learnMore={t.learnMore}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
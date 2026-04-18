interface CompanySolutionProps {
  t: {
    title: string;
    description: string;
    items: {
      title: string;
      description: string;
      image: string;
    }[];
  };
}

export default function CompanySolution({ t }: CompanySolutionProps) {
  return (
    <section className="w-full bg-black text-white py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            {t.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-300 leading-relaxed">
            {t.description}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {t.items.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden border border-white/10 bg-zinc-950"
            >
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="mb-3 text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="text-zinc-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
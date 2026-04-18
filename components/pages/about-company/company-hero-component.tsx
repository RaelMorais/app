interface CompanyHeroProps {
  t: {
    label: string;
    title: string;
    subtitle: string;
  };
}

export default function CompanyHero({ t }: CompanyHeroProps) {
  return (
    <section className="relative w-full min-h-[78vh] overflow-hidden border-b border-white/10 bg-black text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/company.png')" }}
      />

      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />

      <div className="relative z-10 flex min-h-[78vh] items-center px-6 py-24">
        <div className="mx-auto w-full max-w-6xl">
          <div className="max-w-3xl text-left">
            <span className="mb-6 inline-block text-[10px] font-bold uppercase tracking-[0.5em] text-blue-400">
              {t.label}
            </span>

            <h1 className="mb-8 text-5xl font-black leading-none tracking-tighter md:text-7xl xl:text-8xl">
              {t.title}
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-gray-200 md:text-xl">
              {t.subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
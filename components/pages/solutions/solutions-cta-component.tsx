import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

interface SolutionsCtaProps {
  t: {
    title: string;
    description: string;
    button: string;
    email: string;
    subject: string;
  };
}

export default function SolutionsCta({ t }: SolutionsCtaProps) {
  const mailHref = `mailto:${t.email}?subject=${encodeURIComponent(t.subject)}`;

  return (
    <section className="w-full border-t border-white/10 bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl border border-white/10 bg-zinc-950 px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="mb-4 text-3xl font-bold tracking-tighter">
              {t.title}
            </h2>

            <p className="max-w-2xl leading-relaxed text-zinc-300">
              {t.description}
            </p>
          </div>

          <div className="flex md:justify-end">
            <Button
              asChild
              className="rounded-none bg-black text-white hover:bg-white/10"
            >
              <a href={mailHref} className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>{t.button}</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
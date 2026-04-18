import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface SolutionCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  learnMore: string;
}

export default function SolutionCard({
  title,
  description,
  image,
  href,
  learnMore,
}: SolutionCardProps) {
  return (
    <Card className="overflow-hidden rounded-none border-white/10 bg-zinc-950 text-white">
      <div className="h-56 w-full overflow-hidden border-b border-white/10">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>

      <CardContent className="p-6">
        <h3 className="mb-3 text-2xl font-semibold tracking-tight">{title}</h3>

        <p className="mb-6 leading-relaxed text-zinc-300">{description}</p>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-300 transition hover:text-blue-200"
        >
          <span>{learnMore}</span>
          <ArrowRight className="h-4 w-4" />
        </a>
      </CardContent>
    </Card>
  );
}
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";

interface TeamMemberCardProps {
  name: string;
  role: string;
  meaning: string;
  email: string;
  image: string;
  emailLabel: string;
  emailAria: string;
  highlight?: boolean;
}

export default function TeamMemberCard({
  name,
  role,
  meaning,
  email,
  image,
  emailLabel,
  emailAria,
  highlight = false,
}: TeamMemberCardProps) {
  return (
    <Card
      className={`overflow-hidden rounded-none text-white ${
        highlight
          ? "border-blue-400/30 bg-blue-500/10"
          : "border-white/10 bg-zinc-950"
      }`}
    >
      <div className="h-72 w-full overflow-hidden border-b border-white/10 bg-zinc-900">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-top"
        />
      </div>

      <CardContent className="p-6">
        <div className="mb-4">
          <div className="mb-2 flex items-center justify-between gap-3">
            <p
              className={`text-xs font-semibold uppercase tracking-[0.25em] ${
                highlight ? "text-blue-300" : "text-zinc-400"
              }`}
            >
              {role}
            </p>

            <a
              href={`mailto:${email}`}
              aria-label={`${emailAria} ${name}`}
              className="inline-flex shrink-0 items-center gap-1.5 text-xs font-medium uppercase tracking-[0.12em] text-blue-300 transition hover:text-blue-200"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>{emailLabel}</span>
            </a>
          </div>

          <h3 className="text-2xl font-semibold tracking-tight text-white">
            {name}
          </h3>
        </div>

        <p className="text-sm leading-relaxed text-zinc-400">{meaning}</p>
      </CardContent>
    </Card>
  );
}
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Rocket,
  Target,
  ShieldCheck,
  Users,
  HeartHandshake,
  Briefcase,
} from "lucide-react";

interface CompanyMissionProps {
  t: {
    title: string;
    description: string;
    mission: {
      title: string;
      description: string;
    };
    vision: {
      title: string;
      description: string;
    };
    valuesSection: {
      title: string;
      description: string;
    };
    values: {
      title: string;
      description: string;
    }[];
  };
}

const icons = [
  Rocket,
  Target,
  ShieldCheck,
  Users,
  HeartHandshake,
  Briefcase,
];

const styles = [
  {
    card: "border-cyan-400/25 bg-cyan-500/10",
    title: "text-cyan-200",
    iconColor: "text-cyan-300",
  },
  {
    card: "border-violet-400/25 bg-violet-500/10",
    title: "text-violet-200",
    iconColor: "text-violet-300",
  },
  {
    card: "border-emerald-400/25 bg-emerald-500/10",
    title: "text-emerald-200",
    iconColor: "text-emerald-300",
  },
  {
    card: "border-amber-400/25 bg-amber-500/10",
    title: "text-amber-200",
    iconColor: "text-amber-300",
  },
  {
    card: "border-rose-400/25 bg-rose-500/10",
    title: "text-rose-200",
    iconColor: "text-rose-300",
  },
  {
    card: "border-sky-400/25 bg-sky-500/10",
    title: "text-sky-200",
    iconColor: "text-sky-300",
  },
];

export default function CompanyMission({ t }: CompanyMissionProps) {
  return (
    <section className="w-full bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            {t.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-zinc-300">
            {t.description}
          </p>
        </div>

        <div className="mb-12 grid gap-6 md:grid-cols-2">
          <Card className="rounded-none border border-cyan-400/25 bg-cyan-500/10 text-white">
            <CardHeader className="flex flex-row items-center gap-3">
              <Rocket className="h-6 w-6 text-cyan-300" />
              <CardTitle className="text-2xl text-cyan-200">
                {t.mission.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed text-zinc-300">
                {t.mission.description}
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-none border border-violet-400/25 bg-violet-500/10 text-white">
            <CardHeader className="flex flex-row items-center gap-3">
              <Target className="h-6 w-6 text-violet-300" />
              <CardTitle className="text-2xl text-violet-200">
                {t.vision.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed text-zinc-300">
                {t.vision.description}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-10 text-center">
          <h3 className="text-3xl font-bold tracking-tighter">
            {t.valuesSection.title}
          </h3>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-zinc-300">
            {t.valuesSection.description}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {t.values.map((valor, index) => {
            const Icon = icons[index % icons.length];
            const style = styles[index % styles.length];

            return (
              <Card
                key={valor.title}
                className={`rounded-none border text-white ${style.card}`}
              >
                <CardHeader className="flex flex-row items-center gap-3">
                  <Icon className={`h-5 w-5 ${style.iconColor}`} />
                  <CardTitle className={`text-xl ${style.title}`}>
                    {valor.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="leading-relaxed text-zinc-300">
                    {valor.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
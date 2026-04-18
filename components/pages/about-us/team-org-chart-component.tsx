import TeamMemberCard from "./team-member-card-component";

interface TeamMember {
  name: string;
  role: string;
  meaning: string;
  email: string;
  image: string;
  level: string;
}

interface TeamOrgChartProps {
  t: {
    title: string;
    description: string;
    emailLabel: string;
    emailAria: string;
    members: TeamMember[];
  };
}

export default function TeamOrgChart({ t }: TeamOrgChartProps) {
  const founders = t.members.filter((member) => member.level === "top");
  const directors = t.members.filter((member) => member.level === "management");

  return (
    <section className="w-full bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            {t.title}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-zinc-300">
            {t.description}
          </p>
        </div>

        <div className="relative">
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {founders.map((member) => (
              <TeamMemberCard
                key={member.email}
                name={member.name}
                role={member.role}
                meaning={member.meaning}
                email={member.email}
                image={member.image}
                emailLabel={t.emailLabel}
                emailAria={t.emailAria}
                highlight
              />
            ))}
          </div>

          <div className="mx-auto hidden h-16 w-px bg-white/15 md:block" />
          <div className="mx-auto hidden h-px max-w-4xl bg-white/15 md:block" />

          <div className="grid gap-6 pt-12 md:grid-cols-2 xl:grid-cols-4">
            {directors.map((member) => (
              <TeamMemberCard
                key={member.email}
                name={member.name}
                role={member.role}
                meaning={member.meaning}
                email={member.email}
                image={member.image}
                emailLabel={t.emailLabel}
                emailAria={t.emailAria}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
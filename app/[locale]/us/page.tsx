import React from "react";
import { getMessages } from "@/lib/messages";
import TeamHero from "@/components/pages/about-us/team-hero-component";
import TeamOrgChart from "@/components/pages/about-us/team-org-chart-component";


export default async function TeamPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getMessages(locale);

  return (
    <div className="flex min-h-screen w-full flex-col bg-black text-white">
      <TeamHero t={t.teamPage.hero} />
      <TeamOrgChart t={t.teamPage.orgChart} />
    </div>
  );
}
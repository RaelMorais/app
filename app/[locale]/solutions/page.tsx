import React from "react";
import { getMessages } from "@/lib/messages";
import SolutionsHero from "@/components/pages/solutions/solutions-hero-component";
import SolutionsGrid from "@/components/pages/solutions/solutions-grid-component";
import SolutionsCta from "@/components/pages/solutions/solutions-cta-component";
import OurStack from "@/components/pages/solutions/solutions-stacks-componet";

export default async function SolutionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getMessages(locale);

  return (
    <div className="flex min-h-screen w-full flex-col bg-black text-white">
      <SolutionsHero t={t.solutionsPage.hero} />
      <SolutionsGrid t={t.solutionsPage.grid} />
      <OurStack/>
      <SolutionsCta t={t.solutionsPage.cta} />
    </div>
  );
}
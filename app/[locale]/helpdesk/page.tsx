import React from "react";
import { getMessages } from "@/lib/messages";
import StarsBackgroundDemo from "@/components/pages/help-desk/helpdesk-hero-component";

export default async function HelpDeskPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getMessages(locale);

  return (
    <div className="flex min-h-screen w-full flex-col bg-black text-white">

      <StarsBackgroundDemo t={t.stackSection} />
    </div>
  );
}
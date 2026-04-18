import React from 'react';
import { getMessages } from '@/lib/messages';
import CompanyHero from '@/components/pages/about-company/company-hero-component';
import CompanyMission from '@/components/pages/about-company/company-mission-component';
import CompanySolution from '@/components/pages/about-company/company-solutions.component';

export default async function CompanyPage({
    params
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params;
    const t = getMessages(locale);

    return (
        <div className="flex flex-col w-full bg-black min-h-screen">
            <CompanyHero t={t.company.hero} />
            <CompanyMission t={t.about.mission} />
            <CompanySolution t={t.institutional.solutions} />
        </div>
    );
}

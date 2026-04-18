import ErpSection from '@/components/pages/home/erpInfo-component';
import FaqSection from '@/components/pages/home/faq-component';
import FeaturesSection from '@/components/pages/home/feature-component';
import BrandMarquee from '@/components/pages/home/powered-by-component';
import StarfieldBackgroundDemo from '@/components/ui/starfield';
import { getMessages } from '@/lib/messages';
import React from 'react';

export default async function HomePage({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}) {
  const { locale } = await params;

  const t = getMessages(locale);

  return (
    <div className="flex flex-col w-full">

      <div className="flex flex-col flex-1 min-h-[calc(100vh-80px)] w-full relative">
        <StarfieldBackgroundDemo t={t.hero} />
      </div>

      <ErpSection t={t.erp} />

 
      <FeaturesSection t={t.features}/>

      <BrandMarquee t={t.brands}/>

      <FaqSection t={t.faq}/>

    </div>
  );
}
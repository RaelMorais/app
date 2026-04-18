import React from 'react';
import Orb from '@/components/Orb';

interface ErpSectionProps {
  t: {
    title: string;
    subtitle: string;
  }
}

export default function ErpSection({ t }: ErpSectionProps) {
  return (
    <section className="w-full bg-black text-white py-24 px-6 overflow-hidden flex justify-center items-center font-sans">

      <div className="relative w-full max-w-5xl h-[500px] md:h-[700px] flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-1000">
        
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent rounded-full blur-[100px]" />

          <div className="w-full h-full max-w-[800px] relative">
            <Orb
              hoverIntensity={2}
              rotateOnHover
              hue={240}
              forceHoverState={false}
              backgroundColor="#000000"
            />
          </div>
        </div>

        {/* Camada de Texto Traduzido */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center pointer-events-none">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-2xl">
            {t.title} <span className='text-blue-200/80'>ERP</span>
          </h2>

          <p className="mt-4 text-[10px] md:text-xs font-light text-blue-100/60 uppercase tracking-widest">
            {t.subtitle}
          </p>
        </div>

      </div>
    </section>
  );
}
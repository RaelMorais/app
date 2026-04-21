"use client";

import { StarsBackground } from '@/components/ui/backgrounds/stars';
import { cn } from '@/lib/utils';
import { Rocket } from 'lucide-react';

const stack = [
    {
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1280px-Laravel.svg.png",
    },
    {
        logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/typescript.svg",
    },
    {
        logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mysql.svg",
    },
];

interface StarsBackgroundDemoProps {
    t: {
        title: string;
        brandName: string;
        description: string;
        button: string;
        enhancedBy: string;
    };
}

export default function StarsBackgroundDemo({ t }: StarsBackgroundDemoProps) {
    return (
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black">

            <StarsBackground starColor="#ffffff" className={cn('absolute inset-0 z-0')} />

            <div className="z-10 flex flex-col items-center gap-10 px-4 text-center">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
                        {t.title}
                    </h1>
                    <p className="group mx-auto max-w-[500px] cursor-default font-light text-gray-400 md:text-lg">
                        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-blue-800 bg-[length:200%_auto] bg-left transition-all duration-1000 ease-in-out group-hover:bg-right">
                            {t.brandName}
                        </span>
                        <span>{t.description}</span>
                    </p>
                </div>

                <a href="http://poc-ggip.devfatec-campinas.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-3 border border-gray-600 bg-transparent px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-gray-300 transition-all duration-500 ease-out hover:border-white hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                    <span>{t.button}</span>
                    <Rocket className="h-4 w-4 transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
            </div>

            <div className="absolute bottom-10 z-10 flex flex-col items-center gap-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-gray-500">
                    {t.enhancedBy}
                </p>
                <div className="flex items-center justify-center gap-10">
                    {stack.map((item, index) => (
                        <a key={index} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center">
                            <img src={item.logo} className="h-7 w-auto object-contain brightness-0 invert opacity-50 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100" />
                        </a>
                    ))}
                </div>
            </div>

        </div>
    );
}
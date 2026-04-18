"use client"
import { Marquee } from "@/components/ui/marquee";

const brands = [
    {
        name: "Amazon",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        url: "https://amazon.com"
    },
    {
        name: "Google",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
        url: "https://google.com"
    },
    {
        name: "Netflix",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
        url: "https://netflix.com"
    },
    {
        name: "Apple",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
        url: "https://apple.com"
    },
    {
        name: "Intel",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Intel-logo-2022.png",
        url: "https://intel.com"
    },
    {
        name: "AMD",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/AMD_Logo.png",
        url: "https://amd.com"
    },
    {
        name: "IBM",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
        url: "https://ibm.com"
    },
];

interface BrandSectionProps {
  t: {
    trusted_by: string;
  };
}

export default function BrandSection({ t }: BrandSectionProps) {
    if (!t) return null;

    return (
        <section className="w-full bg-black py-20 overflow-hidden font-sans">
            <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col items-center">
                <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-semibold">
                    {t.trusted_by}
                </p>
            </div>

            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">

                <Marquee pauseOnHover className="[--duration:40s]">
                    {brands.map((brand) => (
                        <a
                            key={brand.name}
                            href={brand.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 mx-10 flex items-center justify-center"
                        >
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className="h-10 w-auto object-contain 
                                        transition-transform duration-300 hover:scale-110 
                                        brightness-0 invert"
                            />
                        </a>
                    ))}
                </Marquee>

                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
            </div>
        </section>
    );
}
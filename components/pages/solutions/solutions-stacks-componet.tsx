"use client";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

const stack = [
    {
        name: "Next.js",
        logo: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/2/nextjs-dqhvgu9iwvacgwnwl8bs25.png/nextjs-ghnqttyc6ffbnqnn8xlrpj.png?_a=DATAiZAAZAA0",
        description: "Beautiful Web Development",
        url: "https://nextjs.org",
    },
    {
        name: "Laravel",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1280px-Laravel.svg.png",
        description: "Elegant Backend Systems",
        url: "https://laravel.com",
    },
    {
        name: "MySQL",
        logo: "https://pngimg.com/d/mysql_PNG23.png",
        description: "Stable Database Architecture",
        url: "https://www.mysql.com",
    },
    {
        name: "shadcn/ui",
        logo: "https://ico.hugeicons.com/shadcn-solid-rounded-512.webp",
        description: "Beautiful Interface Components",
        url: "https://ui.shadcn.com",
    },
];

export default function OurStack() {
    return (
        <section className="w-full overflow-hidden bg-black py-20 font-sans">
            <div className="mx-auto mb-12 flex max-w-7xl flex-col items-center px-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-gray-500">
                    Our Stack
                </p>
            </div>

            <TooltipProvider delayDuration={100}>
                <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-14 gap-y-10 px-6">
                    {stack.map((item) => (
                        <Tooltip key={item.name}>
                            <TooltipTrigger asChild>
                                <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={item.name}
                                    className="flex items-center justify-center"
                                >
                                    <img
                                        src={item.logo}
                                        alt={item.name}
                                        className="
                                            h-10 w-auto object-contain
                                            brightness-0 invert
                                            transition-transform duration-300
                                            hover:scale-110
                                        "
                                    />
                                </a>
                            </TooltipTrigger>

                            <TooltipContent
                                side="top"
                                sideOffset={12}
                                className="
                                    rounded-none 
                                    bg-white px-3 py-2
                                    text-xs font-medium text-black
                                    backdrop-blur-md
                                    animate-in fade-in-0 zoom-in-95
                                    duration-200
                                "
                            >
                                {item.description}
                            </TooltipContent>
                        </Tooltip>
                    ))}
                </div>
            </TooltipProvider>
        </section>
    );
}
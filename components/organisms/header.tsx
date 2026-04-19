"use client";

import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface HeaderProps {
    t: {
        solutions: string;
        company: string;
        about: string;
    };
}

export default function Header({ t }: HeaderProps) {
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const currentLocale = (params?.locale as string) || "pt";

    const isErrorPage = pathname?.includes("/errors");

    if (isErrorPage) {
        return null;
    }

    const handleLocaleChange = (newLocale: string) => {
        if (!pathname) return;

        const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);

        router.push(newPath);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 z-50 w-full bg-white/1 font-sans backdrop-blur-md animate-in fade-in duration-700">
            <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex items-center space-x-12">
                        <div className="flex-shrink-0">
                            <Link
                                href={`/${currentLocale}/home`}
                                onClick={closeMenu}
                                className="text-2xl font-bold tracking-tighter text-white transition-opacity hover:opacity-80"
                            >
                                GGIP<span className="text-gray-500">.</span>
                            </Link>
                        </div>

                        <nav className="hidden space-x-8 md:flex">
                            <Link
                                href={`/${currentLocale}/solutions`}
                                className="text-xs font-medium uppercase tracking-[0.15em] text-gray-300 transition-colors duration-300 hover:text-white"
                            >
                                {t.solutions}
                            </Link>

                            <Link
                                href={`/${currentLocale}/company`}
                                className="text-xs font-medium uppercase tracking-[0.15em] text-gray-300 transition-colors duration-300 hover:text-white"
                            >
                                {t.company}
                            </Link>

                            <Link
                                href={`/${currentLocale}/us`}
                                className="text-xs font-medium uppercase tracking-[0.15em] text-gray-300 transition-colors duration-300 hover:text-white"
                            >
                                {t.about}
                            </Link>
                        </nav>
                    </div>

                    <div className="flex items-center space-x-3">
                        <Select
                            defaultValue={currentLocale}
                            onValueChange={handleLocaleChange}
                        >
                            <SelectTrigger
                                className="
                                    group h-10 w-auto min-w-[70px]
                                    rounded-none border border-white/10
                                    bg-white/[0.06] px-3
                                    text-xs text-white
                                    shadow-[0_0_30px_rgba(255,255,255,0.04)]
                                    backdrop-blur-xl
                                    transition-all duration-300
                                    hover:border-white/20 hover:bg-white/[0.1]
                                    hover:shadow-[0_0_35px_rgba(255,255,255,0.08)]
                                    focus:ring-0 focus:ring-offset-0
                                    data-[state=open]:border-white/25
                                    data-[state=open]:bg-white/[0.12]
                                "
                            >
                                <SelectValue placeholder="Idioma" />
                            </SelectTrigger>

                            <SelectContent
                                align="end"
                                sideOffset={10}
                                className="
                                    min-w-[70px] overflow-hidden
                                    rounded-none border border-white/10
                                    bg-black/70 p-1 text-gray-200
                                    shadow-2xl shadow-black/40
                                    backdrop-blur-2xl
                                    animate-in fade-in-0 zoom-in-95
                                    slide-in-from-top-2 duration-300
                                "
                            >
                                <SelectItem
                                    value="pt"
                                    className="
                                        cursor-pointer rounded-none px-3 py-2
                                        text-xs tracking-wide
                                        transition-colors
                                        focus:bg-white/10 focus:text-white
                                    "
                                >
                                    <span className="flex items-center gap-2">
                                        <span className="text-base">🇧🇷</span>
                                    </span>
                                </SelectItem>

                                <SelectItem
                                    value="en"
                                    className="
                                        cursor-pointer rounded-none px-3 py-2
                                        text-xs tracking-wide
                                        transition-colors
                                        focus:bg-white/10 focus:text-white
                                    "
                                >
                                    <span className="flex items-center gap-2">
                                        <span className="text-base">🇺🇸</span>
                                    </span>
                                </SelectItem>

                                <SelectItem
                                    value="es"
                                    className="
                                        cursor-pointer rounded-none px-3 py-2
                                        text-xs tracking-wide
                                        transition-colors
                                        focus:bg-white/10 focus:text-white
                                    "
                                >
                                    <span className="flex items-center gap-2">
                                        <span className="text-base">🇪🇸</span>
                                    </span>
                                </SelectItem>
                            </SelectContent>
                        </Select>

                        <button
                            type="button"
                            onClick={() => setIsMenuOpen((prev) => !prev)}
                            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                            aria-expanded={isMenuOpen}
                            className="
                                relative h-10 w-10
                                rounded-none border border-white/10
                                bg-white/[0.06] text-white
                                backdrop-blur-xl
                                transition-all duration-300
                                hover:border-white/20 hover:bg-white/[0.1]
                                focus:outline-none
                                md:hidden
                            "
                        >
                            <span
                                className={`
                                    absolute inset-0 flex items-center justify-center
                                    transition-all duration-300 ease-out
                                    ${
                                        isMenuOpen
                                            ? "scale-75 rotate-90 opacity-0"
                                            : "scale-100 rotate-0 opacity-100"
                                    }
                                `}
                            >
                                <Menu size={20} strokeWidth={1.8} />
                            </span>

                            <span
                                className={`
                                    absolute inset-0 flex items-center justify-center
                                    transition-all duration-300 ease-out
                                    ${
                                        isMenuOpen
                                            ? "scale-100 rotate-0 opacity-100"
                                            : "scale-75 -rotate-90 opacity-0"
                                    }
                                `}
                            >
                                <X size={20} strokeWidth={1.8} />
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={`
                    overflow-hidden border-t border-white/10
                    bg-white/1 backdrop-blur-md
                    transition-all duration-500 ease-in-out
                    md:hidden
                    ${isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}
                `}
            >
                <nav className="flex flex-col space-y-5 px-6 py-5">
                    <Link
                        href={`/${currentLocale}/solutions`}
                        onClick={closeMenu}
                        className="text-xs font-medium uppercase tracking-[0.15em] text-gray-300 transition-colors duration-300 hover:text-white"
                    >
                        {t.solutions}
                    </Link>

                    <Link
                        href={`/${currentLocale}/company`}
                        onClick={closeMenu}
                        className="text-xs font-medium uppercase tracking-[0.15em] text-gray-300 transition-colors duration-300 hover:text-white"
                    >
                        {t.company}
                    </Link>

                    <Link
                        href={`/${currentLocale}/us`}
                        onClick={closeMenu}
                        className="text-xs font-medium uppercase tracking-[0.15em] text-gray-300 transition-colors duration-300 hover:text-white"
                    >
                        {t.about}
                    </Link>
                </nav>
            </div>
        </header>
    );
}
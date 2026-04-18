"use client";

import Link from 'next/link';
import { useParams, usePathname, useRouter } from 'next/navigation';
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
    }
}

export default function Header({ t }: HeaderProps) {
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();

    const currentLocale = (params?.locale as string) || 'pt';

    const isErrorPage = pathname?.includes('/errors');
    if (isErrorPage) {
        return null;
    }

    const handleLocaleChange = (newLocale: string) => {
        if (!pathname) return;
        const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
        router.push(newPath);
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-white/1 backdrop-blur-md z-50 animate-in fade-in duration-700 font-sans">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    <div className="flex items-center space-x-12">
                        <div className="flex-shrink-0">
                            <Link
                                href={`/${currentLocale}/home`}
                                className="text-2xl font-bold tracking-tighter text-white hover:opacity-80 transition-opacity"
                            >
                                GGIP<span className="text-gray-500">.</span>
                            </Link>
                        </div>

                        <nav className="hidden md:flex space-x-8">
                            <Link
                                href={`/${currentLocale}/solutions`}
                                className="text-xs uppercase tracking-[0.15em] font-medium text-gray-300 hover:text-white transition-colors duration-300"
                            >
                                {t.solutions}
                            </Link>

                            <Link
                                href={`/${currentLocale}/company`}
                                className="text-xs uppercase tracking-[0.15em] font-medium text-gray-300 hover:text-white transition-colors duration-300"
                            >
                                {t.company}
                            </Link>

                            <Link
                                href={`/${currentLocale}/noticias`}
                                className="text-xs uppercase tracking-[0.15em] font-medium text-gray-300 hover:text-white transition-colors duration-300"
                            >
                                {t.about}
                            </Link>
                        </nav>
                    </div>

                    <div className="flex items-center space-x-6">
                        <Select defaultValue={currentLocale} onValueChange={handleLocaleChange}>
                            <SelectTrigger className="w-auto rounded-none min-w-[50px] bg-transparent border-none text-gray-300 hover:text-white uppercase tracking-[0.1em] text-xs focus:ring-0 focus:ring-offset-0 shadow-none px-2 transition-colors">
                                <SelectValue placeholder="Lang" />
                            </SelectTrigger>
                            <SelectContent className="bg-black/60 backdrop-blur-lg border border-white/10 text-gray-200 rounded-none animate-in zoom-in-95 duration-200">
                                <SelectItem value="pt" className="cursor-pointer text-xs tracking-widest focus:bg-white/10 focus:text-white rounded-none">PT</SelectItem>
                                <SelectItem value="en" className="cursor-pointer text-xs tracking-widest focus:bg-white/10 focus:text-white rounded-none">EN</SelectItem>
                                <SelectItem value="es" className="cursor-pointer text-xs tracking-widest focus:bg-white/10 focus:text-white rounded-none">ES</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                </div>
            </div>
        </header>
    );
}
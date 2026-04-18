"use client";

import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const params = useParams();
    const currentLocale = params?.locale || 'pt';
    const pathname = usePathname();
    const isErrorPage = pathname?.includes('/errors');
    if (isErrorPage) {
        return null;
    }
    return (
        <footer className="mt-auto w-full bg-black border-t border-white/10 py-10 z-50 font-sans">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-8">

                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    <div className="text-[11px] uppercase tracking-[0.15em] text-gray-500 font-medium">
                        &copy; {currentYear} GGIP. <span className="hidden sm:inline">All Rights are Reserved.</span>
                    </div>

                    <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-gray-500 font-medium text-center">
                        Enhanced by Dream.
                    </div>

                    <div className="flex items-center space-x-6 text-[11px] uppercase tracking-[0.15em] font-medium text-gray-500">
                        <Link
                            href={`/${currentLocale}/terms/privacy-terms`}
                            className="hover:text-white transition-colors duration-300"
                        >
                            Privacy Terms
                        </Link>
                        <Link
                            href={`/${currentLocale}/terms/company-terms`}
                            className="hover:text-white transition-colors duration-300"
                        >
                            Company Terms
                        </Link>
                    </div>

                </div>
            </div>
        </footer>
    );
}
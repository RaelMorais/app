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

export default function Header() {
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
    <header className="w-full bg-white/70 backdrop-blur-lg border-b border-gray-100/50 sticky top-0 z-50 animate-in fade-in slide-in-from-top-4 duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="flex-shrink-0 flex items-center">
            <Link 
              href={`/${currentLocale}/home`} 
              className="group text-2xl font-extrabold tracking-tighter text-gray-900 transition-transform duration-300 hover:scale-105">
              GGIP
              <span className="inline-block text-blue-600 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-0.5">
                .
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-10">
            <Link 
              href={`/${currentLocale}/sobre`} 
              className="relative group text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors duration-300"
            >
              Sobre Nós
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>
            
            <Link 
              href={`/${currentLocale}/conheca`} 
              className="relative group text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors duration-300"
            >
              Conheça
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>
            
            <Link 
              href={`/${currentLocale}/contato`} 
              className="relative group text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors duration-300"
            >
              Nos Contate
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>
          </nav>

          <div className="flex items-center">
            <Select defaultValue={currentLocale} onValueChange={handleLocaleChange}>
              <SelectTrigger className="w-[65px] rounded-none bg-gray-50/50 border-gray-200/80 shadow-sm hover:bg-gray-100/80 hover:shadow-md hover:border-blue-200 transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0">
                <SelectValue placeholder="Idioma" />
              </SelectTrigger>
              <SelectContent className="rounded-none animate-in zoom-in-95 duration-200">
                <SelectItem value="pt" className="cursor-pointer rounded-xl hover:bg-blue-50/50 transition-colors">🇧🇷 </SelectItem>
                <SelectItem value="en" className="cursor-pointer rounded-xl hover:bg-blue-50/50 transition-colors">🇺🇸 </SelectItem>
                <SelectItem value="es" className="cursor-pointer rounded-xl hover:bg-blue-50/50 transition-colors">🇪🇸 </SelectItem>
              </SelectContent>
            </Select>
          </div>

        </div>
      </div>
    </header>
  );
}
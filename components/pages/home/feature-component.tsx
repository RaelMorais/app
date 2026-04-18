import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Users, ListTodo, TrendingUp } from "lucide-react";

interface FeaturesSectionProps {
  t: {
    title: string;
    subtitle: string;
    card1_title: string;
    card1_description: string;
    card2_title: string;
    card2_description: string;
    card3_title: string;
    card3_description: string;
  };
}

export default function FeaturesSection({ t }: FeaturesSectionProps) {
  // Verificação de segurança
  if (!t) return null;

  return (
    <section className="w-full bg-black text-white py-24 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            {t.title}
          </h2>
          <p className="text-gray-400 text-lg">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

          {/* CARD 1: Integração de Equipe */}
          <Card className="rounded-none bg-[#0a0a0a] border-white/10 text-white overflow-hidden group hover:border-white/20 transition-all duration-300 flex flex-col min-h-[520px]">
            <div className="h-64 w-full relative bg-[#111] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-blue-500/10 blur-[50px] rounded-full scale-150 group-hover:bg-blue-500/20 transition-all duration-500" />
              <div className="relative z-10 w-4/5 h-40 bg-black border border-white/10 rounded-none shadow-2xl p-4 flex flex-col justify-center items-center gap-4">
                <div className="flex items-center justify-center w-full">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 z-10" />
                  <div className="w-8 h-[2px] bg-white/10 -mx-2 z-0" />
                  <div className="w-14 h-14 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center z-20 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                    <Users className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="w-8 h-[2px] bg-white/10 -mx-2 z-0" />
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 z-10" />
                </div>
                <div className="flex justify-center gap-2">
                  <div className="h-2 w-16 bg-white/20 rounded-none" />
                  <div className="h-2 w-10 bg-white/10 rounded-none" />
                </div>
              </div>
            </div>
            <CardHeader className="pt-8">
              <CardTitle className="text-xl tracking-tight">{t.card1_title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <CardDescription className="text-gray-400 leading-relaxed text-sm">
                {t.card1_description}
              </CardDescription>
            </CardContent>
          </Card>

          {/* CARD 2: Coordenação de Tickets */}
          <Card className="rounded-none bg-[#0a0a0a] border-white/10 text-white overflow-hidden group hover:border-white/20 transition-all duration-300 flex flex-col min-h-[520px]">
            <div className="h-64 w-full relative bg-[#111] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-indigo-500/10 blur-[50px] rounded-full scale-150 group-hover:bg-indigo-500/20 transition-all duration-500" />
              <div className="relative z-10 w-4/5 h-40 bg-black border border-white/10 rounded-none shadow-2xl p-3 flex gap-2">
                <div className="flex-1 bg-[#151515] rounded-none border border-white/5 p-2 flex flex-col gap-2">
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-2 h-2 rounded-full bg-gray-500" />
                    <div className="h-1.5 w-8 bg-white/20 rounded-none" />
                  </div>
                  <div className="h-6 w-full bg-white/10 rounded-none" />
                </div>
                <div className="flex-1 bg-[#151515] rounded-none border border-white/5 p-2 flex flex-col gap-2">
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-2 h-2 rounded-full bg-indigo-400" />
                    <div className="h-1.5 w-10 bg-white/20 rounded-none" />
                  </div>
                  <div className="h-6 w-full border border-indigo-500/30 bg-indigo-500/10 rounded-none flex items-center px-1">
                    <ListTodo className="w-3.5 h-3.5 text-indigo-400" />
                  </div>
                </div>
                <div className="flex-1 bg-[#151515] rounded-none border border-white/5 p-2 flex flex-col gap-2">
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <div className="h-1.5 w-8 bg-white/20 rounded-none" />
                  </div>
                  <div className="h-6 w-full bg-white/5 rounded-none" />
                </div>
              </div>
            </div>
            <CardHeader className="pt-8">
              <CardTitle className="text-xl tracking-tight">{t.card2_title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <CardDescription className="text-gray-400 leading-relaxed text-sm">
                {t.card2_description}
              </CardDescription>
            </CardContent>
          </Card>

          {/* CARD 3: Resultado Garantido */}
          <Card className="rounded-none bg-[#0a0a0a] border-white/10 text-white overflow-hidden group hover:border-white/20 transition-all duration-300 flex flex-col min-h-[520px]">
            <div className="h-64 w-full relative bg-[#111] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-emerald-500/10 blur-[50px] rounded-full scale-150 group-hover:bg-emerald-500/20 transition-all duration-500" />
              <div className="relative z-10 w-4/5 h-40 bg-black border border-white/10 rounded-none shadow-2xl p-4 flex flex-col justify-end gap-2">
                <div className="flex justify-between items-center w-full mb-auto mt-2">
                  <div className="flex gap-2 items-center">
                     <TrendingUp className="w-5 h-5 text-emerald-400" />
                     <div className="h-2.5 w-16 bg-white/20 rounded-none" />
                  </div>
                  <div className="h-6 px-2 bg-emerald-500/20 text-emerald-400 rounded-none text-[10px] flex items-center justify-center font-bold tracking-wider">
                    +98%
                  </div>
                </div>
                <div className="flex items-end justify-between h-20 gap-2">
                  {[20, 35, 45, 60, 80, 100].map((height, i) => (
                    <div 
                      key={i} 
                      className="w-full bg-emerald-500/20 border-t border-emerald-500/50 rounded-none transition-all duration-500 group-hover:bg-emerald-500/30" 
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
            <CardHeader className="pt-8">
              <CardTitle className="text-xl tracking-tight">{t.card3_title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <CardDescription className="text-gray-400 leading-relaxed text-sm">
                {t.card3_description}
              </CardDescription>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}
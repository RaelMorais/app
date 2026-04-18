import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  q: string;
  a: string;
}

interface FaqSectionProps {
  t: {
    title: string;
    subtitle: string;
    contact_text: string;
    contact_button: string;
    items: FaqItem[];
  };
}

export default function FaqSection({ t }: FaqSectionProps) {
  if (!t || !t.items) return null;

  return (
    <section className="w-full bg-black text-white py-24 px-6 font-sans">
      <div className="max-w-3xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
            {t.title}
          </h2>
          <p className="text-gray-400">
            {t.subtitle}
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {t.items.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border-white/10 px-4 transition-all hover:bg-white/[0.02]"
            >
              <AccordionTrigger className="text-left font-medium hover:no-underline py-6">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 leading-relaxed pb-6">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-20 p-8 border border-white/10 bg-[#0a0a0a] text-center">
          <p className="text-sm text-gray-400 mb-4">{t.contact_text}</p>
          <button className="text-white font-bold hover:underline underline-offset-4">
            {t.contact_button}
          </button>
        </div>

      </div>
    </section>
  );
}
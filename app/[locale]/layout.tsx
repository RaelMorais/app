import Footer from "@/components/organisms/footer";
import Header from "@/components/organisms/header";
import { getMessages } from "@/lib/messages";
import { cn } from "@/lib/utils";

export async function generateStaticParams() {
  return [
    { locale: 'pt' },
    { locale: 'en' },
    { locale: 'es' }
  ];
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const t = getMessages(locale);

  return (
    <>
      <Header t={t.header} />

      <main className="flex-grow w-full">
        {children}
      </main>

      <Footer />
    </>
  );
}
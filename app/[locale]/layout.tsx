import Header from "@/components/organisms/header";

// Adicione esta função no seu layout.tsx
export function generateStaticParams() {
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
  
  return (
    <html lang={locale}>
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
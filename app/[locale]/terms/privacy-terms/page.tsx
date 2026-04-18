import { redirect } from 'next/navigation';

export default function RootPage({ params }: { params: { locale: string } }) {
  
  const currentLocale = params?.locale || 'pt'; 

  redirect(`/${currentLocale}/errors/404`);
}
import {getMessages} from '@/lib/messages';

export default async function Home({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  const t = getMessages(locale);

  return (
    <main>
      <h1>{t.home.title}</h1>
      <p>{t.home.subtitle}</p>
    </main>
  );
}
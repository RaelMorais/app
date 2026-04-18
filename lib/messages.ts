import pt from '@/messages/pt.json';
import en from '@/messages/en.json';
import es from '@/messages/es.json';

const messages = {
  pt,
  en,
  es
};

export function getMessages(locale: string) {
  return messages[locale as keyof typeof messages] ?? messages.pt;
}
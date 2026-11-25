import { Language } from '../../types/Enums/Language';

const LOCALES: Record<Language, string> = {
  [Language.Fa]: 'fa-IR',
  [Language.En]: 'en-US',
};

export const formatPrice = (value: number, language: Language): string =>
  new Intl.NumberFormat(LOCALES[language], {
    style: 'currency',
    currency: 'USD',
  }).format(value);
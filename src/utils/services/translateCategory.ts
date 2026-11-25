import type { Dictionary } from '../../dictionary';

export const translateCategory = (t: Dictionary, category: string): string =>
  category in t.categories
    ? t.categories[category as keyof Dictionary['categories']]
    : category;
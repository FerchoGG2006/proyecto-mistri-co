export const locales = ['es', 'pt'] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = 'es';

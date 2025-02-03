export const locales = ['en', 'de'];

export const defaultLocale = 'en';

export const langMatcher = new RegExp(`^\/(${locales.join('|')})(\/|$)`);

export const localeParam = new RegExp(`^(${locales.join('|')})$`);

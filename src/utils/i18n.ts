import en from '../i18n/en.json';
import es from '../i18n/es.json';
import pl from '../i18n/pl.json';

export const SUPPORTED_LANGS = ['en', 'es', 'pl'] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];

const translations = { en, es, pl };

export function useTranslations(lang: Lang) {
  const dict = translations[lang] as Record<string, unknown>;
  return function t(key: string): string {
    const parts = key.split('.');
    let result: unknown = dict;
    for (const part of parts) {
      if (result === null || typeof result !== 'object') return key;
      result = (result as Record<string, unknown>)[part];
    }
    return typeof result === 'string' ? result : key;
  };
}

/**
 * Returns the correct URL prefix for a given language.
 * English lives at the site root; other languages carry their lang prefix.
 *
 * Examples (base = '/smartgym-web/'):
 *   langUrl('en', base)            → '/smartgym-web/'
 *   langUrl('es', base)            → '/smartgym-web/es/'
 *   langUrl('en', base, '#features') → '/smartgym-web/#features'
 *   langUrl('pl', base, '#download') → '/smartgym-web/pl/#download'
 */
export function langUrl(lang: Lang, base: string, path = ''): string {
  const prefix = lang === 'en' ? base : `${base}${lang}/`;
  return `${prefix}${path}`;
}

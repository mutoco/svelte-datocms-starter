import { locales } from "./locales";

type Locale = "de" | "en" | "es";

interface TextLocale {
    locale: Locale;
    value: string;
}

interface MessageItem {
    id: string;
    _allTextLocales: TextLocale[];
    slug: string;
}

type TransformedData = Record<Locale, Record<string, string>>;

export function messages(messageItem: MessageItem[]): TransformedData {
    const locales: Locale[] = ["de", "en", "es"];
    const messages: TransformedData = {
        de: {},
        en: {},
        es: {},
    };

    messageItem.forEach((item) => {
        const key = item.slug;

        item._allTextLocales.forEach((localeEntry) => {
            const { locale, value } = localeEntry;
            if (messages[locale]) {
                messages[locale][key] = value;
            }
        });
    });

    return messages;
}

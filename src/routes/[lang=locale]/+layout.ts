import { addMessages, init } from 'svelte-intl-precompile';
import { locales, defaultLocale } from "$helpers/locales";
import { messages } from '$helpers/generateMessages';

export const load = async ({ params, parent }) => {
	const { lang } = params;
	const { features } = await parent();

	locales.forEach((locale: string) => {
		addMessages(locale, messages(features.uiTexts)[locale]);
	});

	const initialLocale = lang || defaultLocale;

	init({
		fallbackLocale: defaultLocale,
		initialLocale
	});
};

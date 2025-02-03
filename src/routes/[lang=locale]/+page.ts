import { performRequest } from '$helpers/datoRequest';
import { HomeQueryDocument } from '$graphql/types';
import { error as svelteError } from '@sveltejs/kit';
import { locales } from '$helpers/locales';
import type { EntryGenerator, RouteParams } from './$types';

interface LoadParams {
    params: {
        lang: string;
    };
}

// Routes entry points
export const entries: EntryGenerator = (): RouteParams[] => 
    locales.map((lang: string): RouteParams => ({ lang }));

// Load page data
export const load = async ({ params: { lang } }: LoadParams) => {
    const data = await performRequest(HomeQueryDocument, { lang });

    if (!data.homePage) {
        throw svelteError(500, 'Data for typename "data.homePage" not found');
    }

    const { _seoMetaTags: seo, ...content } = data.homePage;
    return { content, seo };
};

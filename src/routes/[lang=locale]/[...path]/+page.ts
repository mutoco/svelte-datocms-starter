import { performRequest } from '$helpers/datoRequest';
import { getQuery, convertToTypenameKey } from '$graphql/helpers';
import { error as svelteError } from '@sveltejs/kit';

export const load = async ({
    params: { lang, path },
    parent,
}: {
    params: { lang: string; path: string };
    parent: () => Promise<{ routes: Record<string, { typename: string; slug: string; path: string }[]> }>;
}) => {
    const { routes } = await parent();
    const slug = path.split('/').pop();

    // Validate and retrieve the route
    const route = routes[lang]?.find(({ path: routePath }) => routePath === `/${lang}/${path}`);
    if (!route) throw svelteError(404, 'Page not found');

    // Fetch data from the GraphQL API
    const data = await performRequest(getQuery(route.typename), { lang, slug });

    const typenameKey = convertToTypenameKey(route.typename);
    const contentData = data[typenameKey];

    if (!contentData) throw svelteError(500, `Data for typename "${typenameKey}" not found`);

    // Destructure and return content with SEO metadata
    const { _seoMetaTags: seo, ...content } = contentData;
    return { content, seo };
};

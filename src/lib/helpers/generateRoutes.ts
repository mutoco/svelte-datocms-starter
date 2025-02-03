// Helper function for dynamically generating routes at runtime.

import type { RoutesInput, RouteObject, RoutesOutput } from '$lib/types';

export const generateRoutes = (data: RoutesInput): RoutesOutput => {
    const routesOutput: RoutesOutput = { en: [], de: [], es: [] };

    // Enhance employee data with localized titles
    data.employeeItems.forEach(item => {
        item._allNavigationTitleLocales = item._allSlugLocales.map(locale => ({
            ...locale,
            title: item.title,
            slug: undefined // Remove slug field
        }));
    });

    // Generate a route object from a property
    const createRouteObject = (property: RouteObject) => ({
        typename: property.__typename,
        id: property.id,
        slugLocales: property._allSlugLocales || [],
        titleLocales: property._allNavigationTitleLocales || [],
        parentPid: property.parentPid || null,
    });

    // Flatten all route objects
    const routeObjects = Object.values(data).flatMap(value =>
        Array.isArray(value) ? value.map(createRouteObject) : [createRouteObject(value as RouteObject)]
    );

    // Recursively resolve the full parent path
    const resolveParentSlug = (parentPid: string | null, locale: string): string | null => {
        if (!parentPid) return null;

        const parent = routeObjects.find(route => route.id === parentPid);
        if (!parent) return null;

        const parentSlug = parent.slugLocales.find(s => s.locale === locale)?.slug || null;
        const grandparentSlug = resolveParentSlug(parent.parentPid, locale);

        return grandparentSlug ? `${grandparentSlug}/${parentSlug || ''}` : parentSlug;
    };

    // Build the full path for a route
    const buildPath = (locale: string, slug: string | null, parentSlug: string | null): string =>
        `/${locale}${parentSlug ? `/${parentSlug}` : ''}${slug ? `/${slug}` : ''}`;

    // Add localized routes to the output
    const addRouteLocales = (
        typename: string,
        id: string,
        slugLocales: Array<{ locale: string; slug: string }>,
        titleLocales: Array<{ locale: string; title: string }>,
        parentPid: string | null
    ) => {
        titleLocales.forEach(({ locale, title }) => {
            const slug = slugLocales.find(s => s.locale === locale)?.slug || null;
            const parentSlug = resolveParentSlug(parentPid, locale);
            const path = buildPath(locale, slug, parentSlug);

            routesOutput[locale as keyof RoutesOutput].push({
                typename, id, parentPid, slug, title, path
            });
        });
    };

    // Process each route object
    routeObjects.forEach(route =>
        addRouteLocales(route.typename, route.id, route.slugLocales, route.titleLocales, route.parentPid)
    );
    
    // console.log(routesOutput);
    return routesOutput;
}
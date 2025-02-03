import type { RoutesOutput, LocaleObject } from '$lib/types';

let routesData: RoutesOutput = $state({ en: [], de: [], es: [] });

export const routeStore = {

    // Setter for the data
    set(data: RoutesOutput) {
        routesData = data;
    },
};

export const routes = {

    // Getter for the data
    get data() {
        return routesData;
    },

    // Action: Get route by id
    getRouteById(locale: keyof RoutesOutput, id: string) {

        // Try to find the route in the requested locale
        let route = routesData[locale]?.find((route) => route.id === id) || null;
        if (route) return route;

        return null
    },

    // Action: Get route by slug
    getRouteBySlug(locale: keyof RoutesOutput, slug: string) {

        // Try to find the route in the requested locale
        let route = routesData[locale]?.find((route) => route.slug === slug) || null;
        if (route) return route;
    
        // If not found, search in other locales and match by id in requested locale
        for (const [key, routes] of Object.entries(routesData)) {
            if (key !== locale) {
                const foundRoute = routes.find((route: LocaleObject) => route.slug === slug);
                if (foundRoute) {
                    const { id } = foundRoute;
                    return routesData[locale]?.find((route: LocaleObject) => route.id === id) || null;
                }
            }
        }

        return null
    },

    // Action: Get route by title
    getRouteByTitle(locale: keyof RoutesOutput, title: string) {

        // Try to find the route in the requested locale
        let route = routesData[locale]?.find((route) => route.title === title) || null;
        if (route) return route;
    
        // If not found, search in other locales and match by id in requested locale
        for (const [key, routes] of Object.entries(routesData)) {
            if (key !== locale) {
                const foundRoute = routes.find((route: LocaleObject) => route.title === title);
                if (foundRoute) {
                    const { id } = foundRoute;
                    return routesData[locale]?.find((route: LocaleObject) => route.id === id) || null;
                }
            }
        }

        return null
    },
    
    // Action: Get route by parentPid
    getChildrenById(locale: keyof RoutesOutput, id: string) {
        return routesData[locale]?.filter((route: LocaleObject) => route.parentPid === id) || null;
    }
};

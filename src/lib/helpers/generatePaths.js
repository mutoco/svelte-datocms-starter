// Helpers for dynamically generating paths for prerendering at buildtime.

export const query = `
    query PathsQuery {
        homePage {
            id
            _allSlugLocales {
            locale
            slug: value
            }
        }
        topicsPage {
            id
            _allSlugLocales {
            locale
            slug: value
            }
        }
        allTopicItems {
            id
            parentPid
            _allSlugLocales {
            locale
            slug: value
            }
        }
        regionsPage {
            id
            _allSlugLocales {
            locale
            slug: value
            }
        }
        allRegionItems {
            id
            parentPid
            _allSlugLocales {
            locale
            slug: value
            }
        }
        allProjectItems(first: 100) {
            id
            _allSlugLocales {
            locale
            slug: value
            }
        }
        allProjectUpdateItems(first: 100) {
            id
            _allSlugLocales {
            locale
            slug: value
            }
        }
        aboutPage {
            id
            _allSlugLocales {
            locale
            slug: value
            }
        }
        allAboutItems {
            id
            parentPid
            _allSlugLocales {
            locale
            slug: value
            }
        }
        allAnnualreportItems {
            id
            parentPid
            _allSlugLocales {
            locale
            slug: value
            }
        }
        allEmployeeItems(first: 500) {
            id
            parentPid
            _allSlugLocales {
            locale
            slug: value
            }
        }
        newsPage {
            id
            _allSlugLocales {
            locale
            slug: value
            }
        }
        allNewsItems(first: 100) {
            id
            parentPid
            _allSlugLocales {
            locale
            slug: value
            }
        }
        eventsPage {
            id
            _allSlugLocales {
            locale
            slug: value
            }
        }
        allEventItems(first: 100) {
            id
            parentPid
            _allSlugLocales {
            locale
            slug: value
            }
        }
        publicationsPage {
            id
            _allSlugLocales {
            locale
            slug: value
            }
        }
        allPublicationItems(first: 100) {
            id
            parentPid
            _allSlugLocales {
            locale
            slug: value
            }
        }
        allMetaItems {
            id
            _allSlugLocales {
            locale
            slug: value
            }
        }
    }
`;

export function generatePaths(data) {
    // Create route objects from the input data
    const routeObjects = Object.values(data).flatMap(value =>
        Array.isArray(value) ? value.map(property => ({
            id: property.id,
            slugLocales: property._allSlugLocales || [],
            parentPid: property.parentPid || null,
        })) : [{
            id: value.id,
            slugLocales: value._allSlugLocales || [],
            parentPid: value.parentPid || null,
        }]
    );

    // Recursively resolve the full parent path for a given locale
    const resolveParentSlug = (parentPid, locale) => {
        if (!parentPid) return null;

        const parent = routeObjects.find(route => route.id === parentPid);
        if (!parent) return null;

        const parentSlug = parent.slugLocales.find(s => s.locale === locale)?.slug || null;
        const grandparentSlug = resolveParentSlug(parent.parentPid, locale);

        return grandparentSlug ? `${grandparentSlug}/${parentSlug || ''}` : parentSlug;
    };

    // Build the full path for a given locale
    const buildPath = (locale, slug, parentSlug) =>
        `/${locale}${parentSlug ? `/${parentSlug}` : ''}${slug ? `/${slug}` : ''}`;

    // Generate all paths by resolving parents and building paths
    const routePaths = routeObjects.flatMap(route =>
        route.slugLocales.map(({ locale, slug }) => {
            const parentSlug = resolveParentSlug(route.parentPid, locale);
            return buildPath(locale, slug, parentSlug);
        })
    );

    return routePaths;
}

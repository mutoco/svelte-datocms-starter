import { routes } from '$stores/routes.svelte';
import type { RoutesOutput } from '$lib/types';

export const entryRouteIds = {
    home: "NpZO0rbxQ9qeLe0fNa1TwA",
} as const;

export const getRoute = (lang: keyof RoutesOutput, slug: string) => 
    routes.getRouteBySlug(lang, slug) ?? routes.getRouteBySlug(lang, null);

export const getPath = (lang: keyof RoutesOutput, slug: string) =>
    routes.getRouteBySlug(lang, slug)?.path ?? routes.getRouteBySlug(lang, null)?.path ?? null;

export const getTitle = (lang: keyof RoutesOutput, slug: string) =>
    routes.getRouteBySlug(lang, slug)?.title ?? routes.getRouteBySlug(lang, null)?.title ?? null;

export const getSlug = (lang: keyof RoutesOutput, slug: string) =>
    routes.getRouteBySlug(lang, slug)?.slug ?? routes.getRouteBySlug(lang, null)?.slug ?? null;

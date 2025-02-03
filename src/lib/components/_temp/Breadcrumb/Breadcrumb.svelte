<script lang="ts">
	import { page } from "$app/state";
	import { routes } from "$stores/routes.svelte";
	import { entryRouteIds as routeIds } from "$helpers/routes"; 
	import { locale } from "svelte-intl-precompile";

	let breadcrumbItems = $state<{ path: string | null, title: string; }[]>([]);

	let currentPath = $state(page.url.pathname);
	let currentLang = $state($locale);

	type Route = {
		path: string | null;
		title: string;
	};

	const generateBreadcrumbs = (): Route[] => {
		const getBreadcrumb = (route: { path?: string | null; title?: string } | null): Route => ({
			path: route?.path || null,
			title: route?.title || "",
		});

		const homeRoute = routes.getRouteById(currentLang, routeIds.home);
		const segments = currentPath.slice(4).split("/").filter(Boolean);

		const additionalBreadcrumbs = segments.slice(0, -1).map((slug) => {
			const route = routes.getRouteBySlug(currentLang, slug);
			return getBreadcrumb(route);
		});

		return [
			getBreadcrumb(homeRoute),
			...additionalBreadcrumbs,
		];
	};

	breadcrumbItems = generateBreadcrumbs();

	$effect(() => {
		currentPath = page.url.pathname;
		currentLang = $locale;
		breadcrumbItems = generateBreadcrumbs();
	});
</script>

<nav class="Breadcrumb">
	<ul>
		{#each breadcrumbItems as { path, title }}
			<li>
				<a href={path}>{title}</a>
			</li>
		{/each}
	</ul>
</nav>

<style lang="scss" src="./Breadcrumb.scss"></style>

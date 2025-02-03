<script lang="ts">
	import { page } from "$app/state";
	import { routes } from "$stores/routes.svelte";
	import { entryRouteIds as routeIds } from "$helpers/routes";
	import { locale } from "svelte-intl-precompile";

	let currentLang = $state($locale);
	let currentSlug = $state(page.url.pathname.split("/").pop() || "");

	$effect(() => {
		currentLang = $locale;
		currentSlug = page.url.pathname.split("/").pop() || "";
	});
</script>

<nav class="Navigation">
	<ul>
		{#each [routeIds.topics, routeIds.regions, routeIds.aboutUs] as id}
			{@const route = routes.getRouteById(currentLang, id)}
			{@const childRoutes = routes.getChildrenById(currentLang, id)}
			{#if route}
				<li>
					<a href={route.path} class:active={currentSlug === route.slug}>
						{route.title}
					</a>
					{#if childRoutes.length}
						<ul>
							{#each childRoutes as child}
								<li>
									<a href={child.path} class:active={currentSlug === child.slug}>
										{child.title}
									</a>
								</li>
							{/each}
						</ul>
					{/if}
				</li>
			{/if}
		{/each}
		<li>
			<span>Latest</span>
			<ul>
				{#each [routeIds.news, routeIds.events, routeIds.publications] as id}
					{@const route = routes.getRouteById(currentLang, id)}
					{#if route}
						<li>
							<a href={route.path} class:active={currentSlug === route.slug}>
								{route.title}
							</a>
						</li>
					{/if}
				{/each}
			</ul>
		</li>
		<li>
			<span>Search</span>
		</li>
	</ul>
	<hr>
</nav>

<style lang="scss" src="./Navigation.scss"></style>

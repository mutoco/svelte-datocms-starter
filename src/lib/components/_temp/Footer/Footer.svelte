<script lang="ts">
	import { page } from "$app/state";
	import { routes } from "$stores/routes.svelte";
	import { getPath } from "$helpers/routes";
	import { locale, locales } from "svelte-intl-precompile";

	const data = $state(page?.data?.features?.footer ?? null);

	let currentLang = $state($locale);
	let currentSlug = $state(page.url.pathname.split("/").pop() || "");
	let metaLinks = $state(data?.metaLinks ?? []);

	$effect(() => {
		currentLang = $locale;
		currentSlug = page.url.pathname.split("/").pop() || "";
		metaLinks = data?.metaLinks ?? [];
	});
</script>

<section class="Footer">
	<hr>
	<nav class="Meta">
		<ul>
			{#each metaLinks as { id }}
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
	</nav>
	<nav class="Language">
		<ul>
			{#each $locales as locale}
				{@const path = getPath(locale, currentSlug)}
				{#if path}
					<li>
						<a 
							href={getPath(locale, currentSlug)} 
							class={locale === currentLang ? 'active' : null} 
							data-sveltekit-preload-data="false"
						>
							{locale.toUpperCase()}
						</a>
					</li>
				{/if}
			{/each}
		</ul>
	</nav>
</section>

<style lang="scss" src="./Footer.scss"></style>

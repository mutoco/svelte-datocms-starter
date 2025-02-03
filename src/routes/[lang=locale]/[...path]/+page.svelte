<script lang="ts">
	import { page } from "$app/state";
	import { routes } from "$stores/routes.svelte";
	import { t, locale } from "svelte-intl-precompile";
	import Navigation from '$components/_temp/Navigation/Navigation.svelte';
	import Breadcrumb from '$components/_temp/Breadcrumb/Breadcrumb.svelte';
	import Footer from '$components/_temp/Footer/Footer.svelte';
	import Head from '$components/_dato/Head/Head.svelte';

	const { data } = $props();

	const content = $derived(data?.content ?? null);
	const seo = $derived(data?.seo ?? null);

	let currentLang = $state($locale);
	let childrenRoutes = $state([]);

	const getChildrenRoutes = () => {
		childrenRoutes = routes.getChildrenById(currentLang, content?.id) || [];
	};

	getChildrenRoutes();

	$effect(() => {
		currentLang = $locale;
		getChildrenRoutes();
	});
</script>

{#if content}
	<Navigation />
	<Breadcrumb />
	<h1>{content.title ? `${content.title} (${content.navigationTitle})` : content.navigationTitle || content.name}</h1>
	<p>From locales: {$t('close')}</p>
	<p>Children Pages ({childrenRoutes.length})</p>
	{$locale}
	{#if childrenRoutes.length > 0}
		<nav>
			{#each childrenRoutes as { path, title }}
				<a href="{path}">{title}</a>
			{/each}
		</nav>
	{/if}
	<Footer />
{/if}

{#if seo}
	<Head data={seo} />
{/if}

<style lang="scss">
	nav {
		a {
			display: block;
		}
	}
</style>

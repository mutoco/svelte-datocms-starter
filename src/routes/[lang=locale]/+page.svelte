<script lang="ts">
	import { page } from "$app/state";
	import { t, locale } from "svelte-intl-precompile";
	import Navigation from '$components/_temp/Navigation/Navigation.svelte';
	import Footer from '$components/_temp/Footer/Footer.svelte';
	import Head from '$components/_dato/Head/Head.svelte';

	const { data } = $props();

	const content = $derived(data?.content ?? null);
	const seo = $derived(data?.seo ?? null);

	// $effect(() => {
	// 	locale.set(page.params.lang);
	// });
</script>

{#if content}
	<Navigation />
	<h1>{@html content.title ? `${content.title} (${content.navigationTitle})` : content.navigationTitle || content.name}</h1>
	<p>From locales: {$t('close')}</p>
	<p>Children Pages (0)</p>
	{$locale}
	<Footer />
{/if}

{#if seo}
	<Head data={seo} />
{/if}

<style lang="scss">
</style>

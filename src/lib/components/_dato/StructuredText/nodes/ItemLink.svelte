<script lang="ts">
	import { defaultMetaTransformer } from 'datocms-structured-text-generic-html-renderer';
	import { isItemLink, type ItemLink } from 'datocms-structured-text-utils';
	import { locale } from 'svelte-intl-precompile';
	import { getPath } from '$helpers/routes';

	let { node, link, children }: { node: ItemLink, link: { slug: string, id: string, children(): any; } } = $props();

	let meta = $derived(node.meta);
	let transformedMeta = $derived(meta ? defaultMetaTransformer({ node, meta }) : null);
</script>

{#if isItemLink(node)}
	<a {...transformedMeta} href={getPath($locale, link.slug)}>
		{@render children()}
	</a>
{/if}

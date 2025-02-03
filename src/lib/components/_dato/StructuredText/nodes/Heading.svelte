<script lang="ts">
	import type { Heading } from 'datocms-structured-text-utils';

	let { node, children }: { node: Heading, children(): any; } = $props();

	let { level = 1 } = $state(node);
	let element = $derived(`h${level}`);
</script>

<svelte:element this={element}>{@render children()}</svelte:element>

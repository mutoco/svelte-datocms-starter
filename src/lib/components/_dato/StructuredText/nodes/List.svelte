<script lang="ts">
	import type { List } from 'datocms-structured-text-utils';

	let { node, children }: { node: List, children: () => any; } = $props();
	let { style } = $state(node);
</script>

{#if style === 'numbered'}
	<ol>{@render children()}</ol>
{:else}
	<ul>{@render children()}</ul>
{/if}

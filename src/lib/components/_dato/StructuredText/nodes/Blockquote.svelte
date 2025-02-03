<script lang="ts">
	import type { Blockquote } from 'datocms-structured-text-utils';

	let { node, children }: { node: Blockquote, children(): any; } = $props();
</script>

<blockquote>
	{@render children()}
	<footer>{node.attribution}</footer>
</blockquote>

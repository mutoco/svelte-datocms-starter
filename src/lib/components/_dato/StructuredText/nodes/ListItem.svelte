<script lang="ts">
	import type { ListItem } from 'datocms-structured-text-utils';

	let { node, children }: { node: ListItem, children (): any;  } = $props();
</script>

<li>{@render children()}</li>

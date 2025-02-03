<script lang="ts">
	import Lines from './Lines.svelte';
	let { lines = [] }: { lines: string[] } = $props();
	const [first, ...rest] = $derived(lines);
</script>

{first}{#if rest.length > 0}<br /><Lines lines={rest} />{/if}

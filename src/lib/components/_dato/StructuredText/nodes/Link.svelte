<script lang="ts">
	import type { Link } from 'datocms-structured-text-utils';

	let { node, children }: { node: Link, children(): any; } = $props();
	
	let { url, meta } = $state(node);

	let target: string | undefined = $state(undefined);
	$effect(() => {
		const targetMetaEntry = meta?.find((metaEntry) => metaEntry.id === 'target');
		if (targetMetaEntry?.value) {
			target = targetMetaEntry.value;
		}
	});

	let rel: string | undefined = $state(undefined);
	$effect(() => {
		const relMetaEntry = meta?.find((metaEntry) => metaEntry.id === 'rel');
		if (relMetaEntry?.value) {
			rel = relMetaEntry.value;
		}
	});
</script>

<a href={url} {target} {rel}>
	{@render children()}
</a>

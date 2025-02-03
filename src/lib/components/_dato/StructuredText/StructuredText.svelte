<script lang="ts">	
	import {
		type StructuredText,
		type Document,
		type Node as DastNode,
		isStructuredText,
		isDocument,
		isNode
	} from 'datocms-structured-text-utils';

	import type { PredicateComponentTuple } from '$components/dato';

	import Node from './Node.svelte';

	/** The actual field value you get from DatoCMS **/
	const { data, components } = $props() as {
		data: StructuredText | Document | DastNode | null;
		components: PredicateComponentTuple[];
	};

	const node = $derived(!data
		? null
		: isStructuredText(data) && isDocument(data.value)
		? data.value.document
		: isDocument(data)
		? data.document
		: isNode(data)
		? data
		: undefined);

	const blocks = $derived(isStructuredText(data) ? data?.blocks : undefined);
	const links = $derived(isStructuredText(data) ? data?.links : undefined);
</script>

{#if node}
	<Node {node} {blocks} {links} {components} />
{/if}

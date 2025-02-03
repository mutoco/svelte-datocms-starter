<script lang="ts" module>
	import {
		isBlock,
		isBlockquote,
		isCode,
		isHeading,
		isInlineItem,
		isItemLink,
		isLink,
		isList,
		isListItem,
		isParagraph,
		isRoot,
		isSpan,
		isThematicBreak,
		RenderError
	} from 'datocms-structured-text-utils';

	import type * as STU from 'datocms-structured-text-utils';

	import Paragraph from './nodes/Paragraph.svelte';
	import Root from './nodes/Root.svelte';
	import Span from './nodes/Span.svelte';
	import Link from './nodes/Link.svelte';
	import List from './nodes/List.svelte';
	import Heading from './nodes/Heading.svelte';
	import Blockquote from './nodes/Blockquote.svelte';
	import ListItem from './nodes/ListItem.svelte';
	import ThematicBreak from './nodes/ThematicBreak.svelte';
	import Code from './nodes/Code.svelte';
	import ItemLink from './nodes/ItemLink.svelte';

	export const DEFAULT_COMPONENTS: PredicateComponentTuple[] = [
		[isParagraph, Paragraph],
		[isRoot, Root],
		[isSpan, Span],
		[isLink, Link],
		[isList, List],
		[isHeading, Heading],
		[isBlockquote, Blockquote],
		[isListItem, ListItem],
		[isThematicBreak, ThematicBreak],
		[isCode, Code],
		[isItemLink, ItemLink]
	];

	const throwRenderErrorForMissingComponent = (node: STU.Node) => {
		if (isInlineItem(node)) {
			throw new RenderError(
				`The Structured Text document contains an 'inlineItem' node, but no component for rendering is specified!`,
				node
			);
		}

		if (isItemLink(node)) {
			throw new RenderError(
				`The Structured Text document contains an 'itemLink' node, but no component for rendering is specified!`,
				node
			);
		}

		if (isBlock(node)) {
			throw new RenderError(
				`The Structured Text document contains a 'block' node, but no component for rendering is specified!`,
				node
			);
		}
	};

	const throwRenderErrorForMissingBlock = (node: STU.Block) => {
		throw new RenderError(
			`The Structured Text document contains a 'block' node, but cannot find a record with ID ${node.item} inside data.blocks!`,
			node
		);
	};

	const throwRenderErrorForMissingLink = (node: STU.ItemLink | STU.InlineItem) => {
		throw new RenderError(
			`The Structured Text document contains an 'itemLink' node, but cannot find a record with ID ${node.item} inside data.links!`,
			node
		);
	};

	const findBlock = (node: STU.Block, blocks: STU.StructuredText['blocks']) =>
		(blocks || []).find(({ id }) => id === node.item);
	const findLink = (node: STU.ItemLink | STU.InlineItem, links: STU.StructuredText['links']) =>
		(links || []).find(({ id }) => id === node.item);
</script>

<script lang="ts">
	import Node from './Node.svelte'
	import { hasChildren, type Node as STUNode, type StructuredText } from 'datocms-structured-text-utils';
	import type { PredicateComponentTuple } from '$components/dato';

	let { node, blocks, links, components = [] } = $props() as { 
		node: STUNode, 
		blocks: StructuredText['blocks'], 
		links: StructuredText['links'], 
		components: PredicateComponentTuple[] 
	};
	
	let block = $derived(
		isBlock(node) && (findBlock(node, blocks) || throwRenderErrorForMissingBlock(node))
	);

	let link = $derived(
		(isItemLink(node) && (findLink(node, links) || throwRenderErrorForMissingLink(node))) ||
		(isInlineItem(node) && (findLink(node, links) || throwRenderErrorForMissingLink(node)))
	);

	let predicateComponentTuple = $derived(
		[...(components || []), ...DEFAULT_COMPONENTS].find(([predicate, component]) => predicate(node)) ||
		throwRenderErrorForMissingComponent(node)
	);

	let component = $derived((predicateComponentTuple ?? [])[1]);
</script>

{#if component}
	{#if isBlock(node)}
		{@const Component = component}
		<Component {node} {block} />
	{:else if isInlineItem(node)}
		{@const Component = component}
		<Component {node} {link} />
	{:else if isItemLink(node)}
		{@const Component = component}
		<Component {node} {link}>
			{#if hasChildren(node)}
				{#each node.children as child}
					<Node node={child} {blocks} {links} {components} />
				{/each}
			{/if}
		</Component>
	{:else}
	{@const Component = component}
		<Component {node}>
			{#if hasChildren(node)}
				{#each node.children as child}
					<Node node={child} {blocks} {links} {components} />
				{/each}
			{/if}
		</Component>
	{/if}
{/if}

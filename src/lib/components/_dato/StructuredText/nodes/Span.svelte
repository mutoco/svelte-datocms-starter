<script lang="ts">
	import type { Span as SpanType } from 'datocms-structured-text-utils';
	import Span from './Span.svelte';
	import Lines from '../utils/Lines.svelte';

	let { node, children }: { node: SpanType, children: () => any; } = $props();

	let { type, value, marks } = $state(node);
	let [ mark, ...otherMarks ] = $derived(marks ?? []);
</script>

{#if mark}
	{#if mark === 'emphasis'}
		<em><Span node={{ type, value, marks: otherMarks }}>
			{@render children()}
		</Span></em>
	{:else if mark === 'highlight'}
		<mark><Span node={{ type, value, marks: otherMarks }}>
			{@render children()}
		</Span></mark>
	{:else if mark === 'strikethrough'}
		<del><Span node={{ type, value, marks: otherMarks }}>
			{@render children()}
		</Span></del>
	{:else if mark === 'strong'}
		<strong><Span node={{ type, value, marks: otherMarks }}>
			{@render children()}
		</Span></strong>
	{:else if mark === 'underline'}
		<u><Span node={{ type, value, marks: otherMarks }}>
			{@render children()}
		</Span></u>
	{:else if mark === 'code'}
		<code><Span node={{ type, value, marks: otherMarks }}>
			{@render children()}
		</Span></code>
	{/if}
{:else}
	<Lines lines={node.value.split(/\n/)} />
{/if}

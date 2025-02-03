import type { Node } from 'datocms-structured-text-utils';
import type { SvelteComponent } from 'svelte';

export { default as NakedImage } from '$components/dato/nakedImage/NakedImage.svelte';
export type { ResponsiveImageType } from '$components/dato/nakedImage/utils';

export { default as Head } from '$components/dato/head/Head.svelte';
export { default as Image } from '$components/dato/image/Image.svelte';
export { default as StructuredText } from '$components/dato/structuredText/StructuredText.svelte';
export { default as VideoPlayer } from '$components/dato/videoPlayer/VideoPlayer.svelte';

// export * from '$stores/querySubscription';

export type PredicateComponentTuple = [
	(n: Node) => boolean,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	new (...any: any) => SvelteComponent
];

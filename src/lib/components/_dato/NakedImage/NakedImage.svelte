<script lang="ts">	
	import type * as CSS from 'csstype';
	import { createEventDispatcher } from 'svelte';

	import {
		buildSrcSet,
		dumpStyleAttributes,
		noTypeCheck,
		parseStyleAttributes,
		type ResponsiveImageType
	} from './utils';

	let {
		/** The actual response you get from a DatoCMS `responsiveImage` GraphQL query */
		data,
		/** Additional CSS className for the root <picture> tag */
		pictureClass = null,
		/** Additional CSS rules to add to the root <picture> tag */
		pictureStyle = null, 
		/** Additional CSS className for the <img> tag */
		imgClass = null,
		/** Additional CSS rules to add to the <img> tag */
		imgStyle = null,
		/** Whether the component should use a blurred image placeholder */
		usePlaceholder = true,
		/**
		 * The HTML5 `sizes` attribute for the image
		 *
		 * Learn more about srcset and sizes:
		 * -> https://web.dev/learn/design/responsive-images/#sizes
		 * -> https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-sizes
		 **/
		sizes = null, 
		/**
		 * When true, the image will be considered high priority. Lazy loading is automatically disabled, and fetchpriority="high" is added to the image.
		 * You should use the priority property on any image detected as the Largest Contentful Paint (LCP) element. It may be appropriate to have multiple priority images, as different images may be the LCP element for different viewport sizes.
		 * Should only be used when the image is visible above the fold.
		 **/
		priority = false,
		/**
		 * If `data` does not contain `srcSet`, the candidates for the `srcset` of the image will be auto-generated based on these width multipliers
		 *
		 * Default candidate multipliers are [0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4]
		 **/
		srcSetCandidates = [0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4],
	} = $props() as {
		data: ResponsiveImageType,
		pictureClass: string | null,
		pictureStyle: string | null,
		imgClass: string | null,
		imgStyle: string | null,
		usePlaceholder: boolean,
		sizes: HTMLImageElement['sizes'] | null,
		priority: boolean,
		srcSetCandidates: number[]
	};

	const dispatch = createEventDispatcher();

	let loaded: boolean = $state(false);

	let placeholderStyle: CSS.PropertiesHyphen | undefined = $state(undefined);

	$effect(() => {
		placeholderStyle = usePlaceholder && !loaded && data.base64
		? {
				'background-image': `url("${data.base64}")`,
				'background-size': 'cover',
				'background-repeat': 'no-repeat',
				'background-position': '50% 50%',
				color: 'transparent'
			}
		: usePlaceholder && !loaded && data.bgColor
		? { 'background-color': data.bgColor ?? undefined, color: 'transparent' }
		: undefined;
	});

	let { width } = $derived(data);

	let height = $derived(data.height ?? Math.round(data.aspectRatio ? width / data.aspectRatio : 0));

	let sizingStyle: CSS.PropertiesHyphen | undefined = $state(undefined);

	$effect(() => {
		sizingStyle = {
			'aspect-ratio': `${width} / ${height}`,
			width: '100%',
			// 'max-width': `${width}px`,
			height: 'auto'
		};
	});
</script>

<picture class="image{pictureClass ? ` ${pictureClass}`: ''}" style={pictureStyle}>
	{#if data.webpSrcSet}
		<source srcset={data.webpSrcSet} sizes={sizes ?? data.sizes ?? null} type="image/webp" />
	{/if}
	<source
		srcset={data.srcSet ?? buildSrcSet(data.src, data.width, srcSetCandidates) ?? null}
		sizes={sizes ?? data.sizes ?? null}
	/>
	{#if data.src}
		<img
			src={data.src}
			alt={data.alt ?? ''}
			title={data.title ?? null}
			onload={() => {
				dispatch('load');
				loaded = true;
			}}
			{...noTypeCheck({
				fetchpriority: priority ? 'high' : undefined
			})}
			loading={priority ? undefined : 'lazy'}
			class={imgClass}
			style={dumpStyleAttributes({
				...placeholderStyle,
				...sizingStyle,
				...parseStyleAttributes(imgStyle)
			})}
			data-testid="img"
		/>
	{/if}
</picture>

<style lang="scss">
	.portrait {
		max-width: 50%;
	}
</style>
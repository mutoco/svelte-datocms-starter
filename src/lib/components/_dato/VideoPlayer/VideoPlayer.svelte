<script lang="ts">
	import { onMount } from 'svelte';

	import {
		type Video,
		type MuxPlayerProps,
		getTitleProp,
		getPlaybackIdProp,
		getStyleProp,
		getPlaceholderProp,
		toHTMLAttrs
	} from './utils';

	import type MuxPlayerElement from '@mux/mux-player';

	let {
		data = {},
		style,
		preload = 'metadata',
		disableCookies = true,
		thumbnailTime = 0,
		hideControls = false,
		videoStyle = null, 
		...rest
	} = $props() as { 
		data: Video,
		style: MuxPlayerProps['style'],
		preload: MuxPlayerProps['preload'],
		disableCookies: MuxPlayerProps['disableCookies'],
		thumbnailTime: MuxPlayerProps['thumbnailTime'],
		hideControls: MuxPlayerProps['hideControls'],
		videoStyle: MuxPlayerProps['videoStyle'],
		[k: string]: any
	};

	let restProps = $derived(rest || {});
	let muxPlayerElement: MuxPlayerElement | null = $state(null);
	let muxPlayerElementImported = $state(false);
	let computedProps: MuxPlayerProps | null = $state(null);
	let showVideoPoster: boolean = $state(true);

	// Attach event listeners using addEventListener
	const bindPlayerEvents = () => {
		if (!muxPlayerElement) return;

		muxPlayerElement.addEventListener('loadedmetadata', () => setTimeout(() => showVideoPoster = false, 25));
		// muxPlayerElement.addEventListener('play', () => {});
		// muxPlayerElement.addEventListener('timeupdate', () => {});
		// muxPlayerElement.addEventListener('pause', () => {});
		// muxPlayerElement.addEventListener('ended', () => {});
		// Add other events as needed...
	};

	$effect(() => {
		const { muxPlaybackId, playbackId, title, width, height, blurUpThumb } = data || {};

		computedProps = {
			...getTitleProp(title),
			...getPlaybackIdProp(muxPlaybackId, playbackId),
			...getStyleProp(style, width, height),
			...getPlaceholderProp(blurUpThumb),
			disableCookies,
			preload
		};
	});

	$effect(() => {
		if (muxPlayerElementImported && muxPlayerElement && 'paused' in restProps) {
			const paused = restProps.paused;
			paused ? muxPlayerElement.pause() : muxPlayerElement.play();
		}
	});

	onMount(async () => {
		try {
			await import('@mux/mux-player');
			muxPlayerElementImported = true;
			bindPlayerEvents(); // Bind events after the element is ready
		} catch (error) {
			console.error('Failed to load Mux Player:', error);
		}
	});

	const hideControlsStyle = $derived(hideControls ? '--controls: none;' : '');

	const playerStyleConfig = `
		/* Hide all controls at once
		--controls: none;
		*/

		/* Hide the error dialog
		--dialog: none;
        */

		/* Hide the loading indicator 
		--loading-indicator: none;
        */

		/* Target all sections by excluding the section prefix 
		--play-button: none;
		--live-button: none;
		--seek-backward-button: none;
		--seek-forward-button: none;
		--mute-button: none;
		--captions-button: none;
		--airplay-button: none;
		--pip-button: none;
		--fullscreen-button: none;
		--cast-button: none;
		--playback-rate-button: none;
		--volume-range: none;
		--time-range: none;
		--time-display: none;
		--duration-display: none;
		--rendition-selectmenu: none;
        */

		/* Target a specific section by prefixing the CSS var with (top|center|bottom) 
		--center-controls: none;
		--bottom-play-button: none;
        */
	`;
</script>

<div class="video" style="
	position: relative; 
	width: 100%; 
	overflow-hidden;
	aspect-ratio: 16/9;
	{videoStyle}
">
	<mux-player
	bind:this={muxPlayerElement}
	stream-type="on-demand"
	{...toHTMLAttrs(computedProps || {})}
	{...toHTMLAttrs(restProps)}
	style="
		position: absolute; 
		width: 100%; 
		height: 100%; 
		top: 0; 
		left: 0;
		{hideControlsStyle}
		{playerStyleConfig}
	">
		<img 
		slot="poster" 
		alt="" 
		src="{data.thumbJpg}?time={thumbnailTime}" 
		style="
			position: absolute; 
			width: 100%; 
			height: 100%; 
			top: 0; 
			left: 0; 
		">
	</mux-player>
	{#if showVideoPoster}
		<div style="
			position: absolute; 
			width: 100%;
			aspect-ratio: 16/9;
			z-index: 1; 
			top: 0; 
			left: 0; 
			background: url({data.thumbJpg}?time={thumbnailTime}) center/cover;
			{videoStyle}
		"></div>
	{/if}
</div>

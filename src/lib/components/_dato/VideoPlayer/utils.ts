import type {
	CmcdTypes,
	MaxResolutionValue,
	MinResolutionValue,
	PlaybackTypes,
	RenditionOrderValue,
	StreamTypes
} from '@mux/playback-core';

import type { Tokens } from '@mux/mux-player';
import type MuxPlayerElement from '@mux/mux-player';

// Utility Types
type ValueOf<T> = T[keyof T];
type Maybe<T> = T | null;
type Possibly<T> = Maybe<T> | undefined;

// Video API Attributes
export type VideoApiAttributes = {
	currentTime: number;
	volume: number;
	paused: boolean;
	src: string | null;
	poster: string;
	playbackRate: number;
	playsInline: boolean;
	preload: string;
	crossOrigin: string;
	autoPlay: boolean | string;
	loop: boolean;
	muted: boolean;
	style: string;
};

// Mux Media Properties
export type MuxMediaPropTypes = {
	audio: boolean;
	envKey: string;
	debug: boolean;
	disableCookies: boolean;
	disablePictureInPicture?: boolean;
	hideControls: boolean;
	metadata: Record<string, any>;
	extraSourceParams: Record<string, any>;
	_hlsConfig: MuxPlayerElement['_hlsConfig'];
	beaconCollectionDomain: string;
	customDomain: string;
	playbackId: string;
	preferPlayback?: ValueOf<PlaybackTypes>;
	streamType: ValueOf<StreamTypes> | 'll-live' | 'live:dvr' | 'll-live:dvr';
	defaultStreamType: ValueOf<StreamTypes>;
	targetLiveWindow: number;
	startTime: number;
	storyboardSrc: string;
	preferCmcd?: ValueOf<CmcdTypes>;
};

// Mux Player Props
export type MuxPlayerProps = {
	class?: string;
	hotkeys?: string[];
	nohotkeys?: boolean;
	defaultHiddenCaptions?: boolean;
	playerSoftwareVersion?: string;
	playerSoftwareName?: string;
	forwardSeekOffset?: number;
	backwardSeekOffset?: number;
	maxResolution?: MaxResolutionValue;
	minResolution?: MinResolutionValue;
	renditionOrder?: RenditionOrderValue;
	metadataVideoId?: string;
	metadataVideoTitle?: string;
	metadataViewerUserId?: string;
	primaryColor?: string;
	secondaryColor?: string;
	accentColor?: string;
	placeholder?: string;
	playbackRates?: number[];
	defaultShowRemainingTime?: boolean;
	defaultDuration?: number;
	noVolumePref?: boolean;
	thumbnailTime?: number;
	title?: string;
	tokens?: Tokens;
	theme?: string;
	themeProps?: Record<string, any>;
} & Partial<MuxMediaPropTypes> &
	Partial<VideoApiAttributes>;

// Video Data Structure
export type Video = {
	title?: Maybe<string>;
	height?: Maybe<number>;
	width?: Maybe<number>;
	muxPlaybackId?: Maybe<string>;
	playbackId?: Maybe<string>;
	blurUpThumb?: Maybe<string>;
	thumbJpg?: Maybe<string>;
	thumbPng?: Maybe<string>;
	thumbGif?: Maybe<string>;
};

// Helper Functions
export const getTitleProp = (title: Possibly<string>) => (title ? { title } : undefined);

export const getPlaybackIdProp = (muxPlaybackId: Possibly<string>, playbackId: Possibly<string>) => {
	if (!muxPlaybackId && !playbackId) return undefined;
	return { playbackId: `${muxPlaybackId || playbackId}` };
};

export const getAspectRatio = (width: Possibly<number>, height: Possibly<number>) => {
	return width && height ? `aspect-ratio: ${width} / ${height}` : undefined;
};

export const getStyleProp = (
	style: MuxPlayerProps['style'],
	width: Possibly<number>,
	height: Possibly<number>
) => {
	const styles = [getAspectRatio(width, height), style].filter(Boolean);
	return styles.length ? { style: styles.join('; ') } : undefined;
};

export const getPlaceholderProp = (blurUpThumb: Possibly<string>) =>
	blurUpThumb ? { placeholder: blurUpThumb } : undefined;

// Utility functions
export const isNil = (x: unknown): x is null | undefined => x == undefined;

export const isKeyOf = <T extends {} = any>(k: string | number | symbol, o: Maybe<T> | undefined): k is keyof T => {
	return !isNil(o) && k in o;
};

const PropToAttrNameMap = {
	crossOrigin: 'crossorigin',
	playsInline: 'playsinline',
	autoPlay: 'autoplay',
	playbackRate: 'playbackrate',
	playbackRates: 'playbackrates'
};

const toKebabCase = (str: string) => str.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);

export const toNativeAttrName = (propName: string, propValue: any): string | undefined => {
	if (typeof propValue === 'boolean' && !propValue) return undefined;
	if (isKeyOf(propName, PropToAttrNameMap)) return PropToAttrNameMap[propName];
	if (typeof propValue === 'undefined') return undefined;
	if (/[A-Z]/.test(propName)) return toKebabCase(propName);

	return propName;
};

export const toNativeAttrValue = (propValue: any) => {
	return Array.isArray(propValue) ? propValue.join(' ') : propValue;
};

export const toHTMLAttrs = (props: Record<string, any> = {}) => {
	return Object.entries(props).reduce<Record<string, string>>((transformedProps, [propName, propValue]) => {
		const attrName = toNativeAttrName(propName, propValue);
		if (!attrName) return transformedProps;

		const attrValue = toNativeAttrValue(propValue);
		transformedProps[attrName] = attrValue;
		return transformedProps;
	}, {});
};

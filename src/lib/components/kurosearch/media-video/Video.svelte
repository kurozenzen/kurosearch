<script lang="ts">
	import { clearsrc } from '$lib/logic/use/clearsrc';
	import { screenintersection } from '$lib/logic/use/screenintersection';
	import { SkipDirection, skipVideo, toggleVideo } from '$lib/store/active-video.svelte';
	import PostOverlay from '../post-overlay/PostOverlay.svelte';
	import { getVolume } from './VolumeControl.svelte';

	interface Props {
		src: string;
		poster: string;
		width: number;
		height: number;
		loop?: boolean;
		class?: string;
		restrict?: 'width' | 'height';
		onfullscreen?: (currentTime?: number) => void;
	}

	let { src, poster, width, height, loop = false, onfullscreen, ...rest }: Props = $props();

	let video: HTMLVideoElement | undefined = $state(undefined);

	let displayVideo = $state(false);

	let paused = $state(true);
	let loading = $state(false);

	let duration = $state(0);
	let currentTime = $state(0);
	let buffered = $state([{ start: 0, end: 0 }]);
	let bufferedTime = $derived(buffered.reduce((acc, cur) => Math.max(acc, cur.end), 0));

	let overlayHidden = $state(true);
	const onclick = (e: Event) => {
		e.stopPropagation();
		overlayHidden = !overlayHidden;
	};

	const ontoggleplay = () => {
		if (video) {
			toggleVideo(video);
		}
	};

	const skip = (event: MouseEvent) => {
		if (video) {
			event.stopPropagation();
			event.preventDefault();
			if (event.offsetX < (event.target as HTMLVideoElement).clientWidth / 3) {
				skipVideo(video, SkipDirection.Backward);
			} else if (event.offsetX > ((event.target as HTMLVideoElement).clientWidth * 2) / 3) {
				skipVideo(video, SkipDirection.Forward);
			}
		}
	};

	const onIntersectionChange = (isIntersecting: boolean) => {
		displayVideo = isIntersecting;
		if (video && !isIntersecting) {
			paused = true;
		}
	};
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
<div
	{@attach screenintersection(0, onIntersectionChange)}
	class={rest.class}
	style:aspect-ratio="{width}/{height}"
	{onclick}
>
	{#if displayVideo}
		<!-- svelte-ignore a11y_media_has_caption -->
		<video
			{@attach clearsrc}
			tabindex="0"
			{poster}
			{loop}
			{src}
			bind:this={video}
			bind:paused
			bind:currentTime
			bind:duration
			bind:buffered
			onwaiting={() => (loading = true)}
			onplaying={() => (loading = false)}
			onpause={() => (loading = false)}
			onended={() => {
				if (!loop) {
					loading = false;
				}
			}}
			ondblclick={skip}
			preload="metadata"
			style:aspect-ratio="{width} / {height}"
			volume={getVolume()}
			class:restrict-height={rest.restrict === 'height'}
			class:restrict-width={rest.restrict !== 'height'}
			{onclick}
		></video>
		<PostOverlay
			mediaType="video"
			hidden={overlayHidden}
			{onfullscreen}
			{paused}
			{loading}
			{ontoggleplay}
			bind:currentTime
			{bufferedTime}
			{duration}
		/>
	{/if}
</div>

<style>
	div {
		width: 100%;
		height: 100%;
		position: relative;
		display: grid;
		place-items: center;
		z-index: var(--z-media);
	}

	video {
		contain: strict;
		object-fit: contain;
	}

	.restrict-width {
		width: 100%;
	}

	.restrict-height {
		height: 100%;
	}

	@container (min-width: 800px) {
		video {
			border-radius: var(--border-radius-large) var(--border-radius-large) 0 0;
		}
	}
</style>

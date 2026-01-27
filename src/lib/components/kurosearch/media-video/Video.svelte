<script lang="ts">
	import { clearsrc } from '$lib/logic/use/clearsrc';
	import { getVolume } from './VolumeControl.svelte';
	import PostOverlay from '../post-overlay/PostOverlay.svelte';
	import { screenintersection } from '$lib/logic/use/screenintersection';
	import { SKIP_TIME, videoStore } from '$lib/store/active-video-store';

	interface Props {
		src: string;
		poster: string;
		width: number;
		height: number;
		loop?: boolean;
		class?: string;
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
			videoStore.target(video);
			videoStore.toggle();
		}
	};

	const skip = (event: MouseEvent) => {
		event.stopPropagation();
		event.preventDefault();
		if (video) {
			let skipTime = SKIP_TIME;
			if (event.offsetX < (event.target as HTMLVideoElement).clientWidth / 2) {
				skipTime = -SKIP_TIME;
			}
			videoStore.target(video);
			videoStore.skip(skipTime);
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
	{@attach screenintersection(onIntersectionChange)}
	class="post-media {rest.class}"
	style="aspect-ratio:{width}/{height}"
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
			style="aspect-ratio: {width} / {height}"
			volume={getVolume()}
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
		position: relative;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr auto 1fr;
		z-index: var(--z-media);
	}

	video {
		width: 100%;
		grid-column: 1;
		grid-row: 1 / span 3;
		contain: strict;
		object-fit: contain;
	}

	@container (min-width: 800px) {
		video {
			border-radius: var(--border-radius-large) var(--border-radius-large) 0 0;
		}
	}
</style>

<script lang="ts">
	import { getGifSources, getVideoSources } from '$lib/logic/media-utils';
	import { replaceHost } from '$lib/logic/url-utils';
	import { videoObserver } from '$lib/logic/video-observer';
	import imageServerUrl from '$lib/store/image-server-url-store';
	import { onDestroy, onMount } from 'svelte';

	export let post: kurosearch.Post;

	let video: HTMLVideoElement | undefined;

	const keybinds = (event: KeyboardEvent) => {
		if (post.type === 'video' && video) {
			if (event.key === 'ArrowLeft') {
				event.preventDefault();
				event.stopPropagation();
				video.currentTime = Math.max(0, video.currentTime - 5);
			}
			if (event.key === 'ArrowRight') {
				event.preventDefault();
				event.stopPropagation();
				video.currentTime = Math.min(video.duration, video.currentTime + 5);
			}
		}
	};

	onMount(() => {
		if (video) {
			videoObserver?.observe(video);
		}
		document.addEventListener('keydown', keybinds);
	});
	onDestroy(() => {
		if (video) {
			videoObserver?.unobserve(video);
		}
		document.removeEventListener('keydown', keybinds);
	});
</script>

{#if post.type === 'image'}
	{@const source = replaceHost(post.sample_url, $imageServerUrl)}
	<img src={source} alt="[IMAGE] post #{post.id}" title="[IMAGE] post #{post.id}" />
{:else if post.type === 'video'}
	{@const sources = getVideoSources(post.file_url, post.sample_url, post.preview_url)}
	{@const animatedSource = replaceHost(sources.animated, $imageServerUrl)}
	{@const staticSource = replaceHost(sources.static, $imageServerUrl)}
	<!-- svelte-ignore a11y-media-has-caption -->
	<video
		src={animatedSource}
		poster={staticSource}
		loop={true}
		title="[VIDEO] post #{post.id}"
		controls
		preload="metadata"
		autoplay
		bind:this={video}
	/>
{:else}
	{@const sources = getGifSources(post.file_url, post.sample_url, post.preview_url)}
	{@const animatedSource = replaceHost(sources.animated, $imageServerUrl)}
	<img src={animatedSource} alt="[GIF] post #{post.id}" title="[GIF] post #{post.id}" />
{/if}

<style>
	img,
	video {
		display: flex;
		width: 100vw;
		height: 100vh;
		object-fit: contain;
		contain: paint;

		scroll-snap-align: start;
		scroll-snap-stop: always;
	}
</style>

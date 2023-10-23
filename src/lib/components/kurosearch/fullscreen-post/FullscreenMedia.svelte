<script lang="ts">
	import { getGifSources, getVideoSources } from '$lib/logic/media-utils';
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

	onMount(() => document.addEventListener('keydown', keybinds));
	onDestroy(() => document.removeEventListener('keydown', keybinds));
</script>

{#if post.type === 'image'}
	<img src={post.sample_url} alt="[IMAGE] post #{post.id}" title="[IMAGE] post #{post.id}" />
{:else if post.type === 'video'}
	{@const sources = getVideoSources(post.file_url, post.sample_url, post.preview_url)}
	<!-- svelte-ignore a11y-media-has-caption -->
	<video
		src={sources.animated}
		poster={sources.static}
		loop={true}
		title="[VIDEO] post #{post.id}"
		controls
		preload="metadata"
		autoplay
		bind:this={video}
	/>
{:else}
	{@const sources = getGifSources(post.file_url, post.sample_url, post.preview_url)}
	<img src={sources.animated} alt="[GIF] post #{post.id}" title="[GIF] post #{post.id}" />
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

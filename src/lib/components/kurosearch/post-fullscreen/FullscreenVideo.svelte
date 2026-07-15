<script lang="ts">
	import { clearsrc } from '$lib/logic/attachments/clearsrc';
	import { screenintersection } from '$lib/logic/attachments/screenintersection';
	import { getVideoSources } from '$lib/logic/media-utils';
	import { playVideo, toggleVideo } from '$lib/store/active-video.svelte';
	import { onMount } from 'svelte';
	import { getVolume } from '../media-video/VolumeControl.svelte';
	import PostOverlay from '../post-overlay/PostOverlay.svelte';

	interface Props {
		post: kurosearch.Post;
		ondetails: () => void;
		onended?: () => void;
		startAt?: number;
	}

	let { post, onended, ondetails, startAt }: Props = $props();

	let video: HTMLVideoElement;

	let sources = $derived(getVideoSources(post.file_url, post.sample_url, post.preview_url));

	let currentTime = $state(0);
	let buffered = $state([{ start: 0, end: 0 }]);
	let bufferedTime = $derived(buffered.reduce((acc, cur) => Math.max(acc, cur.end), 0));
	let paused = $state(false);
	let loading = $state(false);
	let duration: number = $state(1);
	let overlayHidden = $state(true);

	const onclick = (e: Event) => {
		e.stopPropagation();
		overlayHidden = !overlayHidden;
	};

	const ontoggleplay = async () => {
		await toggleVideo(video);
	};

	const onIntersectionChange = (isIntersecting: boolean) => {
		if (isIntersecting) {
			playVideo(video);
		} else {
			video.pause();
		}
	};

	onMount(() => {
		if (startAt !== undefined) {
			video.currentTime = startAt;
		}
	});
</script>

<!-- svelte-ignore a11y_media_has_caption -->
<video
	{@attach screenintersection(0.5, onIntersectionChange)}
	{@attach clearsrc}
	src={sources.animated}
	poster={sources.static}
	title="[VIDEO] post #{post.id}"
	preload="metadata"
	bind:this={video}
	bind:currentTime
	bind:paused
	bind:duration
	bind:buffered
	onwaiting={() => (loading = true)}
	onplaying={() => (loading = false)}
	{onended}
	oncontextmenu={(e) => {
		e.preventDefault();
		e.stopPropagation();
	}}
	volume={getVolume()}
	{onclick}
>
</video>

<PostOverlay
	hidden={overlayHidden}
	mediaType="video"
	{paused}
	{loading}
	{ontoggleplay}
	bind:currentTime
	{bufferedTime}
	{duration}
	{ondetails}
/>

<style>
	video {
		display: block;
		width: 100vw;
		height: 100vh;
		contain: strict;
		object-fit: contain;
		z-index: var(--z-media);
	}
</style>

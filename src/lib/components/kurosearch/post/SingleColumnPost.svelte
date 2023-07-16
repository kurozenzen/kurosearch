<script lang="ts">
	import Image from '../media-image/Image.svelte';
	import Video from '../media-video/Video.svelte';
	import Gif from '../media-gif/Gif.svelte';
	import Details from '../details/Details.svelte';

	export let post: kurosearch.Post;
	export let open = false;

	const toggleOpen = () => {
		open = !open;
	};
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div id="post_{post.id}" class="post" tabindex="-1" class:open>
	{#if post.type === 'image'}
		<Image {post} on:click={toggleOpen} {open} />
	{:else if post.type === 'video'}
		<Video
			src={post.file_url}
			poster={post.sample_url}
			width={post.width}
			height={post.height}
			loop={post.tags.some((t) => t.name == 'loop')}
			on:click={toggleOpen}
		/>
	{:else}
		<Gif {post} on:click={toggleOpen} />
	{/if}
	{#if open}
		<Details {post} />
	{/if}
</div>

<style>
	div {
		background-color: var(--background-1);
	}

	@media (min-width: 800px) {
		div {
			border-radius: var(--border-radius);
		}
	}
</style>

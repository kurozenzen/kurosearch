<script lang="ts">
	import { isAnimated } from '$lib/logic/media-utils';

	export let post: kurosearch.Post;
	export let offset: string;

	$: preview = isAnimated(post.sample_url) ? post.preview_url : post.sample_url;
</script>

<img src={preview} alt="post #{post.id}" style:top={offset} />

<style>
	img {
		display: flex;
		position: absolute;
		width: 100vw;
		height: 100vh;
		object-fit: contain;
		contain: paint;
	}
</style>

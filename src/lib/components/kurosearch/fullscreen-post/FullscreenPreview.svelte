<script lang="ts">
	import { isAnimated } from '$lib/logic/media-utils';

	export let post: kurosearch.Post;

	$: source = isAnimated(post.sample_url) ? post.preview_url : post.sample_url;
</script>

<div id={post.id.toString()}>
	<img src={source} alt="post #{post.id}" />
</div>

<style>
	div {
		width: 100vw;
		height: 100vh;
		overflow: scroll;
		scroll-snap-align: start;
	}

	::-webkit-scrollbar {
		width: 0px;
		height: 0px;
	}

	img {
		display: flex;
		width: 100vw;
		height: 100vh;
		object-fit: contain;
	}
</style>

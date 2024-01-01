<script lang="ts">
	import { isAnimated } from '$lib/logic/media-utils';
	import { replaceHost } from '$lib/logic/url-utils';
	import imageServerUrl from '$lib/store/image-server-url-store';

	export let post: kurosearch.Post;
	export let offset: string;

	$: source = replaceHost(
		isAnimated(post.sample_url) ? post.preview_url : post.sample_url,
		$imageServerUrl
	);
</script>

<img src={source} alt="post #{post.id}" style:top={offset} />

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

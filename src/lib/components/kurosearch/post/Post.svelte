<script lang="ts">
	import { base } from '$app/paths';

	export let post: kurosearch.Post;

	let rows = Math.round((post.height / post.width) * 5);
</script>

<img src={post.sample_url} alt="post" style="grid-row: span {rows}" />

<style>
	img {
		object-fit: cover;
		display: block;
		width: 100%;
		height: 100%;
		background-color: black;
		border-radius: 5px;
	}
</style>

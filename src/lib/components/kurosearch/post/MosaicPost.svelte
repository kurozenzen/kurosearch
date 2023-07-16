<script lang="ts">
	import { isEnter } from '$lib/logic/keyboard-utils';

	export let post: kurosearch.Post;

	let rows = Math.round((post.height / post.width) * 5);
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<img
	src={post.sample_url}
	alt="post"
	style="grid-row: span {rows}"
	on:click
	on:keydown={(e) => {
		if (isEnter(e)) {
			e.target.click();
		}
	}}
/>

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

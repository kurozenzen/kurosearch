<script lang="ts">
	import { observeImage } from '$lib/logic/image-observer';
	import { clickOnEnter } from '$lib/logic/keyboard-utils';

	export let src: string;
	export let alt: string;
	export let width: number;
	export let height: number;
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<img
	class="post-media"
	loading="lazy"
	data-src={src}
	{alt}
	{width}
	{height}
	tabindex="0"
	on:click
	on:load
	on:keydown={clickOnEnter}
	use:observeImage
/>

<style>
	img {
		position: absolute;
		display: block;
		width: 100%;
		height: 100%;
		object-fit: contain;
		contain: strict;
		z-index: var(--z-media);
	}

	@container (min-width: 800px) {
		img {
			border-radius: var(--border-radius-large) var(--border-radius-large) 0 0;
		}
	}
</style>

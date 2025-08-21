<script lang="ts">
	import { observeImage } from '$lib/logic/image-observer';
	import { clickOnEnter } from '$lib/logic/keyboard-utils';

	let { src, alt, width, height } = $props();
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
<img
	class="post-media"
	loading="lazy"
	data-src={src}
	{alt}
	{width}
	{height}
	tabindex="0"
	onkeydown={clickOnEnter}
	use:observeImage
/>

<style>
	img {
		position: absolute;
		display: block;
		width: 100%;
		height: auto;
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

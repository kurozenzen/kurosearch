<script lang="ts">
	import { observeImage } from '$lib/logic/image-observer';
	import { clickOnEnter } from '$lib/logic/keyboard-utils';
	import { blurEnabled } from '$lib/store/blur-enabled-store';

	let { src, alt, width, height, onclick } = $props();
	const transparentPixel = 'data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=';
</script>

<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<img
	class="post-media"
	class:blurred={$blurEnabled}
	loading="lazy"
	data-src={src}
	{alt}
	{width}
	{height}
	src={transparentPixel}
	tabindex="0"
	onkeydown={clickOnEnter}
	use:observeImage
	{onclick}
/>

<style lang="scss">
	img {
		position: absolute;
		display: block;
		width: 100%;
		height: auto;
		object-fit: contain;
		contain: strict;
		z-index: var(--z-media);

		&.blurred {
			filter: blur(20px);
		}
	}

	@container (min-width: 800px) {
		img {
			border-radius: var(--border-radius-large) var(--border-radius-large) 0 0;
		}
	}
</style>

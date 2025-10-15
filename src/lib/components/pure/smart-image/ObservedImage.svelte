<script lang="ts">
	import { observeImage } from '$lib/logic/image-observer';
	import { clickOnEnter } from '$lib/logic/keyboard-utils';
	import { blurEnabled } from '$lib/store/blur-enabled-store';

	let { src, alt, width, height, onclick } = $props();
	const transparentPixel = 'data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=';
</script>

<button
	class="post-media"
	class:blurred={$blurEnabled}
	type="button"
	{onclick}
	style="background: none; border: none; padding: 0; width: 100%; height: 100%; display: block;"
>
	<img
		class="post-media"
		class:blurred={$blurEnabled}
		loading="lazy"
		data-src={src}
		{alt}
		{width}
		{height}
		src={transparentPixel}
		use:observeImage
	/>
</button>

<style lang="scss">
	button {
		position: absolute;
		top: 0;
		left: 0;
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
		width: 100%;
		height: 100%;
		z-index: var(--z-media);
	}

	img {
		position: absolute;
		top: 0;
		left: 0;
		display: block;
		width: 100%;
		height: auto;
		object-fit: contain;
		contain: strict;
		pointer-events: none;

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

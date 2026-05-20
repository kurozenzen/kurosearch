<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import IconButton from '../button-icon/IconButton.svelte';

	let previousY = $state(0);
	let visible = $state(false);

	const listener = () => {
		const currentY = window.scrollY;
		visible = currentY < previousY && currentY > 0;
		previousY = currentY;
	};

	onMount(() => {
		document.addEventListener('scroll', listener, { passive: true });
	});

	onDestroy(() => {
		document.removeEventListener('scroll', listener);
	});
</script>

<button
	type="button"
	aria-label="back to top"
	title="Go back up"
	onclick={() => window.scrollTo(0, 0)}
	class:visible
	class="mixin-circle mixin-accent mixin-hover"
>
	<i class="codicon codicon-arrow-up"></i>
</button>

<style>
	button {
		--size: var(--line-height-large);

		position: fixed;
		bottom: -4rem;
		right: 2rem;

		box-shadow: var(--default-shadow);
		z-index: var(--z-scroll-up);
	}

	button.visible {
		bottom: 2rem;
	}

	@media (min-width: 1024px) {
		button {
			right: calc(2rem + calc(100vw - 1024px) / 2);
		}
	}
</style>

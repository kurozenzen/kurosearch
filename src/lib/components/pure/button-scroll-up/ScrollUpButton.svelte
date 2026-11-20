<script lang="ts">
	let previousY = $state(0);
	let visible = $state(false);
</script>

<svelte:window
	onscroll={() => {
		visible = window.scrollY < previousY && window.scrollY > 0;
		previousY = window.scrollY;
	}}
/>

<button
	type="button"
	aria-label="back to top"
	title="Go back up"
	onclick={() => window.scrollTo(0, 0)}
	class:visible
	class="mixin-circle mixin-accent mixin-hover codicon codicon-arrow-up"
>
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

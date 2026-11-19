<script lang="ts">
	import type { ClassValue } from 'svelte/elements';

	interface Props {
		class?: ClassValue;
		onclick?: () => void;
	}

	let { onclick, ...rest }: Props = $props();
</script>

<button
	type="button"
	title="Enter Fullscreen mode"
	{onclick}
	aria-label="Enter Fullscreen mode"
	class={['mixin-circle mixin-shade mixin-hover codicon codicon-screen-full', rest.class]}
>
</button>

<style>
	button {
		--size: var(--line-height);

		/* Centering */
		display: flex;
		align-items: center;
		justify-content: center;

		/* Position*/
		position: absolute;
		top: var(--small-gap);
		left: var(--small-gap);
		z-index: var(--z-media-controls);
	}
</style>

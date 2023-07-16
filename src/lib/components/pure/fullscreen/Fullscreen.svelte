<script lang="ts">
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';

	const dispatch = createEventDispatcher();
	const close = () => dispatch('close');

	let dialog: HTMLDivElement;
	let listener = () => {
		if (document.fullscreenElement) {
			// entering fullscreen
		} else {
			close();
		}
	};

	onMount(() => {
		dialog.focus();
		document.addEventListener('fullscreenchange', listener);

		try {
			dialog.requestFullscreen();
		} catch {
			// ignored
		}
	});

	onDestroy(() => {
		document.removeEventListener('fullscreenchange', listener);
		try {
			document.exitFullscreen();
		} catch {
			// ignored
		}
	});
</script>

<div
	on:keydown={(event) => {
		event.code === 'Escape' && close();
	}}
	role="none"
	bind:this={dialog}
	tabindex="-1"
	class="dialog"
	on:click|stopPropagation={() => {}}
>
	<slot />
</div>

<style>
	div {
		position: fixed;
		top: 0;
		left: 0;
		display: grid;
		place-items: center;
		contain: strict;
		height: 100vh;
		width: 100vw;
		background-color: var(--background-0);
		backdrop-filter: blur(5px);
		z-index: var(--z-dialog);
	}

	div:focus {
		outline: unset;
	}
</style>

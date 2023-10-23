<script lang="ts">
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';

	const dispatch = createEventDispatcher();
	const close = () => dispatch('close');
	const onKey = (event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			close();
		}
	};
	let onFullscreenChange = () => {
		if (document.fullscreenElement) {
			// entering fullscreen
		} else {
			close();
		}
	};

	let dialog: HTMLDivElement;

	onMount(async () => {
		dialog.focus();
		document.addEventListener('keydown', onKey);
		document.addEventListener('fullscreenchange', onFullscreenChange);
		try {
			// await dialog.requestFullscreen();
		} catch {
			// ignored
		}
	});

	onDestroy(async () => {
		document.removeEventListener('keydown', onKey);
		document.removeEventListener('fullscreenchange', onFullscreenChange);
		try {
			// await document.exitFullscreen();
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
	class="dialog fullscreen"
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
		overflow-y: scroll;
		overscroll-behavior-block: none;
	}

	div:focus {
		outline: unset;
	}

	@media (pointer: fine) {
		.fullscreen.dialog::-webkit-scrollbar {
			width: 0px;
			height: 0px;
		}

		.fullscreen.dialog {
			scrollbar-width: none;
		}
	}
</style>

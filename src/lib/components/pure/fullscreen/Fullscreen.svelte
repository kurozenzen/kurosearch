<script lang="ts">
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';

	const dispatch = createEventDispatcher();
	const close = () => dispatch('close');
	const closeOnEscapePressed = (event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			console.log('escape close');
			close();
		}
	};
	const closeOnFullscreenExit = () => {
		if (!document.fullscreenElement) {
			console.log('fullscreen close');
			close();
		} else {
			console.log('open');
		}
	};

	let dialog: HTMLDivElement;

	onMount(async () => {
		dialog.focus();
		// document.addEventListener('fullscreenchange', closeOnFullscreenExit);
		try {
			await dialog.requestFullscreen();
		} catch {
			// ignored
		}
	});

	onDestroy(async () => {
		// document.removeEventListener('fullscreenchange', closeOnFullscreenExit);
		try {
			await document.exitFullscreen();
		} catch {
			// ignored
		}
		console.log('dialog destroy');
	});
</script>

<div
	bind:this={dialog}
	role="none"
	tabindex="-1"
	on:click|stopPropagation={() => {}}
	on:keydown={closeOnEscapePressed}
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

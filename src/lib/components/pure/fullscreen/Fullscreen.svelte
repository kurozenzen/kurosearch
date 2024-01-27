<script lang="ts">
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';

	const dispatch = createEventDispatcher();
	const close = () => dispatch('close');
	const closeOnEscapePressed = (event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			close();
		}
	};
	const closeOnFullscreenExit = () => {
		if (!document.fullscreenElement) {
			close();
		}
	};

	let dialog: HTMLDivElement;
	let ready = false;

	onMount(async () => {
		dialog.focus();
		document.addEventListener('fullscreenchange', closeOnFullscreenExit);
		try {
			await dialog.requestFullscreen();
		} catch {
			// ignored
		}
		ready = true;
	});

	onDestroy(async () => {
		document.removeEventListener('fullscreenchange', closeOnFullscreenExit);
		try {
			await document.exitFullscreen();
		} catch {
			// ignored
		}
	});
</script>

<div
	bind:this={dialog}
	role="none"
	tabindex="-1"
	on:click|stopPropagation={() => {}}
	on:keydown={closeOnEscapePressed}
>
	{#if ready}
		<slot />
	{/if}
</div>

<style>
	div {
		position: fixed;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100vw;

		display: grid;
		place-items: center;
		contain: strict;

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
		div::-webkit-scrollbar {
			width: 0px;
			height: 0px;
		}

		div {
			scrollbar-width: none;
		}
	}
</style>

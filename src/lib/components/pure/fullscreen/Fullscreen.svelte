<script lang="ts">
	import { browser } from '$app/environment';
	import { onDestroy, onMount, type Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		onclose?: () => void;
	}

	let { children, onclose }: Props = $props();

	const closeOnEscapePressed = (event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			onclose?.();
		}
	};
	const closeOnFullscreenExit = () => {
		if (!document.fullscreenElement) {
			onclose?.();
		}
	};

	let dialog: HTMLDivElement;

	onMount(() => {
		if (browser) {
			dialog.focus();

			dialog.requestFullscreen().then(() => {
				document.addEventListener('fullscreenchange', closeOnFullscreenExit);
			}).catch(() => {
				// not supported or no user gesture — overlay still works fine
			});
		}
	});

	onDestroy(() => {
		if (browser) {
			document.removeEventListener('fullscreenchange', closeOnFullscreenExit);
			document.exitFullscreen().catch(() => {});
		}
	});
</script>

<div
	bind:this={dialog}
	role="none"
	tabindex="-1"
	onclick={(e) => {
		e.stopPropagation();
	}}
	onkeydown={closeOnEscapePressed}
>
	{@render children()}
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

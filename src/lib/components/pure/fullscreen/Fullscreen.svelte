<script lang="ts">
	import { fullscreenelement } from '$lib/logic/attachments/fullscreenelement';
	import { keybindFsLeave } from '$lib/logic/keybinds/keyboard-utils';
	import { onMount, type Snippet } from 'svelte';
	import { on } from 'svelte/events';

	interface Props {
		children: Snippet;
		onclose?: () => void;
	}

	let { children, onclose }: Props = $props();

	onMount(() =>
		on(window, 'popstate', () => {
			if (history.state?.fullscreen === undefined || history.state?.fullscreen === false) {
				onclose?.();
			}
		})
	);
</script>

<div
	{@attach fullscreenelement}
	role="none"
	tabindex="-1"
	onclick={(e) => {
		e.stopPropagation();
	}}
	onkeydown={(e) => {
		if (keybindFsLeave(e)) {
			e.stopPropagation();
			e.preventDefault();
			onclose?.();
		}
	}}
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

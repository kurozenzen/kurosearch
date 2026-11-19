<script lang="ts">
	import { pushState } from '$app/navigation';
	import { page } from '$app/state';
	import { type Snippet } from 'svelte';

	interface Props {
		open: boolean;
		onclose?: () => void;
		children: Snippet;
	}

	let { open = $bindable(), onclose, children }: Props = $props();

	let dialog: HTMLDialogElement | undefined = $state();

	let pushed = false;
	let downOnBackdrop = false;

	$effect(() => {
		if (!dialog) return;
		if (open) {
			if (!dialog.open) dialog.showModal();
			if (!pushed) {
				pushState('', { dialog: true });
				pushed = true;
			}
		} else {
			if (dialog.open) dialog.close();
			if (pushed) {
				pushed = false;
				history.back();
			}
		}
	});

	$effect(() => () => {
		if (pushed && page.state?.dialog) history.back();
	});

	$effect(() => {
		if (!page.state.dialog && pushed && open) {
			pushed = false;
			open = false;
		}
	});

	const handleClose = () => {
		open = false;
		onclose?.();
	};
</script>

<dialog
	bind:this={dialog}
	onclose={handleClose}
	onpointerdown={(e) => {
		downOnBackdrop = e.target === dialog;
	}}
	onclick={(e) => {
		if (downOnBackdrop && e.target === dialog) {
			open = false;
		}
		downOnBackdrop = false;
	}}
>
	{@render children()}
</dialog>

<style>
	dialog {
		border-radius: var(--border-radius-large);
		background-color: var(--background-0);
		z-index: var(--z-dialog);
		padding: var(--grid-gap);
		max-width: calc(100vw - 2 * var(--grid-gap));
		max-height: calc(100vh - 2 * var(--grid-gap));
		overflow-y: auto;
	}

	dialog::backdrop {
		position: fixed;
		top: 0;
		left: 0;
		display: grid;
		place-items: center;
		contain: strict;
		height: 100vh;
		width: 100vw;
		background-color: #2228;
		backdrop-filter: blur(10px);
		z-index: var(--z-dialog);
	}
</style>

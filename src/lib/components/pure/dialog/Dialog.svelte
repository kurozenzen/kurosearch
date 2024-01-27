<script lang="ts">
	import { historyState } from '$lib/logic/use/historyState';
	import { onDestroy, onMount } from 'svelte';

	// import { createEventDispatcher, onMount } from 'svelte';

	// const dispatch = createEventDispatcher();
	// const close = () => dispatch('close');

	export let dialog: HTMLDialogElement;

	const onPopState = () => {
		dialog.close();
	};

	onMount(() => {
		// Close on backdrop click
		dialog.addEventListener('click', (event) => {
			const rect = dialog.getBoundingClientRect();
			const isInDialog =
				rect.top <= event.clientY &&
				event.clientY <= rect.top + rect.height &&
				rect.left <= event.clientX &&
				event.clientX <= rect.left + rect.width;
			if (!isInDialog) {
				dialog.close();
			}
		});
	});
</script>

<dialog bind:this={dialog} on:close use:historyState={{ hash: 'dialog', onPopState }}>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<slot />
</dialog>

<!-- <div
	class="backdrop"
	on:click={close}
	on:keydown={(event) => {
		event.code === 'Escape' && close();
	}}
	role="none"
>
	<div bind:this={dialog} tabindex="-1" class="dialog" on:click|stopPropagation={() => {}}>
		<slot />
	</div>
</div> -->

<style>
	dialog {
		border-radius: var(--border-radius);
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
		background-color: #1118;
		backdrop-filter: blur(5px);
		z-index: var(--z-dialog);
	}
</style>

<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';

	const dispatch = createEventDispatcher();
	const close = () => dispatch('close');

	let dialog: HTMLDivElement;

	onMount(() => {
		dialog.focus();
	});
</script>

<div
	class="backdrop"
	on:click={close}
	on:keydown={(event) => {
		event.code === 'Escape' && close();
	}}
	role="none"
>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div bind:this={dialog} tabindex="-1" class="dialog" on:click|stopPropagation={() => {}}>
		<slot />
	</div>
</div>

<style>
	.dialog {
		border-radius: var(--border-radius);
		background-color: var(--background-0);
		z-index: var(--z-dialog);
		padding: var(--grid-gap);
		max-width: calc(100vw - 2 * var(--grid-gap));
		max-height: calc(100vh - 2 * var(--grid-gap));
		overflow-y: auto;
	}

	.dialog:focus {
		outline: unset;
	}

	.backdrop {
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

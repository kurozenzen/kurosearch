<script lang="ts">
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';

	const dispatch = createEventDispatcher();
	const close = () => dispatch('close');
	const listener = (event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			close();
		}
	};

	let dialog: HTMLDivElement;

	onMount(async () => {
		dialog.focus();
		document.addEventListener('keydown', listener);
	});
	onDestroy(() => document.removeEventListener('keydown', listener));
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
		overflow-y: scroll;
		overscroll-behavior-block: none;
	}

	div:focus {
		outline: unset;
	}
</style>

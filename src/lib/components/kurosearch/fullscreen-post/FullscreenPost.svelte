<script lang="ts">
	import Fullscreen from '$lib/components/pure/fullscreen/Fullscreen.svelte';
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	import IconButton from '$lib/components/pure/button-icon/IconButton.svelte';
	import FullscreenScroller from './FullscreenScroller.svelte';

	export let index: number;

	const dispatch = createEventDispatcher();
	const keybinds = (event: KeyboardEvent) => {
		if (event.key === 'f') {
			event.preventDefault();
			event.stopPropagation();
			dispatch('close');
		}
	};
``
	const close = () => dispatch('close', index);

	onMount(() => document.addEventListener('keydown', keybinds));
	onDestroy(() => document.removeEventListener('keydown', keybinds));
</script>

<Fullscreen on:close={close}>
	<FullscreenScroller bind:index on:endreached />
	<IconButton on:click={close} class="button-close">
		<i class="codicon codicon-close" />
	</IconButton>
</Fullscreen>

<style>
	:global(.button-close) {
		position: fixed;
		top: var(--grid-gap);
		left: var(--grid-gap);
		z-index: var(--z-dialog);
	}

	:global(.button-previous) {
		position: fixed;
		left: var(--grid-gap);
		top: 50%;
		transform: translateY(-50%);
		z-index: var(--z-dialog);
	}

	:global(.button-next) {
		position: fixed;
		right: var(--grid-gap);
		top: 50%;
		transform: translateY(-50%);
		z-index: var(--z-dialog);
	}

	/* ::-webkit-scrollbar {
		width: 0px;
		height: 0px;
	} */
</style>

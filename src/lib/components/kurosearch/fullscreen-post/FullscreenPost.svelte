<script lang="ts">
	import IconButton from '$lib/components/pure/button-icon/IconButton.svelte';
	import Fullscreen from '$lib/components/pure/fullscreen/Fullscreen.svelte';
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	import FullscreenScroller from './FullscreenScroller.svelte';

	export let index: number;

	const dispatch = createEventDispatcher();
	const close = () => {
		dispatch('close', index);
	};
	const keybinds = (event: KeyboardEvent) => {
		if (event.key === 'f') {
			event.preventDefault();
			event.stopPropagation();
			close();
		}
	};

	const exitOnStateChange = () => {
		if (history.state?.fullscreen === undefined || history.state?.fullscreen === false) {
			close();
		}
	};

	onMount(() => {
		window.addEventListener('popstate', exitOnStateChange);
		document.addEventListener('keydown', keybinds);
	});
	onDestroy(() => {
		window.removeEventListener('popstate', exitOnStateChange);
		document.removeEventListener('keydown', keybinds);
	});
</script>

<Fullscreen on:close={close}>
	<FullscreenScroller bind:index on:endreached />
	<IconButton class="button-close" on:click={close}>
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
</style>

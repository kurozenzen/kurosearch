<script lang="ts">
	import IconButton from '$lib/components/pure/button-icon/IconButton.svelte';
	import Fullscreen from '$lib/components/pure/fullscreen/Fullscreen.svelte';
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	import FullscreenScroller from './FullscreenScroller.svelte';

	export let index: number;

	const dispatch = createEventDispatcher();
	const close = () => {
		console.log('close dispatch');
		dispatch('close', index);
	};
	const keybinds = (event: KeyboardEvent) => {
		if (event.key === 'f') {
			console.log('key close');
			event.preventDefault();
			event.stopPropagation();
			close();
		}
	};

	const exitOnHashChange = () => {
		if (location.hash === '') {
			console.log('hash close');
			close();
		}
	};

	onMount(() => {
		console.log('fs mount');
		window.addEventListener('hashchange', exitOnHashChange);
		document.addEventListener('keydown', keybinds);
	});
	onDestroy(() => {
		console.log('fs destroy');
		window.removeEventListener('hashchange', exitOnHashChange);
		document.removeEventListener('keydown', keybinds);
	});

	$: {
		console.log('post index:', index);
	}
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

<script lang="ts">
	import IconButton from '$lib/components/pure/button-icon/IconButton.svelte';
	import Fullscreen from '$lib/components/pure/fullscreen/Fullscreen.svelte';
	import { broadcast } from '$lib/logic/svelte/handlers.svelte';
	import { onMount } from 'svelte';
	import { on } from 'svelte/events';
	import FullscreenScroller from './FullscreenScroller.svelte';

	interface Props {
		index: number;
		onendreached: () => void;
		onclose: (index: number) => void;
		startAt?: number;
	}

	let { index, onendreached, onclose: handleOnClose, startAt }: Props = $props();

	const keybinds = (event: KeyboardEvent) => {
		if (event.key === 'f') {
			event.preventDefault();
			event.stopPropagation();
			handleOnClose(index);
		}
	};

	const exitOnStateChange = () => {
		if (history.state?.fullscreen === undefined || history.state?.fullscreen === false) {
			handleOnClose(index);
		}
	};

	const onclose = () => {
		handleOnClose(index);
	};

	onMount(() =>
		broadcast(on(window, 'popstate', exitOnStateChange), on(document, 'keydown', keybinds))
	);
</script>

<Fullscreen {onclose}>
	<FullscreenScroller bind:index {onendreached} {startAt} />
	<IconButton class="mixin-invisible button-close" onclick={onclose}>
		<i class="codicon codicon-close"></i>
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

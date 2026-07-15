<script lang="ts">
	import IconButton from '$lib/components/pure/button-icon/IconButton.svelte';
	import Fullscreen from '$lib/components/pure/fullscreen/Fullscreen.svelte';
	import FullscreenScroller from './FullscreenScroller.svelte';

	interface Props {
		index: number;
		onendreached: () => void;
		onclose: (index: number) => void;
		startAt?: number;
	}

	let { index, onendreached, onclose: handleOnClose, startAt }: Props = $props();

	const onclose = () => handleOnClose(index);
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

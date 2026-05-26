<script lang="ts">
	import IntersectionDetector from '$lib/components/pure/intersection-detector/IntersectionDetector.svelte';
	import autoplayFullscreenEnabled from '$lib/store/autoplay-fullscreen-enabled-store';
	import results from '$lib/store/results-store';
	import { onDestroy, onMount } from 'svelte';
	import Screen from './Screen.svelte';
	import { on } from 'svelte/events';

	interface Props {
		index: number;
		onendreached: () => void;
		startAt?: number;
	}

	let { index = $bindable(), onendreached, startAt }: Props = $props();

	let desiredIndex = $state(index);
	let container: HTMLDivElement;

	let center = $state(0);

	const scrollToPrevious = () => {
		container.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
	};

	const scrollToNext = () => {
		container.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
	};

	const autoscroll = () => {
		if ($autoplayFullscreenEnabled) {
			scrollToNext();
		}
	};

	const onscroll = (event: Event) => {
		if (event.target instanceof HTMLDivElement) {
			center = event.target.scrollTop + window.innerHeight / 2;
			desiredIndex = Math.floor(center / innerHeight);
		}
	};

	const keybinds = (event: KeyboardEvent) => {
		if (event.key === 'ArrowUp') {
			event.preventDefault();
			event.stopPropagation();
			scrollToPrevious();
		}
		if (event.key === 'ArrowDown') {
			event.preventDefault();
			event.stopPropagation();
			scrollToNext();
		}
	};

	onMount(() => {
		container.scrollTop = desiredIndex * window.innerHeight;
		return on(window, 'keydown', keybinds);
	});
</script>

<!-- <p>
	{@html message}
</p> -->

<div class="root screen snap-container" bind:this={container} {onscroll}>
	<Screen offset={0} step={3} index={desiredIndex} onended={autoscroll} {startAt} />
	<Screen offset={1} step={3} index={desiredIndex} onended={autoscroll} {startAt} />
	<Screen offset={2} step={3} index={desiredIndex} onended={autoscroll} {startAt} />
	<IntersectionDetector
		absoluteTop="{$results.posts.length * 100}vh"
		rootMargin="{window.innerHeight * 3}px"
		onintersection={onendreached}
	/>
</div>

<style>
	.root {
		position: relative;
		overflow-y: scroll;
	}

	.screen {
		width: 100lvw;
		height: 100lvh;
		overflow: scroll;
		contain: strict;
	}

	.snap-container {
		scroll-snap-type: y mandatory;
	}

	.screen::-webkit-scrollbar {
		width: 0px;
		height: 0px;
	}

	.screen {
		scrollbar-width: none;
	}

	/* p {
		position: absolute;
		z-index: 1000;
		background: rgba(0, 0, 0, 0.5);
		top: 0;
		left: 0;
	} */
</style>

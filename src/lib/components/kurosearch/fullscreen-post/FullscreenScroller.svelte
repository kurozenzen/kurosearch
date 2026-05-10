<script lang="ts">
	import IntersectionDetector from '$lib/components/pure/intersection-detector/IntersectionDetector.svelte';
	import autoplayFullscreenEnabled from '$lib/store/autoplay-fullscreen-enabled-store';
	import fullscreenHintDone from '$lib/store/fullscreen-hint-done-store';
	import results from '$lib/store/results-store';
	import { onDestroy, onMount } from 'svelte';
	import Screen from './Screen.svelte';

	interface Props {
		index: number;
		onendreached: () => void;
		startAt?: number;
	}

	let { index = $bindable(), onendreached, startAt }: Props = $props();

	let desiredIndex = $state(index);
	let container: HTMLDivElement;

	let scrollTop = $state(0);

	const scrollToPrevious = () => {
		container.scrollBy({ top: -window.screen.height, behavior: 'smooth' });
	};

	const scrollToNext = () => {
		container.scrollBy({ top: window.screen.height, behavior: 'smooth' });
	};

	const autoscroll = () => {
		if ($autoplayFullscreenEnabled) {
			scrollToNext();
		}
	};

	const onscroll = (event: Event) => {
		requestAnimationFrame(() => {
			if (event.target instanceof HTMLDivElement) {
				scrollTop = event.target.scrollTop;
				desiredIndex = Math.floor(event.target.scrollTop / window.screen.height);
			}
		});
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
		container.scrollTop = desiredIndex * window.screen.height;
		document.addEventListener('keydown', keybinds);
	});
	onDestroy(() => {
		$fullscreenHintDone = true;
		document.removeEventListener('keydown', keybinds);
	});
</script>

<p>
	[DEBUG S]<br />
	S: {scrollTop}<br />
	H: {window.screen.height}<br />
	FRAC: {scrollTop / window.screen.height}<br />
	[xxx]<br />
	[DEBUG E]
</p>

<div class="root screen snap-container" bind:this={container} {onscroll}>
	<Screen offset={0} step={3} index={desiredIndex} onended={autoscroll} {startAt} />
	<Screen offset={1} step={3} index={desiredIndex} onended={autoscroll} {startAt} />
	<Screen offset={2} step={3} index={desiredIndex} onended={autoscroll} {startAt} />
	<IntersectionDetector
		absoluteTop="{$results.posts.length * 100}vh"
		rootMargin="{window.screen.height * 3}px"
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

	@keyframes scroll-hint {
		0% {
			transform: translateX(0px);
		}

		33% {
			transform: translateX(-75px);
		}

		67% {
			transform: translateX(-75px);
		}

		100% {
			transform: translateX(0px);
		}
	}

	:global(.hint > *) {
		animation: scroll-hint 1s ease-in-out;
		animation-delay: 0.5s;
	}

	p {
		position: absolute;
		top: 0;
		left: 0;
	}
</style>

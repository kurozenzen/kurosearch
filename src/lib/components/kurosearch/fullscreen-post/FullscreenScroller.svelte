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

	let message = $derived(`[DEBUG S]<br />
	SROLL: ${scrollTop}<br />
	SH: ${window.screen.height}<br />
	SAH: ${window.screen.availHeight}<br />
	IH: ${window.innerHeight}<br />
	OH: ${window.outerHeight}<br />
	DCH: ${document.documentElement.clientHeight}<br />
	DSH: ${document.documentElement.scrollHeight}<br />
	FRAC: ${scrollTop / window.screen.availHeight}`);

	const scrollToPrevious = () => {
		container.scrollBy({ top: -window.screen.availHeight, behavior: 'smooth' });
	};

	const scrollToNext = () => {
		container.scrollBy({ top: window.screen.availHeight, behavior: 'smooth' });
	};

	const autoscroll = () => {
		if ($autoplayFullscreenEnabled) {
			scrollToNext();
		}
	};

	const onscroll = (event: Event) => {
		if (event.target instanceof HTMLDivElement) {
			scrollTop = event.target.scrollTop;
			desiredIndex = Math.floor(event.target.scrollTop / window.screen.availHeight);
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
		container.scrollTop = desiredIndex * window.screen.availHeight;
		document.addEventListener('keydown', keybinds);
	});
	onDestroy(() => {
		$fullscreenHintDone = true;
		document.removeEventListener('keydown', keybinds);
	});
</script>

<p>
	{@html message}
</p>

<div class="root screen snap-container" bind:this={container} {onscroll}>
	<Screen offset={0} step={3} index={desiredIndex} onended={autoscroll} {startAt} />
	<Screen offset={1} step={3} index={desiredIndex} onended={autoscroll} {startAt} />
	<Screen offset={2} step={3} index={desiredIndex} onended={autoscroll} {startAt} />
	<IntersectionDetector
		absoluteTop="{$results.posts.length * 100}vh"
		rootMargin="{window.screen.availHeight * 3}px"
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
		/* scroll-snap-type: y mandatory; */
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
		z-index: 1000;
		background: rgba(0, 0, 0, 0.5);
		top: 0;
		left: 0;
	}
</style>

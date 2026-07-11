<script lang="ts">
	import IntersectionDetector from '$lib/components/pure/intersection-detector/IntersectionDetector.svelte';
	import autoplayFullscreenEnabled from '$lib/store/autoplay-fullscreen-enabled-store';
	import results from '$lib/store/results-store';
	import { onDestroy, onMount } from 'svelte';
	import Screen from './Screen.svelte';
	import FullscreenDetails from './FullscreenDetails.svelte';
	import FullscreenMedia from './FullscreenMedia.svelte';
	import fullscreenHintDone from '$lib/store/fullscreen-hint-done-store';
	import { on } from 'svelte/events';

	interface Props {
		index: number;
		onendreached: () => void;
		startAt?: number;
	}

	let { index = $bindable(), onendreached, startAt }: Props = $props();

	let post = $derived($results.posts[index]);
	let outer: HTMLDivElement;
	let inner: HTMLDivElement;

	let center = $state(0);

	const scrollToPrevious = () => {
		inner.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
	};

	const scrollToNext = () => {
		inner.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
	};

	const autoscroll = () => {
		if ($autoplayFullscreenEnabled) {
			scrollToNext();
		}
	};

	const onscroll = (event: Event) => {
		if (event.target instanceof HTMLDivElement) {
			center = event.target.scrollTop + window.innerHeight / 2;
			index = Math.floor(center / innerHeight);
		}
	};

	const ondetails = () => {
		outer.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
	};

	const scrollToMedia = () => {
		outer.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
	};

	const keybinds = (event: KeyboardEvent) => {
		if (event.key === 'ArrowUp' && outer.scrollLeft < window.innerWidth / 2) {
			event.preventDefault();
			event.stopPropagation();
			scrollToPrevious();
		}
		if (event.key === 'ArrowDown' && outer.scrollLeft < window.innerWidth / 2) {
			event.preventDefault();
			event.stopPropagation();
			scrollToNext();
		}
		if (event.key === 'ArrowRight') {
			event.preventDefault();
			event.stopPropagation();
			ondetails();
		}
		if (event.key === 'ArrowLeft') {
			event.preventDefault();
			event.stopPropagation();
			scrollToMedia();
		}
		if (event.key === 'd') {
			event.preventDefault();
			event.stopPropagation();
			if (outer.scrollLeft === 0) {
				ondetails();
			} else {
				scrollToMedia();
			}
		}
	};

	onMount(() => {
		inner.scrollTop = index * window.innerHeight;
		outer.scrollLeft = 0;
		setTimeout(() => {
			$fullscreenHintDone = true;
		}, 2000);
		return on(window, 'keydown', keybinds);
	});
</script>

<div bind:this={outer} class="root size-screen" class:hint={!$fullscreenHintDone}>
	<div bind:this={inner} class="inner size-screen snap-container-y" {onscroll}>
		<Screen offset={0} step={3} {index} onended={autoscroll} {startAt} {ondetails} />
		<Screen offset={1} step={3} {index} onended={autoscroll} {startAt} {ondetails} />
		<Screen offset={2} step={3} {index} onended={autoscroll} {startAt} {ondetails} />
		<IntersectionDetector
			absoluteTop="{$results.posts.length * 100}vh"
			rootMargin="{window.innerHeight * 3}px"
			onintersection={onendreached}
		/>
	</div>

	<FullscreenDetails {post} onreturn={scrollToMedia} />
</div>

<style>
	.root {
		position: relative;
		display: grid;
		grid-template-columns: 100vw 100vw;
		scroll-snap-type: x mandatory;
		overflow-x: scroll;
		contain: strict;
	}

	.inner {
		scroll-snap-type: y mandatory;
		scroll-snap-stop: always;
		scroll-snap-align: start;
		overflow-y: scroll;
		contain: strict;
		position: relative;
	}

	.size-screen {
		width: 100lvw;
		height: 100lvh;
		scrollbar-width: none;
		flex-shrink: 0;
		flex-grow: 0;

		&::-webkit-scrollbar {
			width: 0px;
			height: 0px;
		}
	}

	.hint {
		animation: scroll-hint 1s ease-in-out;
		animation-delay: 0.5s;
	}

	@keyframes scroll-hint {
		0% {
			transform: translate(0px, var(--post-offset));
		}

		33% {
			transform: translate(-75px, var(--post-offset));
		}

		67% {
			transform: translate(-75px, var(--post-offset));
		}

		100% {
			transform: translate(0px, var(--post-offset));
		}
	}

	/* p {
		position: sticky;
		top: 0;
		width: 30vw;
	}


	/* p {
		position: absolute;
		z-index: 1000;
		background: rgba(0, 0, 0, 0.5);
		top: 0;
		left: 0;
	} */
</style>

<script lang="ts">
	import IntersectionDetector from '$lib/components/pure/intersection-detector/IntersectionDetector.svelte';
	import { keybindDetails, keybindFsNext, keybindFsPrev } from '$lib/logic/keybinds/keyboard-utils';
	import autoplayFullscreenEnabled from '$lib/store/autoplay-fullscreen-enabled-store';
	import fullscreenHintDone from '$lib/store/fullscreen-hint-done-store';
	import results from '$lib/store/results-store';
	import { onMount } from 'svelte';
	import { on } from 'svelte/events';
	import FullscreenDetails from './FullscreenDetails.svelte';
	import Screen from './Screen.svelte';

	interface Props {
		index: number;
		onendreached: () => void;
		startAt?: number;
	}

	let { index = $bindable(), onendreached, startAt }: Props = $props();

	let post = $derived($results.posts[index]);
	let outer: HTMLDivElement;
	let inner: HTMLDivElement;

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

	const onVisible = (newIndex: number) => {
		index = newIndex;
	};

	const ondetails = () => {
		outer.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
	};

	const scrollToMedia = () => {
		outer.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
	};

	const keybinds = (event: KeyboardEvent) => {
		if (keybindFsPrev(event) && outer.scrollLeft === 0) {
			event.preventDefault();
			event.stopPropagation();
			scrollToPrevious();
		}
		if (keybindFsNext(event) && outer.scrollLeft === 0) {
			event.preventDefault();
			event.stopPropagation();
			scrollToNext();
		}
		if (keybindDetails(event) && outer.scrollLeft === 0) {
			event.preventDefault();
			event.stopPropagation();
			ondetails();
		}
		if (keybindDetails(event) && outer.scrollLeft > 0) {
			event.preventDefault();
			event.stopPropagation();
			scrollToMedia();
		}
	};

	$effect(() => {
		inner.scrollTop = index * window.innerHeight;
	});
	$effect(() => {
		outer.scrollLeft = 0;
	});
	onMount(() => {
		if (!$fullscreenHintDone) {
			setTimeout(() => {
				$fullscreenHintDone = true;
			}, 2000);
		}
		return on(window, 'keydown', keybinds);
	});
</script>

<div bind:this={outer} class="root size-screen" class:hint={!$fullscreenHintDone}>
	<div bind:this={inner} class="inner size-screen snap-container-y">
		<Screen offset={0} step={3} {index} onended={autoscroll} {startAt} {ondetails} {onVisible} />
		<Screen offset={1} step={3} {index} onended={autoscroll} {startAt} {ondetails} {onVisible} />
		<Screen offset={2} step={3} {index} onended={autoscroll} {startAt} {ondetails} {onVisible} />
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

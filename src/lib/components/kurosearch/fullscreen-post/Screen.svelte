<script lang="ts">
	import results from '$lib/store/results-store';
	import { onDestroy, onMount } from 'svelte';
	import FullscreenDetails from './FullscreenDetails.svelte';
	import FullscreenMedia from './FullscreenMedia.svelte';
	import fullscreenHintDone from '$lib/store/fullscreen-hint-done-store';
	import { on } from 'svelte/events';

	interface Props {
		offset: number;
		step: number;
		index: number;
		onended: () => void;
		startAt?: number;
	}

	let { offset, step, index, startAt, onended }: Props = $props();

	// svelte-ignore non_reactive_update
	let screen: HTMLDivElement;

	let thisIndex = $derived(Math.round((index - offset) / step) * step + offset);

	let actualStartAt = $derived(thisIndex == index ? startAt : undefined);

	const scrollToDetails = () => {
		screen.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
	};

	const scrollToMedia = () => {
		screen.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
	};

	const keybinds = (event: KeyboardEvent) => {
		if (event.key === 'd') {
			event.preventDefault();
			event.stopPropagation();
			if (screen.scrollLeft === 0) {
				scrollToDetails();
			} else {
				scrollToMedia();
			}
		}
	};

	$effect(() => {
		if (thisIndex !== undefined && screen !== undefined) {
			screen.scrollLeft = 0;
		}
	});

	onMount(() => {
		setTimeout(() => {
			$fullscreenHintDone = true;
		}, 2000);
		return on(window, 'keydown', keybinds);
	});
</script>

{#if thisIndex >= 0 && thisIndex < $results.posts.length}
	{@const post = $results.posts[thisIndex]}
	<!-- <p style="left:calc({offset} * 33vw);" class:active={thisIndex === index}>
		[DEBUG {offset}]<br />IDX: {index}<br />DISP: {thisIndex}
	</p> -->
	<div style="--post-index:{thisIndex};" bind:this={screen} class:hint={!$fullscreenHintDone}>
		<FullscreenMedia {post} {onended} startAt={actualStartAt} ondetails={scrollToDetails} />
		<FullscreenDetails {post} onreturn={scrollToMedia} />
	</div>
{/if}

<style>
	div {
		--post-index: default 0;
		--post-offset: calc(var(--post-index) * 100lvh);
		transform: translateY(var(--post-offset));
		position: absolute;
		left: 0;

		width: 100vw;
		height: 100vh;

		scroll-snap-align: start;
		scroll-snap-stop: always;

		display: grid;
		grid-template-columns: 100vw 100vw;
		overflow-x: scroll;
		scroll-snap-type: x mandatory;

		will-change: transform;

		scrollbar-width: none;

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

	.active {
		font-weight: bold;
		color: yellow;
	} */
</style>

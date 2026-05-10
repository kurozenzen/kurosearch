<script lang="ts">
	import results from '$lib/store/results-store';
	import { onDestroy, onMount } from 'svelte';
	import FullscreenDetails from './FullscreenDetails.svelte';
	import FullscreenMedia from './FullscreenMedia.svelte';

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

	let lowerIndex = $derived(Math.floor(index / step) * step + offset);
	let upperIndex = $derived(Math.ceil(index / step) * step + offset);

	let lowerDistance = $derived(Math.abs(lowerIndex - index));
	let upperDistance = $derived(Math.abs(upperIndex - index));

	let thisIndex = $derived(lowerDistance < upperDistance ? lowerIndex : upperIndex);
	$effect(() => {
		if (thisIndex) {
			screen.scrollLeft = 0;
		}
	});

	const scrollToDetails = () => {
		screen.scrollBy({ left: 100000, behavior: 'smooth' });
	};

	const scrollToMedia = () => {
		screen.scrollBy({ left: -100000, behavior: 'smooth' });
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

	onMount(() => {
		document.addEventListener('keydown', keybinds);
	});
	onDestroy(() => {
		document.removeEventListener('keydown', keybinds);
	});
</script>

{#if thisIndex >= 0 && thisIndex < $results.posts.length}
	{@const post = $results.posts[thisIndex]}
	<!-- <p style="left:calc({offset} * 33vw);" class:active={thisIndex === index}>
		[DEBUG {offset}]<br />IDX: {index}<br />DISP: {thisIndex}
	</p> -->
	<div style="top:calc({thisIndex} * 100vh);" bind:this={screen}>
		<FullscreenMedia {post} {onended} {startAt} ondetails={scrollToDetails} />
		<FullscreenDetails {post} onreturn={scrollToMedia} />
	</div>
{/if}

<style>
	div {
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
	}

	/* p {
		position: sticky;
		top: 0;
		width: 30vw;
	}

	.active {
		font-weight: bold;
        color: yellow
	} */
</style>

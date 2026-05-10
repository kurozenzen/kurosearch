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

	let thisIndex = $derived(Math.round((index - offset) / step) * step + offset);

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
	<div style="transform:translateY(calc({thisIndex} * 100lvh));" bind:this={screen}>
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

        will-change: transform;
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

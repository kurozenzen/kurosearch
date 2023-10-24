<script lang="ts">
	import IntersectionDetector from '$lib/components/pure/intersection-detector/IntersectionDetector.svelte';
	import results from '$lib/store/results-store';
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	import Details from '../details/Details.svelte';
	import FullscreenMedia from './FullscreenMedia.svelte';
	import FullscreenPreview from './FullscreenPreview.svelte';
	import FullscreenDetails from './FullscreenDetails.svelte';

	export let index: number;

	let container: HTMLDivElement;
	let current: HTMLDivElement;

	let postCurrent = $results.posts[index];
	let postPrevious = index > 0 ? $results.posts[index - 1] : undefined;
	let postNext = index < $results.posts.length - 1 ? $results.posts[index + 1] : undefined;
	let offsetCurrent = `${index * 100}vh`;
	let offsetPrevious = `${(index - 1) * 100}vh`;
	let offsetNext = `${(index + 1) * 100}vh`;

	const dispatch = createEventDispatcher();

	const focusCurrent = () => {
		if (current) {
			current.scrollIntoView();
			current.scrollLeft = 0;
		}
	};

	const onScroll = (event: UIEvent) => {
		const target = event.target as HTMLDivElement;
		const height = target.getBoundingClientRect().height;
		const newIndex = target.scrollTop / height;
		const roundedIndex = Math.round(newIndex);

		if (roundedIndex != index) {
			requestAnimationFrame(() => {
				index = roundedIndex;
				postCurrent = $results.posts[index];
				postPrevious = index > 0 ? $results.posts[index - 1] : undefined;
				postNext = index < $results.posts.length - 1 ? $results.posts[index + 1] : undefined;
				offsetCurrent = `${index * 100}vh`;
				offsetPrevious = `${(index - 1) * 100}vh`;
				offsetNext = `${(index + 1) * 100}vh`;
				if (current) {
					current.scrollLeft = 0;
				}
			});
		}
	};

	const keybinds = (event: KeyboardEvent) => {
		if (event.key === 'd') {
			event.preventDefault();
			event.stopPropagation();
			if (current.scrollLeft == 0) {
				current.scrollBy({ left: container.clientWidth, top: 0, behavior: 'smooth' });
			} else {
				current.scrollBy({ left: -container.clientWidth, top: 0, behavior: 'smooth' });
			}
		}
		if (event.key === 'ArrowUp') {
			event.preventDefault();
			event.stopPropagation();
			container.scrollTo({
				left: 0,
				top: container.clientHeight * (index - 1),
				behavior: 'smooth'
			});
		}
		if (event.key === 'ArrowDown') {
			event.preventDefault();
			event.stopPropagation();
			container.scrollTo({
				left: 0,
				top: container.clientHeight * (index + 1),
				behavior: 'smooth'
			});
		}
	};

	onMount(() => {
		document.addEventListener('keydown', keybinds);
		focusCurrent();
	});
	onDestroy(() => document.removeEventListener('keydown', keybinds));
</script>

<div class="root screen snap-container" bind:this={container} on:scroll={onScroll}>
	{#if postPrevious}
		<FullscreenPreview post={postPrevious} offset={offsetPrevious} />
	{/if}
	<div
		class="screen snap-container horizontal current"
		bind:this={current}
		style:top={offsetCurrent}
	>
		<FullscreenMedia post={postCurrent} />
		<FullscreenDetails post={postCurrent} />
	</div>
	{#if postNext}
		<FullscreenPreview post={postNext} offset={offsetNext} />
	{/if}
	{#each { length: $results.posts.length } as _, i}
		<div class="pseudo snap-item" style:top="{i * 100}vh" />
	{/each}
	<IntersectionDetector
		rootMargin="{window.innerHeight * 2}px"
		on:intersection={() => dispatch('endreached')}
	/>
</div>

<style>
	.root {
		position: relative;
		overflow-y: scroll;
	}

	.screen {
		width: 100vw;
		height: 100vh;
		overflow: scroll;
		contain: strict;
	}

	.snap-container {
		scroll-snap-type: both mandatory;
	}

	.pseudo {
		width: 100vw;
		height: 100vh;
		contain: strict;
		position: absolute;
		user-select: none;
		pointer-events: none;
	}

	.snap-item {
		scroll-snap-align: start;
		scroll-snap-stop: always;
	}

	.current {
		position: absolute;
	}

	.horizontal {
		display: grid;
		grid-template-columns: 100vw 100vw;
	}

	.screen::-webkit-scrollbar {
		width: 0px;
		height: 0px;
	}

	.screen {
		scrollbar-width: none;
	}
</style>

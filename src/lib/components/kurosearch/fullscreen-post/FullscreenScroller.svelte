<script lang="ts">
	import IntersectionDetector from '$lib/components/pure/intersection-detector/IntersectionDetector.svelte';
	import results from '$lib/store/results-store';
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	import FullscreenDetails from './FullscreenDetails.svelte';
	import FullscreenMedia from './FullscreenMedia.svelte';
	import FullscreenPreview from './FullscreenPreview.svelte';
	import fullscreenHintDone from '$lib/store/fullscreen-hint-done-store';
	import autoplayFullscreenEnabled from '$lib/store/autoplay-fullscreen-enabled-store';
	import IconButton from '$lib/components/pure/button-icon/IconButton.svelte';

	const dispatch = createEventDispatcher();

	export let index: number;

	let container: HTMLDivElement;
	let current: HTMLDivElement;

	$: postCurrent = $results.posts[index];
	$: postPrevious = index > 0 ? $results.posts[index - 1] : undefined;
	$: postNext = index < $results.posts.length - 1 ? $results.posts[index + 1] : undefined;
	$: offsetCurrent = `${index * 100}vh`;
	$: offsetPrevious = `${(index - 1) * 100}vh`;
	$: offsetNext = `${(index + 1) * 100}vh`;

	const scrollToPrevious = () => {
		container.scrollTo({
			left: 0,
			top: container.clientHeight * (index - 1),
			behavior: 'smooth'
		});
	};

	const scrollToNext = () => {
		container.scrollTo({
			left: 0,
			top: container.clientHeight * (index + 1),
			behavior: 'smooth'
		});
	};

	const autoscroll = () => {
		if ($autoplayFullscreenEnabled) {
			scrollToNext();
		}
	};

	const onScroll = (event: Event) => {
		requestAnimationFrame(() => {
			const target = event.target as HTMLDivElement;
			const height = target.getBoundingClientRect().height;
			const newIndex = target.scrollTop / height;
			const roundedIndex = Math.round(newIndex);

			if (roundedIndex != index) {
				index = roundedIndex;
				if (current) {
					current.scrollLeft = 0;
				}
			}
		});
	};

	const keybinds = (event: KeyboardEvent) => {
		if (event.key === 'd') {
			event.preventDefault();
			event.stopPropagation();
			if (current.scrollLeft === 0) {
				current.scrollBy({ left: container.clientWidth, top: 0, behavior: 'smooth' });
			} else {
				current.scrollBy({ left: -container.clientWidth, top: 0, behavior: 'smooth' });
			}
		}
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
		if (current) {
			current.scrollIntoView(true);
			current.scrollLeft = 0;
		}
		document.addEventListener('keydown', keybinds);
	});
	onDestroy(() => {
		$fullscreenHintDone = true;
		document.removeEventListener('keydown', keybinds);
	});
</script>

<div class="root screen snap-container" bind:this={container} on:scroll={onScroll}>
	{#if postPrevious}
		<FullscreenPreview post={postPrevious} offset={offsetPrevious} />
	{/if}
	<div
		class="screen snap-container horizontal current"
		class:hint={!$fullscreenHintDone}
		bind:this={current}
		style:top={offsetCurrent}
	>
		<FullscreenMedia post={postCurrent} on:ended={autoscroll} />
		<FullscreenDetails post={postCurrent} />
		<IconButton
			class="details-button"
			on:click={() => current.scrollBy({ left: container.clientWidth, top: 0, behavior: 'smooth' })}
		>
			<i class="codicon codicon-tag" />
		</IconButton>
	</div>
	{#if postNext}
		<FullscreenPreview post={postNext} offset={offsetNext} />
	{/if}
	{#each { length: $results.posts.length } as _, i}
		<div class="pseudo snap-item" style:top="{i * 100}vh" />
	{/each}
	<IntersectionDetector
		absoluteTop="{$results.posts.length * 100}vh"
		rootMargin="{window.innerHeight * 3}px"
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

	:global(.details-button) {
		position: absolute;
		bottom: var(--grid-gap);
		right: var(--grid-gap);
	}

	:global(.hint > *) {
		animation: scroll-hint 1s ease-in-out;
		animation-delay: 0.5s;
	}
</style>

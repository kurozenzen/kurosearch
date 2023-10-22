<script lang="ts">
	import IntersectionDetector from '$lib/components/pure/intersection-detector/IntersectionDetector.svelte';
	import results from '$lib/store/results-store';
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	import Details from '../details/Details.svelte';
	import FullscreenMedia from './FullscreenMedia.svelte';
	import FullscreenPreview from './FullscreenPreview.svelte';

	export let index: number;

	let container: HTMLDivElement;
	let current: HTMLDivElement;

	$: currentPost = $results.posts[index];
	$: previousPost = index > 0 ? $results.posts[index - 1] : undefined;
	$: nextPost = index < $results.posts.length - 1 ? $results.posts[index + 1] : undefined;

	const dispatch = createEventDispatcher();

	const focusCurrent = () => {
		if (current) {
			current.scrollIntoView();
			current.scrollLeft = 0;
		}
	};

	const onScroll = (event: UIEvent) => {
		let target = event.target as HTMLDivElement;
		let height = target.getBoundingClientRect().height;
		let newIndex = target.scrollTop / height;
		let roundedIndex = Math.round(newIndex);
		if (Math.abs(newIndex - roundedIndex) < 0.001 && roundedIndex != index) {
			console.log('INDEX: ' + roundedIndex);
			index = roundedIndex;
			focusCurrent();
		}
	};

	const keybinds = (event: KeyboardEvent) => {
		if (event.key === 'd') {
			event.preventDefault();
			event.stopPropagation();
			if (current.scrollLeft == 0) {
				console.log('details');
				current.scrollBy({ left: container.clientWidth, top: 0, behavior: 'smooth' });
			} else {
				console.log('back');
				current.scrollBy({ left: -container.clientWidth, top: 0, behavior: 'smooth' });
			}
		}
		if (event.key === 'ArrowUp') {
			event.preventDefault();
			event.stopPropagation();
			container.scrollBy({ left: 0, top: -container.clientHeight, behavior: 'smooth' });
		}
		if (event.key === 'ArrowDown') {
			event.preventDefault();
			event.stopPropagation();
			container.scrollBy({ left: 0, top: container.clientHeight, behavior: 'smooth' });
		}
	};

	onMount(() => {
		document.addEventListener('keydown', keybinds);
		current.scrollIntoView();
	});
	onDestroy(() => document.removeEventListener('keydown', keybinds));
</script>

<div class="root screen snap-container" bind:this={container} on:scroll={onScroll}>
	<div style="height:{Math.max(0, index - 1) * 100}vh" />
	{#if previousPost}
		<FullscreenPreview post={previousPost} />
	{/if}
	<div
		class="screen snap-item snap-container horizontal"
		bind:this={current}
		id={currentPost.id.toString()}
	>
		<div class="screen snap-item">
			<FullscreenMedia post={currentPost} />
		</div>
		<div class="screen snap-item">
			<Details post={currentPost} />
		</div>
	</div>
	{#if nextPost}
		<FullscreenPreview post={nextPost} />
	{/if}
	<div style="height:{($results.posts.length - index - 1) * 100}vh" />
	<IntersectionDetector
		rootMargin="{window.innerHeight * 2}px"
		on:intersection={() => dispatch('endreached')}
	/>
</div>

<style>
	.screen {
		width: 100vw;
		height: 100vh;
		overflow: scroll;
	}

	.snap-container {
		scroll-snap-type: both mandatory;
	}

	.snap-item {
		scroll-snap-align: start;
	}

	.horizontal {
		display: grid;
		grid-template-columns: 100vw 100vw;
	}

	::-webkit-scrollbar {
		width: 0px;
		height: 0px;
	}
</style>

<script lang="ts">
	// Header
	// Body
	import { browser } from '$app/environment';
	import NumberInput from '$lib/components/kurosearch/dialog-sort-filter/NumberInput.svelte';
	import SearchError from '$lib/components/kurosearch/error-search/SearchError.svelte';
	import HeaderDesktop from '$lib/components/kurosearch/header-desktop/HeaderDesktop.svelte';
	import PageJump from '$lib/components/kurosearch/page-navigation/PageJump.svelte';
	import PageNavigation from '$lib/components/kurosearch/page-navigation/PageNavigation.svelte';
	import PostDesktop from '$lib/components/kurosearch/post-desktop/PostDesktop.svelte';
	import NoMoreResults from '$lib/components/kurosearch/results/NoMoreResults.svelte';
	import ZeroResults from '$lib/components/kurosearch/results/ZeroResults.svelte';
	import {
		LABELS_RATING,
		LABELS_SCORE_COMPARATOR,
		LABELS_SORT_DIRECTION,
		LABELS_SORT_PROPERTY
	} from '$lib/components/kurosearch/sort-filter-config/sortfilter';
	import ScrollUpButton from '$lib/components/pure/button-scroll-up/ScrollUpButton.svelte';
	import IntersectionDetector from '$lib/components/pure/intersection-detector/IntersectionDetector.svelte';
	import LoadingAnimation from '$lib/components/pure/loading-animation/LoadingAnimation.svelte';
	import RadioGroup from '$lib/components/pure/radio-group/RadioGroup.svelte';
	import RotatingIconSelect from '$lib/components/pure/rotating-select/RotatingIconSelect.svelte';
	import RotatingTextSelect from '$lib/components/pure/rotating-select/RotatingTextSelect.svelte';
	import Select from '$lib/components/pure/select/Select.svelte';
	import TextButton from '$lib/components/pure/text-button/TextButton.svelte';
	import { clamp } from '$lib/logic/math';
	import { getFirstPage, getNextPage, getPage } from '$lib/logic/search';
	import { SKIP_TIME, videoStore } from '$lib/store/active-video-store';
	import filter from '$lib/store/filter-store';
	import pageNavigationEnabled from '$lib/store/page-navigation-enabled-store';
	import resultColumns from '$lib/store/result-columns-store';
	import results from '$lib/store/results-store';
	import sort from '$lib/store/sort-store';
	import { onDestroy, onMount } from 'svelte';
	import ResultWrapper from '../result-wrapper/ResultWrapper.svelte';

	console.log(
		'%ckurosearch\n%cHi, if you are reading this because you are debugging or reverse-engineering, feel free to send me a DM on Discord :)',
		'color:crimson;font-size:32px;',
		'color:unset;font-size:auto;'
	);

	let nextFocus = $state(0);

	let inputOpen = $state(false);

	const keybinds = (event: KeyboardEvent) => {
		if (
			document.activeElement?.tagName === 'INPUT' ||
			document.activeElement?.tagName === 'TEXTAREA'
		) {
			return;
		}

		if ((event.ctrlKey && event.key === 'ArrowDown') || event.key === 'o') {
			const posts = document.getElementsByClassName('post-media');

			nextFocus = clamp(nextFocus + 1, 0, posts.length - 1);
			posts[nextFocus].scrollIntoView();
			// @ts-expect-error - they will be focusable
			posts[nextFocus]?.focus?.();
			setTimeout(() => {
				let video = posts[nextFocus].querySelector('video');
				if (video) {
					video.focus();
					videoStore.target(video);
				}
			}, 1);
		}

		if ((event.ctrlKey && event.key === 'ArrowUp') || event.key === 'u') {
			const posts = document.getElementsByClassName('post-media');
			nextFocus = clamp(nextFocus - 1, 0, posts.length - 1);
			posts[nextFocus].scrollIntoView();
			// @ts-expect-error - they will be focusable
			posts[nextFocus]?.focus?.();
			setTimeout(() => {
				let video = posts[nextFocus].querySelector('video');
				if (video) {
					video.focus();
					videoStore.target(video);
				}
			}, 1);
		}

		switch ((event as KeyboardEvent).key) {
			case ' ':
			case 'k':
				if (videoStore.toggle()) {
					event.preventDefault();
					event.stopPropagation();
				}
				break;

			case 'ArrowLeft':
			case 'j':
				if (videoStore.skip(-SKIP_TIME)) {
					event.preventDefault();
					event.stopPropagation();
				}
				break;

			case 'ArrowRight':
			case 'l':
				if (videoStore.skip(SKIP_TIME)) {
					event.preventDefault();
					event.stopPropagation();
				}
				break;
		}
	};

	onMount(async () => {
		if (browser) {
			document.addEventListener('keydown', keybinds);
			if ($results.postCount === 0) {
				getFirstPage();
			}
		}
	});

	onDestroy(() => {
		if (browser) {
			document.removeEventListener('keydown', keybinds);
		}
	});

	const toggleOpen = () => {
		inputOpen = !inputOpen;
	};
</script>

<svelte:head>
	<title>kurosearch - Rule34 Hentai</title>
	<meta name="description" content="Desktop version for a better experience." />
</svelte:head>

<HeaderDesktop />

<section class="search-input">
	<button
		type="button"
		class="codicon codicon-chevron-right"
		class:open={inputOpen}
		onclick={toggleOpen}
		aria-label="Close"
	>
	</button>
	<div>
		<b>Sorting</b>
		<div class="row">
			<RotatingIconSelect bind:value={$sort.direction} options={LABELS_SORT_DIRECTION} />
			<Select bind:value={$sort.property} options={LABELS_SORT_PROPERTY} />
		</div>
	</div>

	<div>
		<b>Filtering by Score</b>
		<div class="row">
			<RotatingTextSelect bind:value={$filter.scoreComparator} options={LABELS_SCORE_COMPARATOR} />
			<NumberInput bind:value={$filter.scoreValue} min={0} max={10000} step={1} />
		</div>
	</div>

	<div>
		<b>Rating</b>
		<RadioGroup name="rating" options={LABELS_RATING} bind:value={$filter.rating} />
	</div>

	<TextButton
		title="Reset sort and filter"
		type="secondary"
		onclick={() => {
			sort.reset();
			filter.reset();
		}}
	>
		Reset
	</TextButton>
	{#if $pageNavigationEnabled}
		<PageJump onpagechange={getPage} />
	{/if}
</section>

<section class="search-output">
	<ResultWrapper>
		<ol class="multi-column" style="--nr-columns: {$resultColumns}; ">
			{#each $results.posts as post (post.id)}
				<PostDesktop {post} onclick={() => {}} />
			{/each}
		</ol>
	</ResultWrapper>
</section>

{#if $results.loading}
	<div class="loading-panel"></div>
{/if}

<style>
	.search-input {
		grid-area: sidebar;
		align-self: start;
		display: flex;
		flex-direction: column;
		gap: var(--grid-gap);
		max-width: 100px;
		transition: max-width var(--default-transition-behaviour);
	}

	.search-input.open {
		max-width: 100vw;
	}

	.search-output {
		grid-area: main;
		flex-grow: 1;
		overflow-y: scroll;
		height: 100%;
		/* contain: strict; */
	}

	ol {
		display: grid;
		gap: var(--grid-gap);
		grid-template-columns: repeat(3, minmax(0, 1fr));
		grid-auto-rows: 10vw;
		border-radius: var(--border-radius);
		margin-bottom: var(--grid-gap);
	}
</style>

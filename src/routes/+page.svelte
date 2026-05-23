<script lang="ts">
	import { browser } from '$app/environment';
	import SearchError from '$lib/components/kurosearch/error-search/SearchError.svelte';
	import NoMoreResults from '$lib/components/kurosearch/results/NoMoreResults.svelte';
	import ResultHeader from '$lib/components/kurosearch/results/ResultHeader.svelte';
	import Results from '$lib/components/kurosearch/results/Results.svelte';
	import ZeroResults from '$lib/components/kurosearch/results/ZeroResults.svelte';
	import ScrollUpButton from '$lib/components/pure/button-scroll-up/ScrollUpButton.svelte';
	import IntersectionDetector from '$lib/components/pure/intersection-detector/IntersectionDetector.svelte';
	import LoadingAnimation from '$lib/components/pure/loading-animation/LoadingAnimation.svelte';
	import TextButton from '$lib/components/pure/text-button/TextButton.svelte';
	import { logSearch } from '$lib/logic/firebase/analytics';
	import { SearchBuilder } from '$lib/logic/search-builder';
	import activeSupertags from '$lib/store/active-supertags-store';
	import activeTags from '$lib/store/active-tags-store';
	import blockedContent from '$lib/store/blocked-content-store';
	import filter from '$lib/store/filter-store';
	import resultColumns from '$lib/store/result-columns-store';
	import results from '$lib/store/results-store';
	import sort from '$lib/store/sort-store';
	import { onDestroy, onMount } from 'svelte';
	import SearchForm from './SearchForm.svelte';
	import apiKey from '$lib/store/api-key-store';
	import userId from '$lib/store/user-id-store';
	import pageNavigationEnabled from '$lib/store/page-navigation-enabled-store';
	import PageNavigation from '$lib/components/kurosearch/page-navigation/PageNavigation.svelte';
	import PageJump from '$lib/components/kurosearch/page-navigation/PageJump.svelte';
	import LynxMain from './LynxMain.svelte';
	import {
		SkipDirection,
		skipVideo,
		targetVideo,
		toggleVideo
	} from '$lib/store/active-video.svelte';
	import { clamp } from '$lib/logic/math';
	import { switchApiUrl } from '$lib/logic/api-client/url';

	const SKIP_SECONDS = 5;

	console.log(
		'%ckurosearch\n%cHi, if you are reading this because you are debugging or reverse-engineering, feel free to send me a DM on Discord :)',
		'color:crimson;font-size:32px;',
		'color:unset;font-size:auto;'
	);

	let loading = $state(false);
	let error: Error | undefined = $state(undefined);
	let nextFocus = $state(0);

	const createDefaultSearch = () =>
		new SearchBuilder()
			.withApiKey($apiKey)
			.withUserId($userId)
			.withPid($results.pageCount)
			.withTags($activeTags)
			.withBlockedContent($blockedContent)
			.withSortProperty($sort.property)
			.withSortDirection($sort.direction)
			.withScoreValue($filter.scoreValue)
			.withScoreComparator($filter.scoreComparator)
			.withRating($filter.rating)
			.withSupertags($activeSupertags);

	const executeSearch = async (operation: () => Promise<void>) => {
		if (loading) {
			return;
		}

		error = undefined;
		loading = true;

		try {
			const pid = $results.pageCount;
			await operation();
			logSearch(pid).catch(() => {});
		} catch (e) {
			switchApiUrl();
			try {
				const pid = $results.pageCount;
				await operation();
				logSearch(pid).catch(() => {});
			} catch {
				error = e as Error;
				console.warn(e);
			}
		} finally {
			loading = false;
		}
	};

	const getFirstPage = async () => {
		results.reset();
		nextFocus = 0;

		executeSearch(async () => {
			const [page, count] = await createDefaultSearch().getPageAndCount();
			results.addPage(page, count);
		});
	};

	const getPage = async (pid: number) => {
		results.resetPosts();
		nextFocus = 0;

		executeSearch(async () => {
			const page = await createDefaultSearch().withPid(pid).getPage();
			results.setPage(page, pid);
		});
	};

	const getNextPage = async () => {
		executeSearch(async () => {
			const page = await createDefaultSearch().getPage();
			results.addPage(page);
		});
	};

	const keybinds = (event: KeyboardEvent) => {
		if (
			document.activeElement?.tagName === 'INPUT' ||
			document.activeElement?.tagName === 'TEXTAREA'
		) {
			return; // don't interfere with typing
		}

		if ((event.ctrlKey && event.key === 'ArrowDown') || event.key === 'o') {
			const posts = document.getElementsByClassName('post-media');

			console.log(nextFocus + 1, 0, posts.length, ' =>', clamp(nextFocus + 1, 0, posts.length - 1));

			nextFocus = clamp(nextFocus + 1, 0, posts.length - 1);
			posts[nextFocus].scrollIntoView();
			// @ts-expect-error - they will be focusable
			posts[nextFocus]?.focus?.();
			setTimeout(() => {
				let video = posts[nextFocus].querySelector('video');
				if (video) {
					video.focus();
					targetVideo(video);
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
					targetVideo(video);
				}
			}, 1);
		}

		switch ((event as KeyboardEvent).key) {
			case ' ':
			case 'k':
				if (toggleVideo()) {
					event.preventDefault();
					event.stopPropagation();
				}
				break;

			case 'ArrowLeft':
			case 'j':
				if (skipVideo(undefined, SkipDirection.Backward)) {
					event.preventDefault();
					event.stopPropagation();
				}
				break;

			case 'ArrowRight':
			case 'l':
				if (skipVideo(undefined, SkipDirection.Forward)) {
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
</script>

<svelte:head>
	<title>kurosearch - Rule34 Hentai</title>
	<meta
		name="description"
		content="Simple and powerful Rule34/Hentai browsing site with a focus on simplicity and user experience. Supports excluding tags, sorting and filtering."
	/>
</svelte:head>

<LynxMain />

<SearchForm {loading} onsubmit={getFirstPage} />

{#if $pageNavigationEnabled}
	<PageJump onpagechange={getPage} />
{/if}

<ResultHeader {loading} onsortfilterupdate={getFirstPage} />

{#if error}
	<SearchError {error} />
{:else if $results.requested}
	<section>
		{#if $results.postCount === 0}
			<ZeroResults onsortfilterupdate={getFirstPage} />
		{:else}
			<Results onsortfilterupdate={getFirstPage} onendreached={getNextPage} />
			{#if $results.posts.length === $results.postCount}
				<NoMoreResults />
			{:else if $pageNavigationEnabled}
				<PageNavigation
					onpagechange={(pid) => {
						getPage(pid);
						document.getElementById('result-header')?.scrollIntoView();
					}}
				/>
			{:else}
				<IntersectionDetector
					absoluteTop={undefined}
					rootMargin="{1000 / Number($resultColumns)}px"
					onintersection={getNextPage}
				/>
				<TextButton title="Load more posts" onclick={getNextPage}>
					{#if loading}
						<LoadingAnimation />
					{:else}
						Load more
					{/if}
				</TextButton>
			{/if}
		{/if}
	</section>
	<ScrollUpButton />
{/if}

{#if loading}
	<div></div>
{/if}

<style>
	:global(main) {
		display: flex;
		flex-direction: column;
		gap: var(--grid-gap);
	}

	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--grid-gap);
	}

	@keyframes sweep {
		0% {
			background: var(--background-1);
		}
		50% {
			background: var(--background-2);
		}
		100% {
			background: var(--background-1);
		}
	}

	div {
		contain: strict;
		height: 100vh;
		border-radius: var(--border-radius-large);
		animation: sweep ease-in-out 3s infinite;
	}
</style>

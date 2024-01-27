<script lang="ts">
	import { browser } from '$app/environment';
	import CreateSupertagDialog from '$lib/components/kurosearch/dialog-create-supertag/CreateSupertagDialog.svelte';
	import SearchError from '$lib/components/kurosearch/error-search/SearchError.svelte';
	import KurosearchTitle from '$lib/components/kurosearch/kurosearch-title/KurosearchTitle.svelte';
	import NoMoreResults from '$lib/components/kurosearch/results/NoMoreResults.svelte';
	import Results from '$lib/components/kurosearch/results/Results.svelte';
	import ZeroResults from '$lib/components/kurosearch/results/ZeroResults.svelte';
	import Searchbar from '$lib/components/kurosearch/searchbar/Searchbar.svelte';
	import ActiveTagList from '$lib/components/kurosearch/tag-list/ActiveTagList.svelte';
	import ScrollUpButton from '$lib/components/pure/button-scroll-up/ScrollUpButton.svelte';
	import IntersectionDetector from '$lib/components/pure/intersection-detector/IntersectionDetector.svelte';
	import TextButton from '$lib/components/pure/text-button/TextButton.svelte';
	import { getTagSuggestions } from '$lib/logic/api-client/ApiClient';
	import { getTagDetails } from '$lib/logic/api-client/tags/tags';
	import { logSearch } from '$lib/logic/firebase/analytics';
	import { nextModifier } from '$lib/logic/modifier-utils';
	import { SearchBuilder } from '$lib/logic/search-builder';
	import activeSupertags from '$lib/store/active-supertags-store';
	import activeTags from '$lib/store/active-tags-store';
	import blockedContent from '$lib/store/blocked-content-store';
	import filter from '$lib/store/filter-store';
	import results from '$lib/store/results-store';
	import sort from '$lib/store/sort-store';
	import supertags from '$lib/store/supertags-store';
	import { onDestroy, onMount } from 'svelte';
	import resultColumns from '$lib/store/result-columns-store';
	import LoadingAnimation from '$lib/components/pure/loading-animation/LoadingAnimation.svelte';
	import cookiesAccepted from '$lib/store/cookies-accepted-store';
	import CookieMessage from '$lib/components/kurosearch/cookie-message/CookieMessage.svelte';

	let loading = false;
	let error: Error | undefined;
	let createSupertagDialog: HTMLDialogElement;
	let nextFocus = 0;

	const fetchSuggestions = async (term: string) => {
		const matchingTags = await getTagSuggestions(term);
		const matchingSupertags = $supertags.items
			.filter(({ name }) => name.toLowerCase().includes(term.toLowerCase()))
			.map((supertag) => ({
				label: supertag.name,
				count: supertag.tags.length,
				type: 'supertag' as kurosearch.TagType
			}));

		return [...matchingSupertags, ...matchingTags];
	};

	const createDefaultSearch = () =>
		new SearchBuilder()
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
			error = e as Error;
			console.warn(e);
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

	const getNextPage = async () => {
		executeSearch(async () => {
			const page = await createDefaultSearch().getPage();
			results.addPage(page);
		});
	};

	const focusSearchBarHotkey = (event: KeyboardEvent) => {
		if (
			(event.key === '/' || event.key === 's') &&
			(!document.activeElement || document.activeElement === document.body)
		) {
			document.getElementById('searchbar')?.focus();
			event.preventDefault();
			event.stopPropagation();
		}

		if (event.ctrlKey && event.key === 'Enter') {
			event.preventDefault();
			event.stopPropagation();
			getFirstPage();
		}

		if (event.ctrlKey && event.key === 'm') {
			document.getElementById('select-modifier')?.click();
		}

		if (event.ctrlKey && event.key === 'ArrowDown') {
			const posts = document.getElementsByClassName('post-media');
			// @ts-expect-error - they will be focusable
			posts[nextFocus].focus();
			nextFocus = Math.min(nextFocus + 1, Math.max(0, posts.length - 1));
		}

		if (event.ctrlKey && event.key === 'ArrowUp') {
			const posts = document.getElementsByClassName('post-media');
			// @ts-expect-error - they will be focusable
			posts[nextFocus].focus();
			nextFocus = Math.max(nextFocus - 1, 0);
		}
	};

	onMount(async () => {
		if (browser) {
			document.addEventListener('keydown', focusSearchBarHotkey);
			if ($results.postCount === 0) {
				getFirstPage();
			}
		}
	});

	onDestroy(() => {
		if (browser) {
			document.removeEventListener('keydown', focusSearchBarHotkey);
		}
	});
</script>

<section id="search">
	<KurosearchTitle />
	<Searchbar
		placeholder="Search for tags"
		{fetchSuggestions}
		on:pick={async (e) => {
			const suggestion = e.detail;
			if (suggestion.type === 'supertag') {
				const supertag = $supertags.items.find((x) => x.name === suggestion.label);
				if (!supertag) {
					console.warn('Supertag not present.');
					return;
				}
				activeSupertags.addOrReplace(supertag);
			} else {
				const tag = await getTagDetails(e.detail.label);
				activeTags.addOrReplace({
					name: e.detail.label,
					modifier: e.detail.modifier,
					count: e.detail.count,
					type: tag?.type ?? 'tag'
				});
			}
		}}
	/>
	<TextButton title="Search with the tags above" on:click={getFirstPage}>
		{#if loading}
			<LoadingAnimation />
		{:else}
			Search
		{/if}
	</TextButton>
	<ActiveTagList
		tags={[...$activeTags, ...$activeSupertags]}
		on:click={(e) =>
			'description' in e.detail
				? activeSupertags.removeByName(e.detail.name)
				: activeTags.removeByName(e.detail.name)}
		on:contextmenu={(e) => {
			if (!('description' in e.detail)) {
				e.detail.modifier = nextModifier(e.detail.modifier);
				activeTags.addOrReplace(e.detail);
			}
		}}
		on:createSupertag={() => createSupertagDialog.showModal()}
	/>
</section>

{#if error}
	<SearchError {error} />
{:else if $results.requested}
	<section>
		{#if $results.postCount === 0}
			<ZeroResults on:sortfilterupdate={getFirstPage} />
		{:else}
			<Results on:sortfilterupdate={getFirstPage} on:endreached={getNextPage} />
			{#if $results.posts.length === $results.postCount}
				<NoMoreResults />
			{:else}
				<IntersectionDetector
					absoluteTop={undefined}
					rootMargin="{1000 / Number($resultColumns)}px"
					on:intersection={getNextPage}
				/>
			{/if}
		{/if}
	</section>
	<ScrollUpButton />
{/if}

<CreateSupertagDialog
	bind:dialog={createSupertagDialog}
	tags={$activeTags}
	on:submit={(e) => supertags.add(e.detail)}
/>

{#if !$cookiesAccepted}
	<CookieMessage />
{/if}

<style>
	:global(main) {
		display: flex;
		flex-direction: column;
		gap: var(--grid-gap);
	}

	#search {
		margin-block-start: 20vh;
		padding-inline: var(--small-gap);
	}

	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--grid-gap);
	}
</style>

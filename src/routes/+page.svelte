<script context="module" lang="ts">
	import { browser } from '$app/environment';

	const getTags = () => {
		if (!browser) {
			return undefined;
		}

		const url = new URL(location.href);

		if (!url.searchParams.has('tags')) {
			return undefined;
		}

		const tagString = url.searchParams.get('tags') ?? '';
		const tags = tagString.split(';');
		if (!Array.isArray(tags) || tags.length === 0) {
			return undefined;
		}

		return tags;
	};
</script>

<script lang="ts">
	import KurosearchTitle from '$lib/components/kurosearch/kurosearch-title/KurosearchTitle.svelte';
	import Searchbar from '$lib/components/kurosearch/searchbar/Searchbar.svelte';
	import ActiveTagList from '$lib/components/kurosearch/tag-list/ActiveTagList.svelte';
	import TextButton from '$lib/components/pure/text-button/TextButton.svelte';
	import { getTagSuggestions } from '$lib/logic/api-client/ApiClient';
	import results from '$lib/store/results-store';
	import activeTags from '$lib/store/active-tags-store';
	import { getTagDetails } from '$lib/logic/api-client/tags/tags';
	import ZeroResults from '$lib/components/kurosearch/results/ZeroResults.svelte';
	import Results from '$lib/components/kurosearch/results/Results.svelte';
	import IntersectionDetector from '$lib/components/pure/intersection-detector/IntersectionDetector.svelte';
	import NoMoreResults from '$lib/components/kurosearch/results/NoMoreResults.svelte';
	import sortFilter from '$lib/store/sort-filter-store';
	import blockedContent from '$lib/store/blocked-content-store';
	import { nextModifier } from '$lib/logic/modifier-utils';
	import CreateSupertagDialog from '$lib/components/kurosearch/dialog-create-supertag/CreateSupertagDialog.svelte';
	import supertags from '$lib/store/supertags-store';
	import activeSupertags from '$lib/store/active-supertags-store';
	import SearchError from '$lib/components/kurosearch/error-search/SearchError.svelte';
	import { onDestroy, onMount } from 'svelte';
	import ScrollUpButton from '$lib/components/pure/button-scroll-up/ScrollUpButton.svelte';
	import { SearchBuilder } from '$lib/logic/search-builder';
	import { logSearch } from '$lib/logic/firebase/analytics';

	let loading = false;
	let error: Error | undefined;
	let creatingSupertag = false;
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

	const tags = getTags();
	if (tags) {
		tags.forEach((tag) => {
			if ($activeTags.some((activeTag) => activeTag.name === tag)) {
				return;
			}
			activeTags.addByName(tag);
		});
	}

	const createDefaultSearch = () =>
		new SearchBuilder()
			.withPid($results.pageCount)
			.withTags($activeTags)
			.withBlockedContent($blockedContent)
			.withSortProperty($sortFilter.sortProperty)
			.withSortDirection($sortFilter.sortDirection)
			.withScoreValue($sortFilter.scoreValue)
			.withScoreComparator($sortFilter.scoreComparator)
			.withRating($sortFilter.rating)
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
			console.log(page, count);
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
		console.log(event);
		if (event.key === '/' || event.key === 's') {
			document.getElementById('searchbar')?.focus();
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
	onMount(() => {
		if (browser) {
			document.addEventListener('keydown', focusSearchBarHotkey);
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
					console.log('Supertag not present.');
					return;
				}
				activeSupertags.addOrReplace(supertag);
			} else {
				const tag = await getTagDetails(e.detail.label);
				activeTags.addOrReplace({
					name: e.detail.label,
					modifier: e.detail.modifier,
					count: e.detail.count,
					type: tag.type
				});
			}
		}}
	/>
	<TextButton title="Search with the tags above" on:click={getFirstPage}>Search</TextButton>
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
		on:createSupertag={() => (creatingSupertag = true)}
	/>
</section>

{#if error}
	<SearchError {error} />
{:else if $results.requested}
	<section>
		{#if $results.postCount === 0}
			<ZeroResults on:sortfilterupdate={getFirstPage} />
		{:else}
			<Results on:sortfilterupdate={getFirstPage} />
			{#if $results.posts.length === $results.postCount}
				<NoMoreResults />
			{:else}
				<IntersectionDetector rootMargin="1000px" on:intersection={getNextPage} />
			{/if}
		{/if}
	</section>
	<ScrollUpButton />
{/if}

{#if creatingSupertag}
	<CreateSupertagDialog
		tags={$activeTags}
		on:close={() => (creatingSupertag = false)}
		on:submit={(e) => supertags.add(e.detail)}
	/>
{/if}

<style>
	:global(main) {
		display: flex;
		flex-direction: column;
		gap: var(--grid-gap);
	}

	#search {
		margin-block: 20vh;
		padding-inline: 0.5rem;
	}

	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--grid-gap);
	}
</style>

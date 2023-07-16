<script lang="ts">
	import KurosearchTitle from '$lib/components/kurosearch/kurosearch-title/KurosearchTitle.svelte';
	import Searchbar from '$lib/components/kurosearch/searchbar/Searchbar.svelte';
	import ActiveTagList from '$lib/components/kurosearch/tag-list/ActiveTagList.svelte';
	import TextButton from '$lib/components/pure/text-button/TextButton.svelte';
	import { getTagSuggestions } from '$lib/logic/api-client/ApiClient';
	import { createSearch } from '$lib/logic/searchBuilder';
	import results from '$lib/store/results-store';
	import activeTags from '$lib/store/active-tags-store';
	import { getTagDetails } from '$lib/logic/api-client/tags/tags';
	import ZeroResults from '$lib/components/kurosearch/results/ZeroResults.svelte';
	import Results from '$lib/components/kurosearch/results/Results.svelte';
	import IntersectionDetector from '$lib/components/pure/intersection-detector/IntersectionDetector.svelte';
	import NoMoreResults from '$lib/components/kurosearch/results/NoMoreResults.svelte';

	let loading = false;
	let error: unknown | undefined;

	const createDefaultSearch = () =>
		createSearch().withPid($results.pageCount).withTags($activeTags);
	// .withSupertags($userdata.supertags)
	// .withSortProperty($sortStore.sortProperty)
	// .withSortDirection($sortStore.sortDirection)
	// .withScoreValue($sortStore.scoreValue)
	// .withScoreComparator($sortStore.scoreComparator)
	// .withBlockedContent($blockedContent)

	const executeSearch = async (operation: () => Promise<void>) => {
		if (loading) {
			return;
		}

		error = undefined;
		loading = true;

		try {
			await operation();
		} catch (e) {
			error = e;
			console.warn(e);
		} finally {
			loading = false;
		}
	};

	const getFirstPage = async () => {
		results.reset();

		executeSearch(async () => {
			const [page, count] = await createDefaultSearch().getPageAndCount();
			console.log(page, count);
			results.addPage(page, count);
		});
	};

	const getNextPage = async () => {
		executeSearch(async () => {
			const page = await createDefaultSearch().getPage();
			console.log(page);
			results.addPage(page);
		});
	};
</script>

<section id="search">
	<KurosearchTitle />
	<Searchbar
		fetchSuggestions={getTagSuggestions}
		on:pick={async (e) => {
			const tag = await getTagDetails(e.detail.label);
			activeTags.addOrReplace({
				name: e.detail.label,
				modifier: e.detail.modifier,
				count: e.detail.count,
				type: tag.type
			});
		}}
	/>
	<ActiveTagList
		tags={$activeTags}
		on:click={(e) => activeTags.removeByName(e.detail.name)}
		on:contextmenu={console.log}
		on:createSupertag={console.log}
	/>
	<TextButton title="Search with the tags above" on:click={getFirstPage}>Search</TextButton>
</section>

{#if error}
	<span>{error}</span>
{:else if $results.requested}
	<section>
		{#if $results.postCount === 0}
			<ZeroResults />
		{:else}
			<Results />
			{#if $results.posts.length === $results.postCount}
				<NoMoreResults />
			{:else}
				<IntersectionDetector rootMargin="0px" on:intersection={getNextPage} />
			{/if}
		{/if}
	</section>
{/if}

<!-- <SupertagCreateDialog /> -->

<style>
	:global(main) {
		display: flex;
		flex-direction: column;
		gap: var(--grid-gap);
	}

	#search {
		margin-block: 20vh;
	}

	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--grid-gap);
	}
</style>

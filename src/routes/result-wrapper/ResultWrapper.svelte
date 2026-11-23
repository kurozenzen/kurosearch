<script lang="ts">
	import SearchError from '#lib/components/kurosearch/error-search/SearchError.svelte';
	import PageNavigation from '#lib/components/kurosearch/page-navigation/PageNavigation.svelte';
	import NoMoreResults from '#lib/components/kurosearch/results/NoMoreResults.svelte';
	import ZeroResults from '#lib/components/kurosearch/results/ZeroResults.svelte';
	import IntersectionDetector from '#lib/components/pure/intersection-detector/IntersectionDetector.svelte';
	import TextButton from '#lib/components/pure/button-text/TextButton.svelte';
	import { getFirstPage, getNextPage, jumpToPage } from '#lib/logic/search.svelte';
	import { pageNavigationEnabled, resultColumns, results } from '#lib/store';
	import { onMount, type Snippet } from 'svelte';
	import Loading from '#lib/components/kurosearch/loading/Loading.svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();


	onMount(() => {
		if (!results.value.hasPage) {
			getFirstPage();
		}
	});
</script>

{#if results.value.error}
	<SearchError error={results.value.error} />
{:else if results.value.hasPage}
	{#if results.value.postCount === 0 && !results.value.loading}
		<ZeroResults onsortfilterupdate={getFirstPage} />
	{:else}
		{@render children()}
		{#if results.value.hasLastPage}
			<NoMoreResults />
		{:else if pageNavigationEnabled.value}
			<PageNavigation onpagechange={jumpToPage} />
		{:else}
			<IntersectionDetector
				absoluteTop={undefined}
				rootMargin="{1000 / resultColumns.value}px"
				onintersection={getNextPage}
			/>
			<TextButton title="Load more posts" class="mixin-accent" onclick={getNextPage}>
				<Loading loading={results.value.loading}>Load more</Loading>
			</TextButton>
		{/if}
	{/if}
{/if}

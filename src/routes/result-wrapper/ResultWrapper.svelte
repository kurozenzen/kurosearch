<script lang="ts">
	import SearchError from '$lib/components/kurosearch/error-search/SearchError.svelte';
	import PageNavigation from '$lib/components/kurosearch/page-navigation/PageNavigation.svelte';
	import NoMoreResults from '$lib/components/kurosearch/results/NoMoreResults.svelte';
	import ZeroResults from '$lib/components/kurosearch/results/ZeroResults.svelte';
	import IntersectionDetector from '$lib/components/pure/intersection-detector/IntersectionDetector.svelte';
	import LoadingAnimation from '$lib/components/pure/loading-animation/LoadingAnimation.svelte';
	import TextButton from '$lib/components/pure/text-button/TextButton.svelte';
	import { getFirstPage, getNextPage, getPage } from '$lib/logic/search';
	import pageNavigationEnabled from '$lib/store/page-navigation-enabled-store';
	import resultColumns from '$lib/store/result-columns-store';
	import results from '$lib/store/results-store';
	import { onMount, type Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();

	const onpagejump = async (pid: number) => {
		await getPage(pid);
		document.getElementById('result-header')?.scrollIntoView();
	};

	onMount(() => {
		if (!$results.hasPage) {
			getFirstPage();
		}
	});
</script>

{#if $results.error}
	<SearchError error={$results.error} />
{:else if $results.hasPage}
	{#if $results.postCount === 0 && !$results.loading}
		<ZeroResults onsortfilterupdate={getFirstPage} />
	{:else}
		{@render children()}
		{#if $results.hasLastPage}
			<NoMoreResults />
		{:else if $pageNavigationEnabled}
			<PageNavigation onpagechange={onpagejump} />
		{:else}
			<IntersectionDetector
				absoluteTop={undefined}
				rootMargin="{1000 / Number($resultColumns)}px"
				onintersection={getNextPage}
			/>
			<TextButton title="Load more posts" class="mixin-accent" onclick={getNextPage}>
				{#if $results.loading}
					<LoadingAnimation />
				{:else}
					Load more
				{/if}
			</TextButton>
		{/if}
	{/if}
{/if}

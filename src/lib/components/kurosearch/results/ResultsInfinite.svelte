<script>
	import TextButton from '$lib/components/pure/button-text/TextButton.svelte';
	import IntersectionDetector from '$lib/components/pure/intersection-detector/IntersectionDetector.svelte';
	import { getFirstPage, getNextPage } from '$lib/logic/search.svelte';
	import { resultColumns, results } from '$lib/store';
	import SearchError from '../error-search/SearchError.svelte';
	import Loading from '../loading/Loading.svelte';
	import NoMoreResults from './NoMoreResults.svelte';
	import PostList from './PostList.svelte';
	import ZeroResults from './ZeroResults.svelte';
</script>

{#if results.value.error}
	{#if results.value.error.name === 'not-found'}
		<ZeroResults onsortfilterupdate={getFirstPage} />
	{:else}
		<SearchError error={results.value.error} />
	{/if}
{:else}
	<PostList onendreached={getNextPage} />
	{#if results.value.loading}
		<div></div>
	{:else if results.value.hasLastPage}
		<NoMoreResults />
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

<style>
	div {
		contain: content;
		height: 100vh;
		border-radius: var(--border-radius-large);
		animation: sweep ease-in-out 3s infinite;
	}
</style>

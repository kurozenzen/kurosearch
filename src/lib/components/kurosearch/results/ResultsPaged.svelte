<script lang="ts">
	import { getFirstPage, getNextPage, jumpToPage } from '$lib/logic/search.svelte';
	import { results } from '$lib/store';
	import SearchError from '../error-search/SearchError.svelte';
	import PageNavigation from '../page-navigation/PageNavigation.svelte';
	import Results from './Results.svelte';
	import ZeroResults from './ZeroResults.svelte';
</script>

{#if results.value.loading}
	<div></div>
{:else if results.value.error}
	{#if results.value.error.name === 'not-found'}
		<ZeroResults onsortfilterupdate={getFirstPage} />
	{:else}
		<SearchError error={results.value.error} />
	{/if}
{:else}
	<Results onendreached={getNextPage} />
{/if}

<PageNavigation onpagechange={jumpToPage} />

<style>
	div {
		contain: strict;
		height: 100vh;
		border-radius: var(--border-radius-large);
		animation: sweep ease-in-out 3s infinite;
	}
</style>

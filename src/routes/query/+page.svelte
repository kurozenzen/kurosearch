<script lang="ts">
	import KurosearchTitle from '#lib/components/kurosearch/kurosearch-title/KurosearchTitle.svelte';
	import Searchbar from '#lib/components/kurosearch/searchbar/Searchbar.svelte';
	import ActiveTagList from '#lib/components/kurosearch/tag-list/ActiveTagList.svelte';
	import H3 from '#lib/components/pure/heading/H3.svelte';
	import { createDefaultSearch } from '#lib/logic/search.svelte';
	import { activateSuggestion, fetchCombinedSuggestions } from '#lib/logic/suggestions.svelte';

	const getQueryUrl = (url: string) => {
		try {
			return new URL(url);
		} catch {
			return null;
		}
	};

	let query = $derived(getQueryUrl(createDefaultSearch().getQuery()));

	let server = $derived(query && `${query.protocol}//${query.hostname}`);
	let fixedParams = $derived(
		query
			? [...query.searchParams.entries()].filter(([key]) =>
					['page', 's', 'q', 'fields', 'json', 'limit'].includes(key)
				)
			: []
	);
	let tags = $derived(
		query
			? ([...query.searchParams.entries()].find(([key]) => key === 'tags') ?? ['tags', ''])
			: ['tags', '']
	);
</script>

<svelte:head>
	<title>kurosearch - Query Builder</title>
	<meta
		name="description"
		content="Test your kurosearch queries. Useful if you already know how to use rule34.xxx"
	/>
</svelte:head>

<section>
	<KurosearchTitle />
	<Searchbar fetchSuggestions={fetchCombinedSuggestions} onpick={activateSuggestion} />
	<ActiveTagList />

	<H3 title="Query URL" />
	<code>
		{query}
	</code>

	<H3 title="Query - Parts" />
	<code>
		<p class="base">{server}</p>
		{#each fixedParams as p}
			<p class="fixed">{p[0]}={p[1]}</p>
		{/each}
		<p class="tags">{tags[0]}={tags[1]}</p>
	</code>
</section>

<style>
	:global(main) {
		display: flex;
		flex-direction: column;
		gap: var(--grid-gap);
	}

	:global(#query-url),
	:global(#query-parts) {
		align-self: start;
	}

	section {
		margin-block: 20vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--grid-gap);
	}

	code {
		background-color: var(--background-1);
		padding: var(--grid-gap);
		border-radius: var(--border-radius-small);
		width: 100%;
		word-wrap: break-word;
	}

	p:not(.base) {
		margin-left: var(--grid-gap);
	}

	.base {
		color: lightgrey;
	}

	.fixed {
		color: darkgrey;
	}

	.tags {
		color: dodgerblue;
	}
</style>

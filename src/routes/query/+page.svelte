<script lang="ts">
	import KurosearchTitle from '$lib/components/kurosearch/kurosearch-title/KurosearchTitle.svelte';
	import Searchbar from '$lib/components/kurosearch/searchbar/Searchbar.svelte';
	import ActiveTagList from '$lib/components/kurosearch/tag-list/ActiveTagList.svelte';
	import { getTagSuggestions } from '$lib/logic/api-client/ApiClient';
	import results from '$lib/store/results-store';
	import activeTags from '$lib/store/active-tags-store';
	import { getTagDetails } from '$lib/logic/api-client/tags/tags';
	import sort from '$lib/store/sort-store';
	import filter from '$lib/store/filter-store';
	import blockedContent from '$lib/store/blocked-content-store';
	import { nextModifier } from '$lib/logic/modifier-utils';
	import supertags from '$lib/store/supertags-store';
	import activeSupertags from '$lib/store/active-supertags-store';
	import { SearchBuilder } from '$lib/logic/search-builder';
	import apiKey from '$lib/store/api-key-store';
	import userId from '$lib/store/user-id-store';

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

	const getQueryUrl = (url: string) => {
		try {
			return new URL(url);
		} catch {
			return null;
		}
	};

	let query = $derived(
		getQueryUrl(
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
				.withSupertags($activeSupertags)
				.getQuery()
		)
	);

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
	<Searchbar
		placeholder="Search for tags"
		{fetchSuggestions}
		onpick={async (suggestion) => {
			if (suggestion.type === 'supertag') {
				const supertag = $supertags.items.find((x) => x.name === suggestion.label);
				if (!supertag) {
					console.warn('Supertag not present.');
					return;
				}
				activeSupertags.addOrReplace(supertag);
			} else {
				const tag = await getTagDetails(suggestion.label, $apiKey, $userId);
				activeTags.addOrReplace({
					name: suggestion.label,
					modifier: suggestion.modifier,
					count: suggestion.count,
					type: tag?.type ?? 'tag'
				});
			}
		}}
	/>
	<ActiveTagList
		tags={[...$activeTags, ...$activeSupertags]}
		onclick={(tag) =>
			'description' in tag
				? activeSupertags.removeByName(tag.name)
				: activeTags.removeByName(tag.name)}
		oncontextmenu={(tag) => {
			if (!('description' in tag)) {
				tag.modifier = nextModifier(tag.modifier);
				activeTags.addOrReplace(tag);
			}
		}}
	/>
	<code>
		{@html query}
	</code>

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
		border-radius: var(--border-radius);
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

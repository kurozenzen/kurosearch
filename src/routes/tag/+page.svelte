<script lang="ts">
	import { browser } from '$app/environment';
	import Searchbar from '$lib/components/kurosearch/searchbar/Searchbar.svelte';
	import LoadingAnimation from '$lib/components/pure/loading-animation/LoadingAnimation.svelte';
	import { getTagSuggestions } from '$lib/logic/api-client/ApiClient';

	const name = browser ? new URL(document.location.href).searchParams.get('name') : undefined;

	const loadTag = async (name: string) => {
		const response = await fetch(
			`https://rule34.xxx/index.php?page=tags&s=list&tags=${name}&sort=asc&order_by=index_count`
		);
		const text = await response.text();
		const parser = new DOMParser();
		const xml = parser.parseFromString(text, 'text/xml');
		const tds = xml.querySelectorAll('#content tr td').values();

		return JSON.stringify(tds);
	};
</script>

<svelte:head>
	<title>{name} - kurosearch</title>
	<meta
		name="description"
		content="Simple and powerful Rule34 browsing site with a focus on simplicity and user experience."
	/>
</svelte:head>

{#if name}
	{#await loadTag(name)}
		<LoadingAnimation />
	{:then data}
		<p>{data}</p>
	{/await}
{:else}
	<h1>Tags</h1>
	<Searchbar
		placeholder="Search for a tag..."
		fetchSuggestions={getTagSuggestions}
		onpick={(suggestion) => {
			window.location.href = '/tag?name=' + suggestion.label;
		}}
	/>
{/if}

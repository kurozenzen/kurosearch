<script lang="ts">
	import KurosearchTitle from '$lib/components/kurosearch/kurosearch-title/KurosearchTitle.svelte';
	import QuickSearch from '$lib/components/kurosearch/quick-search/QuickSearch.svelte';
	import LynxMain from '../LynxMain.svelte';
</script>

<svelte:head>
	<title>kurosearch - Rule34 Hentai</title>
	<meta
		name="description"
		content="Simple and powerful Rule34/Hentai browsing site with a focus on simplicity and user experience. Supports excluding tags, sorting and filtering."
	/>
</svelte:head>

<LynxMain />

<KurosearchTitle />

<QuickSearch />

<style>
	:global(main) {
		display: flex;
		flex-direction: column;
		gap: var(--grid-gap);
	}
</style>

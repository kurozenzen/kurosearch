<script lang="ts">
	import LayoutMobile from '#lib/components/kurosearch/layout-mobile/LayoutMobile.svelte';
	import { keybindsVideo } from '#lib/logic/keybinds/keyboard-utils';
	import { getFirstPage } from '#lib/logic/search.svelte';
	import { onMount } from 'svelte';
	import LynxMain from './LynxMain.svelte';
	import { pageNavigationEnabled, results } from '#lib/store';
	import ResultHeader from '#lib/components/kurosearch/results/ResultHeader.svelte';
	import KurosearchTitle from '#lib/components/kurosearch/kurosearch-title/KurosearchTitle.svelte';
	import ResultsPaged from '#lib/components/kurosearch/results/ResultsPaged.svelte';
	import ResultsInfinite from '#lib/components/kurosearch/results/ResultsInfinite.svelte';
	import CreateSupertagDialog from '#lib/components/kurosearch/dialog-create-supertag/CreateSupertagDialog.svelte';
	import Searchbar from '#lib/components/kurosearch/searchbar/Searchbar.svelte';
	import ActiveTagList from '#lib/components/kurosearch/tag-list/ActiveTagList.svelte';
	import TextButton from '#lib/components/pure/button-text/TextButton.svelte';
	import { keybindSearch } from '#lib/logic/keybinds/keyboard-utils';
	import { activateSuggestion, fetchCombinedSuggestions } from '#lib/logic/suggestions.svelte';
	import Loading from '#lib/components/kurosearch/loading/Loading.svelte';

	let showCreateSupertagDialog = $state(false);

	const oncreateSupertag = () => {
		showCreateSupertagDialog = true;
	};

	const onkeydown = (event: KeyboardEvent) => {
		if (keybindSearch(event)) {
			getFirstPage();
		} else {
			keybindsVideo(event);
		}
	};

	onMount(() => {
		if (results.value.postCount === 0) {
			getFirstPage();
		}
	});
</script>

<svelte:head>
	<title>kurosearch - Rule34 Hentai</title>
	<meta
		name="description"
		content="Simple and powerful Rule34/Hentai browsing site with a focus on simplicity and user experience. Supports excluding tags, sorting and filtering."
	/>
	<link rel="canonical" href="https://kurosearch.com" />
</svelte:head>

<svelte:window {onkeydown} />

<LayoutMobile>
	<LynxMain />
	<KurosearchTitle />
	<search aria-label="Manage Tags and Search">
		<Searchbar fetchSuggestions={fetchCombinedSuggestions} onpick={activateSuggestion} />
		<TextButton
			id="btn-search"
			title="Search with the tags above"
			class="mixin-accent"
			onclick={getFirstPage}
		>
			<Loading loading={results.value.loading}>Search</Loading>
		</TextButton>
		<ActiveTagList {oncreateSupertag} />
		<CreateSupertagDialog bind:open={showCreateSupertagDialog} />
	</search>
	<section id="results" aria-live="polite">
		<ResultHeader />
		{#if pageNavigationEnabled.value}
			<ResultsPaged />
		{:else}
			<ResultsInfinite />
		{/if}
	</section>
</LayoutMobile>

<style>
	:global(main) {
		display: flex;
		flex-direction: column;
		gap: var(--grid-gap);
	}

	#results {
		display: flex;
		flex-direction: column;
		gap: var(--small-gap);
	}

	search {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--grid-gap);
		padding-inline: var(--small-gap);
	}
</style>

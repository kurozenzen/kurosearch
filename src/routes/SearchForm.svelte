<script lang="ts">
	import CreateSupertagDialog from '$lib/components/kurosearch/dialog-create-supertag/CreateSupertagDialog.svelte';
	import KurosearchTitle from '$lib/components/kurosearch/kurosearch-title/KurosearchTitle.svelte';
	import Searchbar from '$lib/components/kurosearch/searchbar/Searchbar.svelte';
	import ActiveTagList from '$lib/components/kurosearch/tag-list/ActiveTagList.svelte';
	import TextButton from '$lib/components/pure/button-text/TextButton.svelte';
	import { keybindSearch } from '$lib/logic/keybinds/keyboard-utils';
	import { getFirstPage } from '$lib/logic/search.svelte';
	import { activateSuggestion, fetchCombinedSuggestions } from '$lib/logic/suggestions.svelte';
	import { results } from '$lib/store';
	import { onMount } from 'svelte';
	import { on } from 'svelte/events';
	import Loading from '$lib/components/kurosearch/loading/Loading.svelte';

	// svelte-ignore non_reactive_update
	let showCreateSupertagDialog = $state(false);

	onMount(() =>
		on(window, 'keydown', (event) => {
			if (keybindSearch(event)) {
				getFirstPage();
			}
		})
	);
</script>

<section id="search">
	<KurosearchTitle />
	<Searchbar fetchSuggestions={fetchCombinedSuggestions} onpick={activateSuggestion} />
	<TextButton
		id="btn-search"
		title="Search with the tags above"
		class="mixin-accent"
		onclick={getFirstPage}
	>
		<Loading loading={results.value.loading}>Search</Loading>
	</TextButton>
	<ActiveTagList
		oncreateSupertag={() => {
			showCreateSupertagDialog = true;
		}}
	/>
</section>

<CreateSupertagDialog bind:open={showCreateSupertagDialog} />

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--grid-gap);
		padding-inline: var(--small-gap);
	}

	:global(#btn-search) {
		width: 10rem;
	}
</style>

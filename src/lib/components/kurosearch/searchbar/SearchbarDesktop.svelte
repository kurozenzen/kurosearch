<script lang="ts">
	import CreateSupertagDialog from '$lib/components/kurosearch/dialog-create-supertag/CreateSupertagDialog.svelte';
	import ModifierSelect from '$lib/components/kurosearch/modifier-select/ModifierSelect.svelte';
	import ActiveTagList from '$lib/components/kurosearch/tag-list/ActiveTagList.svelte';
	import {
		keybindFocusSearchbar,
		keybindModifier,
		keybindNextSuggestion,
		keybindPrevSuggestion,
		keybindSearch,
		keybindSearchbarSubmit
	} from '$lib/logic/keybinds/keyboard-utils';
	import { getFirstPage } from '$lib/logic/search.svelte';
	import SortFilterConfig from '../sort-filter-config/SortFilterConfig.svelte';
	import { activeSupertags, activeTags, results } from '$lib/store';
	import Loading from '../loading/Loading.svelte';
	import { SearchBarState } from './searchbar.state.svelte';
	import { activateSuggestion, fetchCombinedSuggestions } from '$lib/logic/suggestions.svelte';
	import SuggestionList from './SuggestionList.svelte';
	import { ID_SEARCHBAR } from '$lib/logic/well-known-ids';
	import Dropdown from '$lib/components/pure/dropdown/Dropdown.svelte';

	let showCreateSupertagDialog = $state(false);
	let searchbarState = new SearchBarState(fetchCombinedSuggestions);
	let showActiveTags = $state(false);

	$effect(() => {
		if (searchbarState.searchTerm === '') {
			showActiveTags = true;
		} else if (searchbarState.suggestions.length > 0) {
			showActiveTags = false;
		}
	});

	const submitAll = () => {
		searchbarState.getSuggestions().forEach((x) => activateSuggestion(x, searchbarState.modifier));
		searchbarState.reset();
		showActiveTags = true;
	};

	const submitOne = (suggestion: kurosearch.Suggestion) => {
		activateSuggestion(suggestion, searchbarState.modifier);
		searchbarState.reset();
		showActiveTags = true;
	};

	const handleKeyDown = async (event: KeyboardEvent) => {
		if (keybindSearchbarSubmit(event)) {
			submitAll();
		} else if (keybindPrevSuggestion(event)) {
			searchbarState.selectPrevSuggestion();
		} else if (keybindNextSuggestion(event)) {
			searchbarState.selectNextSuggestion();
		}
	};
</script>

<svelte:window
	onkeydown={(event) => {
		if (keybindModifier(event)) {
			searchbarState.rotateModifier();
		}
		if (keybindFocusSearchbar(event)) {
			document.getElementById(ID_SEARCHBAR)?.focus();
		}
		if (keybindSearch(event)) {
			getFirstPage();
		}
	}}
/>

<Dropdown
	element="form"
	class="searchbar-container"
	onOpenChange={(open) => {
		if (!open) {
			showActiveTags = false;
		}
	}}
>
	{#snippet summary(open)}
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div class="searchbar" class:open>
			<ModifierSelect bind:modifier={searchbarState.modifier} />
			<input
				type="text"
				name="searchbar"
				id="searchbar"
				placeholder={activeTags.value.length === 0 ? '/ to focus' : 'Ctrl + Enter to search'}
				autocomplete="off"
				bind:value={searchbarState.searchTerm}
				onkeydown={handleKeyDown}
				onkeyup={() => searchbarState.search()}
				aria-label="Search for tags."
			/>
			<button
				id="btn-tags"
				title="Show/Hide active tags"
				class="mixin-shape-item mixin-primary mixin-hover codicon codicon-tag"
				class:visible={activeTags.value.length + activeSupertags.value.length > 0}
				onclick={() => {
					showActiveTags = !showActiveTags;
				}}
			>
				{activeTags.value.length + activeSupertags.value.length}
			</button>
			<SortFilterConfig
				onsortfilterupdate={getFirstPage}
				class="sort-filter-desktop mixin-primary"
			/>
			<button
				id="btn-search"
				title="Search with tags"
				onclick={getFirstPage}
				class="mixin-circle mixin-accent mixin-hover"
			>
				<Loading loading={results.value.loading}><i class="codicon codicon-search"></i></Loading>
			</button>
		</div>
	{/snippet}

	{#snippet details(className)}
		{#if showActiveTags && activeTags.value.length + activeSupertags.value.length > 0}
			<div class={['tags', className]}>
				<ActiveTagList
					oncreateSupertag={() => {
						showCreateSupertagDialog = true;
					}}
				/>
			</div>
		{:else}
			<SuggestionList
				promise={searchbarState.suggestionPromise}
				onclick={submitOne}
				selectedIndex={searchbarState.selectedSuggestionIndex}
				class={className}
			/>
		{/if}
	{/snippet}
</Dropdown>

<CreateSupertagDialog bind:open={showCreateSupertagDialog} />

<style>
	:global(.searchbar-container) {
		--border-radius: calc(var(--line-height-large) / 2);
		width: 512px;
	}
	.searchbar {
		display: flex;
		align-items: center;
		height: var(--line-height-large);
		background-color: var(--background-1);
		padding-inline: calc((var(--line-height-large) - 32px) / 2);
		gap: var(--small-gap);
		width: 100%;
		position: relative;
		border-radius: var(--border-radius);

		&.open {
			border-radius: var(--border-radius) var(--border-radius) 0 0;
		}
	}

	input {
		font-size: var(--text-size);
		background-color: transparent;
		border: none;
		color: var(--text);
		flex-grow: 1;
		outline: none;
		min-width: 0;
		height: 100%;
		padding: unset;
	}

	.tags {
		background-color: var(--background-1);
		border-radius: 0 0 var(--border-radius) var(--border-radius);
		padding: var(--small-gap);
	}

	#btn-tags {
		display: none;
		align-items: center;
		gap: 4px;

		&.visible {
			display: flex;
		}
	}

	#btn-search {
		--size: var(--line-height);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	#btn-tags,
	#btn-search {
		padding-inline: 8px;
	}

	:global(button.sort-filter-desktop) {
		padding-inline: 8px;
	}
</style>

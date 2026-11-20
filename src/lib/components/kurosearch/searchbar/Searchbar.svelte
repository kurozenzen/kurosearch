<script lang="ts">
	import { resolve } from '$app/paths';
	import CodiconLink from '$lib/components/pure/icon-link/CodiconLink.svelte';
	import {
		keybindFocusSearchbar,
		keybindModifier,
		keybindNextSuggestion,
		keybindPrevSuggestion,
		keybindSearchbarSubmit
	} from '$lib/logic/keybinds/keyboard-utils';
	import ModifierSelect from '../modifier-select/ModifierSelect.svelte';
	import { SearchBarState } from './searchbar.state.svelte';
	import SuggestionList from './SuggestionList.svelte';
	import { ID_SEARCHBAR } from '$lib/logic/well-known-ids';
	import Dropdown from '$lib/components/pure/dropdown/Dropdown.svelte';

	interface Props {
		fetchSuggestions: (searchTerm: string) => Promise<Array<kurosearch.Suggestion>>;
		onpick: (suggestion: kurosearch.Suggestion, modifier: kurosearch.TagModifier) => void;
	}

	let { fetchSuggestions, onpick }: Props = $props();

	// svelte-ignore state_referenced_locally
	let searchbarState = new SearchBarState(fetchSuggestions);

	const submitAll = () => {
		searchbarState.getSuggestions().forEach((x) => onpick(x, searchbarState.modifier));
		searchbarState.reset();
	};

	const submitOne = (suggestion: kurosearch.Suggestion) => {
		onpick(suggestion, searchbarState.modifier);
		searchbarState.reset();
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
	}}
/>

<Dropdown class="searchbar-container">
	{#snippet summary(open)}
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div class="searchbar" class:open>
			<ModifierSelect bind:modifier={searchbarState.modifier} />
			<input
				type="text"
				name="searchbar"
				id="searchbar"
				placeholder="Search for tags"
				autocomplete="off"
				bind:value={searchbarState.searchTerm}
				onkeydown={handleKeyDown}
				onkeyup={() => searchbarState.search()}
				aria-label="Search for tags."
			/>

			<CodiconLink
				title="More information on tags."
				href={resolve('/help#tags')}
				icon="codicon codicon-question"
			/>
		</div>
	{/snippet}

	{#snippet details()}
		<SuggestionList
			promise={searchbarState.suggestionPromise}
			onclick={submitOne}
			selectedIndex={searchbarState.selectedSuggestionIndex}
		/>
	{/snippet}
</Dropdown>

<style>
	:global(.searchbar-container) {
		--border-radius: calc(var(--line-height-large) / 2);

		width: 100%;
		max-width: 512px;
	}

	.searchbar {
		display: flex;
		align-items: center;
		gap: var(--small-gap);
		height: var(--line-height-large);
		width: 100%;
		padding-inline: calc((var(--line-height-large) - 32px) / 2);
		background-color: var(--background-1);
		border-radius: var(--border-radius);

		&.open {
			border-radius: var(--border-radius) var(--border-radius) 0 0;
		}
	}

	input {
		font-size: var(--text-size);
		background-color: transparent;
		outline: none;
		height: 100%;
		flex-grow: 1;
	}
</style>

<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import ModifierSelect from '../modifier-select/ModifierSelect.svelte';
	import LoadingAnimation from '$lib/components/pure/loading-animation/LoadingAnimation.svelte';
	import CodiconLink from '$lib/components/pure/icon-link/CodiconLink.svelte';
	import Suggestion from './Suggestion.svelte';

	const dispatch = createEventDispatcher();

	export let fetchSuggestions: (searchTerm: string) => Promise<Array<kurosearch.Suggestion>>;

	let searchTerm = '';
	let previousSearchTerm = '';
	let searchPromise: Promise<Array<{ label: string; count: number }>>;
	let selectedIndex = 0;
	let modifier: kurosearch.TagModifier = '+';
	let focusInside = false;
	let hasDropdownContent = false;

	// hacky, but i need it in the keydown handler
	let suggestionItems: kurosearch.Suggestion[] = [];

	const search = () => {
		if (searchTerm !== '' && searchTerm !== previousSearchTerm) {
			selectedIndex = 0;
			previousSearchTerm = searchTerm;
			hasDropdownContent = true;
			searchPromise = fetchSuggestions(searchTerm);
			searchPromise.then((s) => (suggestionItems = s)).catch(() => (suggestionItems = []));
		}
	};

	const pick = (suggestion: kurosearch.Suggestion) => {
		dispatch('pick', { modifier, ...suggestion });
		searchTerm = '';
		selectedIndex = 0;
		hasDropdownContent = false;
	};

	const close = () => {
		focusInside = false;
	};

	const closeIfFocusOutside = (event: any) => {
		if (!event.relatedTarget || !event.target.parentNode.contains(event.relatedTarget)) {
			focusInside = false;
		}
	};

	const focus = (e: any) => {
		focusInside = true;
		e.target.scrollIntoView({ block: 'center', behavior: 'smooth' });
	};

	const handleKeyDown = (event: any) => {
		if (event.key === 'Enter') {
			pick(
				suggestionItems.length > selectedIndex
					? suggestionItems[selectedIndex]
					: { label: searchTerm, count: 0 }
			);
		} else if (event.code === 'Escape') {
			event.target.blur();
		} else if (event.code === 'ArrowUp' && suggestionItems.length > 0) {
			selectedIndex = (selectedIndex + suggestionItems.length - 1) % suggestionItems.length;
		} else if (event.code === 'ArrowDown' && suggestionItems.length > 0) {
			selectedIndex = (selectedIndex + 1) % suggestionItems.length;
		}
	};
</script>

<div class="searchbar" class:open={focusInside && hasDropdownContent} on:blur={close}>
	<i class="codicon codicon-search spaced" />
	<ModifierSelect bind:modifier />
	<input
		type="text"
		name="searchbar"
		bind:value={searchTerm}
		on:focus={focus}
		on:blur={closeIfFocusOutside}
		on:keydown={handleKeyDown}
		on:keyup={search}
		aria-label="Search for tags."
	/>

	<CodiconLink
		title="More information on tags."
		href="/help#tags"
		icon="codicon codicon-question"
	/>
	<ol class:open={focusInside && hasDropdownContent}>
		{#await searchPromise}
			<div class="suggestion-footer">
				<LoadingAnimation />
			</div>
		{:then suggestions}
			{#if Array.isArray(suggestions)}
				{#each suggestions as suggestion, index}
					<Suggestion
						{suggestion}
						on:click={() => pick(suggestion)}
						selected={index === selectedIndex}
					/>
				{/each}
			{/if}
			<div class="suggestion-footer" />
		{:catch error}
			<div class="suggestion-footer">
				<i class={`codicon codicon-error`} />
				<span>{error.message}</span>
			</div>
		{/await}
	</ol>
</div>

<style>
	.searchbar {
		display: flex;
		align-items: center;
		height: var(--line-height-large);
		background-color: var(--background-1);
		padding-inline: 6px;
		border-radius: 22px;
		width: 100%;
		max-width: 512px;
		margin: 0 auto;
		position: relative;
		isolation: isolate;
		z-index: var(--z-searchbar);
	}

	.spaced {
		width: var(--line-height);
		height: var(--line-height);
		line-height: var(--line-height);
		vertical-align: middle;
		text-align: center;
		font-size: var(--text-size-large);
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
	}

	.searchbar.open {
		border-radius: 22px 22px 0 0;
		filter: drop-shadow(0px 3px 5px black);
	}

	ol.open {
		display: block;
	}

	ol {
		display: none;
		box-sizing: border-box;
		position: absolute;
		top: var(--line-height-large);
		left: 0;
		width: 100%;
		background-color: var(--background-1);
		border-radius: 0 0 22px 22px;
		overflow: hidden;
		min-height: 22px;
	}

	.suggestion-footer {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 8px;
		gap: 0.5rem;
	}
</style>

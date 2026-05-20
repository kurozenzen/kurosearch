<script lang="ts">
	import { resolve } from '$app/paths';
	import CreateSupertagDialog from '$lib/components/kurosearch/dialog-create-supertag/CreateSupertagDialog.svelte';
	import ModifierSelect from '$lib/components/kurosearch/modifier-select/ModifierSelect.svelte';
	import Suggestion from '$lib/components/kurosearch/searchbar/Suggestion.svelte';
	import ActiveTagList from '$lib/components/kurosearch/tag-list/ActiveTagList.svelte';
	import CodiconLink from '$lib/components/pure/icon-link/CodiconLink.svelte';
	import LoadingAnimation from '$lib/components/pure/loading-animation/LoadingAnimation.svelte';
	import { getTagDetails, getTagSuggestions } from '$lib/logic/api-client/ApiClient';
	import { nextModifier } from '$lib/logic/modifier-utils';
	import { getFirstPage } from '$lib/logic/search';
	import { addHistory } from '$lib/logic/use/onpopstate';
	import activeSupertags from '$lib/store/active-supertags-store';
	import activeTags from '$lib/store/active-tags-store';
	import { videoStore } from '$lib/store/active-video-store';
	import apiKey from '$lib/store/api-key-store';
	import results from '$lib/store/results-store';
	import supertags from '$lib/store/supertags-store';
	import userId from '$lib/store/user-id-store';
	import SortFilterConfig from '../sort-filter-config/SortFilterConfig.svelte';

	let searchTerm = $state('');
	let previousSearchTerm = $state('');
	let searchPromise: Promise<kurosearch.Suggestion[]> = $state(undefined);
	let selectedIndex = $state(0);
	let modifier: kurosearch.TagModifier = $state('+');
	let focusInside = $state(false);
	let hasDropdownContent = $state(false);
	let showActiveTags = $state(false);

	// hacky, I'd like to avoid caching this but i need it in the keydown handler
	let suggestionItems: kurosearch.Suggestion[] = [];

	// svelte-ignore non_reactive_update
	let createSupertagDialog: HTMLDialogElement;

	const search = () => {
		if (searchTerm !== '' && searchTerm !== previousSearchTerm) {
			selectedIndex = 0;
			previousSearchTerm = searchTerm;
			hasDropdownContent = true;
			searchPromise = fetchSuggestions(searchTerm);
			searchPromise.then((s) => (suggestionItems = s)).catch(() => (suggestionItems = []));
		}
	};

	const onpick = async (
		suggestion: kurosearch.Suggestion & { modifier: kurosearch.TagModifier }
	) => {
		if (suggestion.type === 'supertag') {
			const supertag = $supertags.items.find((x) => x.name === suggestion.label);
			if (!supertag) {
				console.warn('Supertag not present.');
				return;
			}
			activeSupertags.addOrReplace(supertag);
		} else {
			let tag = await getTagDetails(suggestion.label, $apiKey, $userId);

			activeTags.addOrReplace({
				name: suggestion.label,
				modifier: suggestion.modifier,
				count: suggestion.count,
				type: tag?.type ?? 'tag'
			});
		}
	};

	const pick = (suggestion: kurosearch.Suggestion) => {
		onpick({ modifier, ...suggestion });
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
		videoStore.target(undefined);
		focusInside = true;
		showActiveTags = false;
		e.target.scrollIntoView({ block: 'center', behavior: 'smooth' });
	};

	const handleKeyDown = async (event: any) => {
		if (!event.ctrlKey && event.key === 'Enter' && searchTerm !== '') {
			if (suggestionItems.length > selectedIndex) {
				pick(suggestionItems[selectedIndex]);
			} else {
				const tags = searchTerm.split(';').map((x) => x.trim().replaceAll(' ', '_'));
				const details = await Promise.all(
					tags.map((name) => getTagDetails(name, $apiKey, $userId))
				);
				tags
					.map((name) => {
						const detail = details.find((x) => x?.name === name);
						return {
							type: detail?.type ?? 'tag',
							label: name,
							count: detail?.count ?? 0
						};
					})
					.forEach(pick);
			}
		} else if (event.code === 'Escape') {
			event.target.blur();
		} else if (event.code === 'ArrowUp' && suggestionItems.length > 0) {
			selectedIndex = (selectedIndex + suggestionItems.length - 1) % suggestionItems.length;
		} else if (event.code === 'ArrowDown' && suggestionItems.length > 0) {
			selectedIndex = (selectedIndex + 1) % suggestionItems.length;
		}
	};

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
</script>

<div
	class="searchbar"
	class:open={focusInside && (hasDropdownContent || showActiveTags)}
	onblur={close}
>
	<ModifierSelect bind:modifier class="modifier-select-desktop" />
	<input
		type="text"
		name="searchbar"
		id="searchbar"
		placeholder="Search for tags"
		autocomplete="off"
		bind:value={searchTerm}
		onfocus={focus}
		onblur={closeIfFocusOutside}
		onkeydown={handleKeyDown}
		onkeyup={search}
		aria-label="Search for tags."
	/>
	<button
		id="btn-tags"
		title="Show/Hide active tags"
		onclick={() => {
			showActiveTags = !showActiveTags;
			focusInside = true;
		}}
	>
		{#if $activeTags.length + $activeSupertags.length === 0}
			No
		{:else if $activeTags.length + $activeSupertags.length === 1}
			1
		{:else}
			{$activeTags.length + $activeSupertags.length}
		{/if}
		<i class="codicon codicon-tag"></i>
	</button>
	<SortFilterConfig onsortfilterupdate={getFirstPage} class="sort-filter-desktop" />
	<button id="btn-search" title="Search with tags" onclick={getFirstPage} class="primary">
		{#if $results.loading}
			<LoadingAnimation />
		{:else}
			<i class="codicon codicon-search"></i>
		{/if}
	</button>
	<ol class:open={focusInside && hasDropdownContent && !showActiveTags}>
		{#await searchPromise}
			<div class="suggestion-footer">
				<LoadingAnimation />
			</div>
		{:then suggestions}
			{#if Array.isArray(suggestions)}
				{#each suggestions as suggestion, index}
					<Suggestion
						{suggestion}
						onclick={() => pick(suggestion)}
						selected={index === selectedIndex}
					/>
				{/each}
			{/if}
			<div class="suggestion-footer"></div>
		{:catch error}
			<div class="suggestion-footer">
				<i class={`codicon codicon-error`}></i>
				<span>{error.message}</span>
			</div>
		{/await}
	</ol>
	<div class="tags" class:open={focusInside && showActiveTags}>
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
			oncreateSupertag={() => {
				createSupertagDialog?.showModal();
				addHistory('dialog');
			}}
		/>
	</div>
</div>

<CreateSupertagDialog
	bind:dialog={createSupertagDialog}
	tags={$activeTags}
	onsubmit={(supertag) => supertags.add(supertag)}
/>

<style>
	div.searchbar {
		display: flex;
		align-items: center;
		height: var(--line-height-large);
		background-color: var(--background-1);
		border-radius: var(--line-height-large);
		width: 100%;
		max-width: 512px;
		margin: 0 auto;
		position: relative;
		isolation: isolate;
		z-index: var(--z-searchbar);

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

		&.open {
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
			gap: var(--small-gap);
		}
	}

	.tags {
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
		padding: var(--small-gap);
	}

	.tags.open {
		display: block;
	}

	#btn-tags {
		display: flex;
		align-items: center;
		gap: 4px;
		color: var(--text);
		height: 100%;
	}

	#btn-search {
		color: white;
		background-color: var(--accent);
		text-transform: uppercase;
		text-align: center;
		width: var(--line-height-large);
		height: var(--line-height-large);
		border-radius: var(--line-height-large);
	}

	#btn-tags,
	#btn-search {
		padding-inline: 8px;
		transition: all var(--default-transition-behaviour);
	}

	@media (hover: hover) {
		#btn-search:hover {
			background-color: var(--accent-light);
		}

		#btn-tags:hover {
			background-color: var(--background-2);
			color: var(--text-highlight);
		}
	}

	:global(button.modifier-select-desktop) {
		width: var(--line-height-large);
		height: 100%;
		border-radius: 0;
		border-radius: var(--line-height-large);
	}

	:global(button.sort-filter-desktop) {
		padding-inline: 8px;
		border-radius: 0;
	}

	:global(button.sort-filter-desktop):hover {
		background-color: var(--background-2);
	}
</style>

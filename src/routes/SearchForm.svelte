<script lang="ts">
	import { browser } from '$app/environment';
	import CreateSupertagDialog from '$lib/components/kurosearch/dialog-create-supertag/CreateSupertagDialog.svelte';
	import KurosearchTitle from '$lib/components/kurosearch/kurosearch-title/KurosearchTitle.svelte';
	import Searchbar from '$lib/components/kurosearch/searchbar/Searchbar.svelte';
	import ActiveTagList from '$lib/components/kurosearch/tag-list/ActiveTagList.svelte';
	import LoadingAnimation from '$lib/components/pure/loading-animation/LoadingAnimation.svelte';
	import TextButton from '$lib/components/pure/text-button/TextButton.svelte';
	import { getTagSuggestions } from '$lib/logic/api-client/ApiClient';
	import { getTagDetails } from '$lib/logic/api-client/tags/tags';
	import { nextModifier } from '$lib/logic/modifier-utils';
	import { addHistory } from '$lib/logic/use/onpopstate';
	import activeSupertags from '$lib/store/active-supertags-store';
	import activeTags from '$lib/store/active-tags-store';
	import apiKey from '$lib/store/api-key-store';
	import results from '$lib/store/results-store';
	import supertags from '$lib/store/supertags-store';
	import userId from '$lib/store/user-id-store';
	import { onDestroy, onMount } from 'svelte';

	interface Props {
		loading: boolean;
		onsubmit: () => void;
	}

	let { loading, onsubmit }: Props = $props();

	let createSupertagDialog: HTMLDialogElement = $state(undefined);

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

	const keybinds = (event: KeyboardEvent) => {
		if (
			(event.key === '/' || event.key === 's') &&
			(!document.activeElement || document.activeElement === document.body)
		) {
			event.preventDefault();
			event.stopPropagation();
			document.getElementById('searchbar')?.focus();
		}

		if (event.ctrlKey && event.key === 'Enter') {
			event.preventDefault();
			event.stopPropagation();
			onsubmit();
		}

		if (event.ctrlKey && event.key === 'm') {
			event.preventDefault();
			event.stopPropagation();
			document.getElementById('select-modifier')?.click();
		}
	};

	onMount(async () => {
		if (browser) {
			document.addEventListener('keydown', keybinds);
			if ($results.postCount === 0) {
				onsubmit();
			}
		}
	});

	onDestroy(() => {
		if (browser) {
			document.removeEventListener('keydown', keybinds);
		}
	});
</script>

<section id="search">
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
				let tag = await getTagDetails(suggestion.label, $apiKey, $userId);

				activeTags.addOrReplace({
					name: suggestion.label,
					modifier: suggestion.modifier,
					count: suggestion.count,
					type: tag?.type ?? 'tag'
				});
			}
		}}
	/>
	<TextButton id="btn-search" title="Search with the tags above" onclick={onsubmit}>
		{#if loading}
			<LoadingAnimation />
		{:else}
			Search
		{/if}
	</TextButton>
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
				console.log(tag);
			}
		}}
		oncreateSupertag={() => {
			createSupertagDialog?.showModal();
			addHistory('dialog');
		}}
	/>
</section>

<CreateSupertagDialog
	bind:dialog={createSupertagDialog}
	tags={$activeTags}
	onsubmit={(supertag) => supertags.add(supertag)}
/>

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

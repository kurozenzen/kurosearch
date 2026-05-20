<script lang="ts">
	import QuickSearchTag from './QuickSearchTag.svelte';
	import QuickSearchGroup from './QuickSearchGroup.svelte';
	import activeTags from '$lib/store/active-tags-store';
	import activeSupertags from '$lib/store/active-supertags-store';
	import results from '$lib/store/results-store';
	import { goto } from '$app/navigation';
	import RadioGroup from '$lib/components/pure/radio-group/RadioGroup.svelte';
	import sortsStore from '$lib/store/sort-store';
	import QuickSearchList from './QuickSearchList.svelte';
	import TextButton from '$lib/components/pure/text-button/TextButton.svelte';
	import {
		LABELS_AI,
		LABELS_MEDIA,
		LABELS_SORT,
		quickSelectData,
		SORT_VALUES,
		TAGS_AI,
		TAGS_MEDIA
	} from './quick-search-data';

	let multiSelect = $state(false);
	let ai = $state('both');
	let mediaType = $state('all');
	let sort = $state('new');
	let checkedTags: Record<string, kurosearch.SearchableTag[]> = $state({});

	const activateMultiSelect =
		(name: string, tags: kurosearch.SearchableTag[]) => (e: MouseEvent) => {
			e.preventDefault();
			multiSelect = true;
			checkedTags[name] = tags;
		};

	const onTagClick = (name: string, tags: kurosearch.SearchableTag[]) => {
		if (multiSelect) {
			toggle(name, tags);
		} else {
			submit(tags);
		}
	};

	const toggle = (name: string, tags: kurosearch.SearchableTag[]) => {
		if (checkedTags[name]) {
			delete checkedTags[name];
			if (Object.keys(checkedTags).length === 0) {
				multiSelect = false;
			}
		} else {
			checkedTags[name] = tags;
		}
	};

	const submit = (tags: kurosearch.SearchableTag[]) => {
		activeTags.reset();
		activeSupertags.reset();
		results.reset();

		for (const { name, modifier } of TAGS_AI[ai]) {
			activeTags.addByName(name, modifier);
		}

		for (const { name, modifier } of TAGS_MEDIA[mediaType]) {
			activeTags.addByName(name, modifier);
		}

		sortsStore.set(SORT_VALUES[sort]);

		for (const key in checkedTags) {
			for (const { name, modifier } of checkedTags[key]) {
				activeTags.addByName(name, modifier);
			}
		}

		for (const { name, modifier } of tags) {
			activeTags.addByName(name, modifier);
		}

		goto('/');
	};
</script>

<section class="switches">
	<QuickSearchGroup name="Media Type">
		<RadioGroup name="media" options={LABELS_MEDIA} bind:value={mediaType} />
	</QuickSearchGroup>

	<QuickSearchGroup name="AI Content">
		<RadioGroup name="ai" options={LABELS_AI} bind:value={ai} />
	</QuickSearchGroup>

	<QuickSearchGroup name="Sort">
		<RadioGroup name="sort" options={LABELS_SORT} bind:value={sort} />
	</QuickSearchGroup>

	<QuickSearchGroup name="Skip Tags">
		<TextButton title="No tags, Just Go" class="mixin-accent" onclick={() => submit([])}
			>Search</TextButton
		>
	</QuickSearchGroup>
</section>

<section class="lists">
	{#each Object.entries(quickSelectData) as [name, list] (name)}
		<QuickSearchList {name}>
			{#each list as { name, tags, icon } (name)}
				<QuickSearchTag
					checked={name in checkedTags}
					{name}
					{icon}
					onclick={() => onTagClick(name, tags)}
					oncontextmenu={activateMultiSelect(name, tags)}
				/>
			{/each}
		</QuickSearchList>
	{/each}
</section>

{#if multiSelect}
	<div id="multi-select-submit">
		<TextButton title="Search" class="mixin-accent" onclick={() => submit([])}>Search</TextButton>
		<TextButton
			title="Cancel"
			class="mixin-secondary"
			onclick={() => {
				checkedTags = {};
				multiSelect = false;
			}}
		>
			Cancel
		</TextButton>
	</div>
{/if}

<style>
	section {
		display: flex;
		gap: var(--grid-gap);
	}

	.switches {
		flex-wrap: wrap;
		padding-inline: var(--grid-gap);
	}

	.lists {
		flex-direction: column;
	}

	#multi-select-submit {
		position: sticky;
		z-index: 10;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: var(--grid-gap);
		display: flex;
		justify-content: center;
		gap: var(--grid-gap);
		background-color: var(--background-0);
	}
</style>

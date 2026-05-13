<script lang="ts">
	import QuickSearchTag from './QuickSearchTag.svelte';
	import QuickSearchGroup from './QuickSearchGroup.svelte';
	import activeTags from '$lib/store/active-tags-store';
	import results from '$lib/store/results-store';
	import { goto } from '$app/navigation';
	import RadioGroup from '$lib/components/pure/radio-group/RadioGroup.svelte';
	import sortsStore, { type SortStoreData } from '$lib/store/sort-store';
	import QuickSearchList from './QuickSearchList.svelte';

	// Categories
	import tentacleIcon from '$lib/assets/categories/tentacle.png';
	import futanariIcon from '$lib/assets/categories/futanari.png';
	import paizuriIcon from '$lib/assets/categories/paizuri.png';
	import ahegaoIcon from '$lib/assets/categories/ahegao.png';
	import creampieIcon from '$lib/assets/categories/creampie.png';
	import analIcon from '$lib/assets/categories/anal.png';
	import blackedIcon from '$lib/assets/categories/blacked.png';
	import blowjobIcon from '$lib/assets/categories/blowjob.png';

	// Franchises
	import leagueOfLegendsIcon from '$lib/assets/franchises/league_of_legends.png';
	import genshinImpactIcon from '$lib/assets/franchises/genshin_impact.png';
	import pokemonIcon from '$lib/assets/franchises/pokemon.png';
	import overwatchIcon from '$lib/assets/franchises/overwatch.png';

	const categories = Object.freeze([
		{ name: 'Tentacle', tags: ['tentacle'], icon: tentacleIcon },
		{ name: 'Paizuri', tags: ['paizuri'], icon: paizuriIcon },
		{ name: 'Ahegao', tags: ['ahegao'], icon: ahegaoIcon },
		{ name: 'Creampie', tags: ['creampie'], icon: creampieIcon },
		{ name: 'Anal', tags: ['anal'], icon: analIcon },
		{ name: 'Blowjob', tags: ['blowjob'], icon: blowjobIcon }
	]);

	const franchises = Object.freeze([
		{ name: 'Pokemon', tags: ['pokemon'], icon: pokemonIcon },
		{ name: 'Genshin Impact', tags: ['genshin_impact'], icon: genshinImpactIcon },
		{ name: 'League of Legends', tags: ['league_of_legends'], icon: leagueOfLegendsIcon },
		{ name: 'Overwatch', tags: ['overwatch'], icon: overwatchIcon }
	]);

	const pairings = Object.freeze([
		{ name: 'Lesbian', tags: ['yuri', 'lesbian'], icon: '' },
		{ name: 'Gay', tags: ['yaoi', 'gay'], icon: '' },
		{ name: 'Blacked', tags: ['blacked'], icon: blackedIcon },
		{ name: 'Futanari', tags: ['futanari'], icon: futanariIcon }
	]);

	const LABELS_AI = Object.freeze({
		both: 'both',
		'no-ai': 'no ai',
		ai: 'only ai'
	});

	const LABELS_MEDIA = Object.freeze({
		all: 'all',
		video: 'video',
		image: 'image',
		gif: 'gif',
		comic: 'comic'
	});

	const LABELS_SORT = Object.freeze({
		date: 'date',
		score: 'score',
		random: 'random'
	});

	const TAGS_AI = Object.freeze({
		both: [],
		'no-ai': [{ name: 'ai', modifier: '-' }],
		ai: [{ name: 'ai', modifier: '+' }]
	} as Record<string, kurosearch.SearchableTag[]>);

	const TAGS_MEDIA = Object.freeze({
		all: [] as kurosearch.SearchableTag[],
		video: [{ name: 'video', modifier: '+' }],
		image: [{ name: 'animated', modifier: '-' }],
		gif: [{ name: 'animated_gif', modifier: '+' }],
		comic: [{ name: 'comic', modifier: '+' }]
	} as Record<string, kurosearch.SearchableTag[]>);

	const SORT_VALUES = Object.freeze({
		date: { property: 'id', direction: 'desc' },
		score: { property: 'score', direction: 'desc' },
		random: { property: 'random', direction: 'desc' }
	} as Record<string, SortStoreData>);

	let ai = $state('both');
	let mediaType = $state('all');
	let sort = $state('date');

	const submit = async (tags: string[]) => {
		activeTags.reset();

		for (const { name, modifier } of TAGS_AI[ai]) {
			activeTags.addByName(name, modifier);
		}

		for (const { name, modifier } of TAGS_MEDIA[mediaType]) {
			activeTags.addByName(name, modifier);
		}

		sortsStore.set(SORT_VALUES[sort]);

		for (const tag of tags) {
			activeTags.addByName(tag);
		}

		results.reset();
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
</section>
<section class="lists">
	<QuickSearchList name="Categories">
		{#each categories as { name, tags, icon }}
			<QuickSearchTag {name} {icon} onclick={() => submit(tags)} />
		{/each}
	</QuickSearchList>

	<QuickSearchList name="Fandoms">
		{#each franchises as { name, tags, icon }}
			<QuickSearchTag {name} {icon} onclick={() => submit(tags)} />
		{/each}
	</QuickSearchList>

	<QuickSearchList name="Pairings">
		{#each pairings as { name, tags, icon }}
			<QuickSearchTag {name} {icon} onclick={() => submit(tags)} />
		{/each}
	</QuickSearchList>

	<QuickSearchList name="Characters">
		<span>Coming soon...</span>
	</QuickSearchList>

	<QuickSearchList name="Artists">
		<span>Coming soon...</span>
	</QuickSearchList>
</section>

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
</style>

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
		{ name: 'Tentacle', tags: [{ name: 'tentacle', modifier: '+' }], icon: tentacleIcon },
		{ name: 'Paizuri', tags: [{ name: 'paizuri', modifier: '+' }], icon: paizuriIcon },
		{ name: 'Ahegao', tags: [{ name: 'ahegao', modifier: '+' }], icon: ahegaoIcon },
		{ name: 'Creampie', tags: [{ name: 'creampie', modifier: '+' }], icon: creampieIcon },
		{ name: 'Anal', tags: [{ name: 'anal', modifier: '+' }], icon: analIcon },
		{ name: 'Blowjob', tags: [{ name: 'blowjob', modifier: '+' }], icon: blowjobIcon }
	]);

	const franchises = Object.freeze([
		{ name: 'Pokemon', tags: [{ name: 'pokemon', modifier: '+' }], icon: pokemonIcon },
		{ name: 'Genshin', tags: [{ name: 'genshin_impact', modifier: '+' }], icon: genshinImpactIcon },
		{
			name: 'League',
			tags: [{ name: 'league_of_legends', modifier: '+' }],
			icon: leagueOfLegendsIcon
		},
		{ name: 'Overwatch', tags: [{ name: 'overwatch', modifier: '+' }], icon: overwatchIcon }
	]);

	const pairings = Object.freeze([
		{
			name: 'Lesbian',
			tags: [
				{ name: 'yuri', modifier: '~' },
				{ name: 'lesbian', modifier: '~' }
			],
			icon: ''
		},
		{
			name: 'Gay',
			tags: [
				{ name: 'yaoi', modifier: '~' },
				{ name: 'gay', modifier: '~' }
			],
			icon: ''
		},
		{ name: 'Blacked', tags: [{ name: 'blacked', modifier: '+' }], icon: blackedIcon },
		{ name: 'Futanari', tags: [{ name: 'futanari', modifier: '+' }], icon: futanariIcon }
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

	const submit = async (tags: kurosearch.SearchableTag[]) => {
		activeTags.reset();

		for (const { name, modifier } of TAGS_AI[ai]) {
			activeTags.addByName(name, modifier);
		}

		for (const { name, modifier } of TAGS_MEDIA[mediaType]) {
			activeTags.addByName(name, modifier);
		}

		sortsStore.set(SORT_VALUES[sort]);

		for (const {name, modifier} of tags) {
			activeTags.addByName(name, modifier);
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

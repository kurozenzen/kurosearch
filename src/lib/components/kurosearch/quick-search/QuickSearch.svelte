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

	const artists = Object.freeze([
 		{name: 'Pixiewillow', tags: [{name: 'pixiewillow', modifier: '+'}], icon: ''},
 		{name: 'Nyl2', tags: [{name: 'nyl2', modifier: '+'}], icon: ''},
 		{name: 'Hentaudio', tags: [{name: 'hentaudio', modifier: '+'}], icon: ''},
 		{name: 'Norori', tags: [{name: 'norori', modifier: '+'}], icon: ''},
 		{name: 'Theobrobine', tags: [{name: 'theobrobine', modifier: '+'}], icon: ''},
 		{name: 'Toushi Ryoku', tags: [{name: 'toushi_ryoku', modifier: '+'}], icon: ''},
 		{name: 'Evilzorak', tags: [{name: 'evilzorak', modifier: '+'}], icon: ''},
 		{name: 'Kittenvox', tags: [{name: 'kittenvox', modifier: '+'}], icon: ''},
 		{name: 'Derpixon', tags: [{name: 'derpixon', modifier: '+'}], icon: ''},
 		{name: 'Howlsfm', tags: [{name: 'howlsfm', modifier: '+'}], icon: ''},
 		{name: 'Generalbutch', tags: [{name: 'generalbutch', modifier: '+'}], icon: ''},
 		{name: 'Nagoonimation', tags: [{name: 'nagoonimation', modifier: '+'}], icon: ''},
 		{name: 'Bordeaux_black', tags: [{name: 'bordeaux_black', modifier: '+'}], icon: ''},
 		{name: 'Marota', tags: [{name: 'marota_(imyme_maro)', modifier: '+'}], icon: ''},
 		{name: 'Opennsfwsp', tags: [{name: 'opennsfwsp', modifier: '+'}], icon: ''},
 		{name: 'Kassioppiava', tags: [{name: 'kassioppiava', modifier: '+'}], icon: ''},
 		{name: 'Chloeangelva', tags: [{name: 'chloeangelva', modifier: '+'}], icon: ''},
 		{name: 'Midnight_datura', tags: [{name: 'midnight_datura', modifier: '+'}], icon: ''},
 		{name: 'Suoiresnu', tags: [{name: 'suoiresnu', modifier: '+'}], icon: ''},
 		{name: 'Amplected', tags: [{name: 'amplected', modifier: '+'}], icon: ''},
 		{name: 'Pleasedbyviolet', tags: [{name: 'pleasedbyviolet', modifier: '+'}], icon: ''},
 		{name: 'Cottontailva', tags: [{name: 'cottontailva', modifier: '+'}], icon: ''},
 		{name: 'Akujisaitova', tags: [{name: 'akujisaitova', modifier: '+'}], icon: ''},
 		{name: 'Rinn Mayy', tags: [{name: 'rinn_mayy', modifier: '+'}], icon: ''},
 		{name: 'Unepicroachy', tags: [{name: 'unepicroachy', modifier: '+'}], icon: ''},
 		{name: 'Zerodiamonds', tags: [{name: 'zerodiamonds', modifier: '+'}], icon: ''},
 		{name: 'Hard-degenerate', tags: [{name: 'hard-degenerate', modifier: '+'}], icon: ''},
 		{name: 'Hydrafxx', tags: [{name: 'hydrafxx', modifier: '+'}], icon: ''},
 		{name: 'Oolay-tiger', tags: [{name: 'oolay-tiger', modifier: '+'}], icon: ''},
 		{name: 'Fugtrup', tags: [{name: 'fugtrup', modifier: '+'}], icon: ''},
 		{name: 'Tsuzura', tags: [{name: 'tsuzura_(pixiv74922627)', modifier: '+'}], icon: ''},
 		{name: 'Moneti', tags: [{name: 'moneti_(daifuku)', modifier: '+'}], icon: ''},
 		{name: 'Ivan e Recshun', tags: [{name: 'ivan_e_recshun', modifier: '+'}], icon: ''},
 		{name: 'Kittyyevil', tags: [{name: 'kittyyevil', modifier: '+'}], icon: ''},
 		{name: 'Lehornysfx', tags: [{name: 'lehornysfx', modifier: '+'}], icon: ''},
 		{name: 'Slayed.coom', tags: [{name: 'slayed.coom', modifier: '+'}], icon: ''},
 		{name: 'Schpicy', tags: [{name: 'schpicy', modifier: '+'}], icon: ''},
 		{name: 'Volkor', tags: [{name: 'volkor', modifier: '+'}], icon: ''},
 		{name: 'Macstarva', tags: [{name: 'macstarva', modifier: '+'}], icon: ''},
 		{name: 'Lecheryamoreva', tags: [{name: 'lecheryamoreva', modifier: '+'}], icon: ''},
 		{name: 'Jackerman', tags: [{name: 'jackerman', modifier: '+'}], icon: ''},
 		{name: 'Kashiwamochi Yomogi', tags: [{name: 'kashiwamochi_yomogi', modifier: '+'}], icon: ''},
 		{name: 'Ginagaloreva', tags: [{name: 'ginagaloreva', modifier: '+'}], icon: ''},
 		{name: 'Leebongchun', tags: [{name: 'leebongchun', modifier: '+'}], icon: ''},
 		{name: 'Omikami', tags: [{name: 'omikami', modifier: '+'}], icon: ''},
 		{name: 'Sia Mofu', tags: [{name: 'sia_mofu', modifier: '+'}], icon: ''},
 		{name: 'Th3k1d', tags: [{name: 'th3k1d', modifier: '+'}], icon: ''},
 		{name: 'Setsugetsuka436', tags: [{name: 'setsugetsuka436', modifier: '+'}], icon: ''},
 		{name: 'Hamaburicchi', tags: [{name: 'hamaburicchi', modifier: '+'}], icon: ''},
 		{name: 'Anda Inmu', tags: [{name: 'anda_inmu', modifier: '+'}], icon: ''},
	]);

	const categories = Object.freeze([
		{ name: 'Femboy', tags: [{ name: 'femboy', modifier: '+' }], icon: '' },
		{ name: 'Wholesome', tags: [{ name: 'wholesome', modifier: '+' }], icon: '' },
		{ name: 'Romantic', tags: [{ name: 'romantic', modifier: '+' }], icon: '' },
		{ name: 'Femdom', tags: [{ name: 'femdom', modifier: '+' }], icon: '' },
		{ name: 'Furry', tags: [{ name: 'furry', modifier: '+' }], icon: '' },
		{ name: 'Anthro', tags: [{ name: 'anthro', modifier: '+' }], icon: '' },
		{ name: 'Tentacle', tags: [{ name: 'tentacle', modifier: '+' }], icon: tentacleIcon },
		{ name: 'Pov', tags: [{ name: 'pov', modifier: '+' }], icon: '' },
		{ name: 'Incest', tags: [{ name: 'incest', modifier: '+' }], icon: '' },
		{ name: 'Succubus', tags: [{ name: 'succubus', modifier: '+' }], icon: '' },
		{ name: 'Milf', tags: [{ name: 'milf', modifier: '+' }], icon: '' },
		{ name: 'Paizuri', tags: [{ name: 'paizuri', modifier: '+' }], icon: paizuriIcon },
		{ name: 'Ahegao', tags: [{ name: 'ahegao', modifier: '+' }], icon: ahegaoIcon },
		{ name: 'Creampie', tags: [{ name: 'creampie', modifier: '+' }], icon: creampieIcon },
		{ name: 'Rimming', tags: [{ name: 'rimming', modifier: '+' }], icon: '' },
		{ name: 'Cock Worship', tags: [{ name: 'cock_worship', modifier: '+' }], icon: '' },
		{ name: 'Anal', tags: [{ name: 'anal', modifier: '+' }], icon: analIcon },
		{ name: 'Blowjob', tags: [{ name: 'blowjob', modifier: '+' }], icon: blowjobIcon },
		{ name: 'Footjob', tags: [{ name: 'footjob', modifier: '+' }], icon: '' },
		{ name: 'Feet', tags: [{ name: 'feet', modifier: '+' }], icon: '' },
		{ name: 'Zoophilia', tags: [{ name: 'zoophilia', modifier: '+' }], icon: '' },
		{ name: 'Watersports', tags: [{ name: 'watersports', modifier: '+' }], icon: '' },
		{ name: 'Rape', tags: [{ name: 'rape', modifier: '+' }], icon: '' },
		{ name: 'Armpit', tags: [{ name: 'armpit', modifier: '+' }], icon: '' }
	]);

	const franchises = Object.freeze([
		{ name: 'Pokemon', tags: [{ name: 'pokemon', modifier: '+' }], icon: pokemonIcon },
		{ name: 'Genshin Impact', tags: [{ name: 'genshin_impact', modifier: '+' }], icon: genshinImpactIcon },
		{
			name: 'League of Legends',
			tags: [{ name: 'league_of_legends', modifier: '+' }],
			icon: leagueOfLegendsIcon
		},
		{ name: 'Overwatch', tags: [{ name: 'overwatch', modifier: '+' }], icon: overwatchIcon },
		{ name: 'Nintendo', tags: [{ name: 'nintendo', modifier: '+' }], icon: '' },
		{ name: 'Zenless Zone Zero', tags: [{ name: 'zenless_zone_zero', modifier: '+' }], icon: '' },
		{ name: 'Zelda', tags: [{ name: 'the_legend_of_zelda', modifier: '+' }], icon: '' },
		{ name: 'Marvel Rivals', tags: [{ name: 'marvel_rivals', modifier: '+' }], icon: '' },
		{ name: 'Marvel', tags: [{ name: 'marvel', modifier: '+' }], icon: '' },
		{ name: 'Mario', tags: [{ name: 'mario_(series)', modifier: '+' }], icon: '' },
		{ name: 'Sonic', tags: [{ name: 'sonic_(series)', modifier: '+' }], icon: '' },
		{ name: 'Xenoblade', tags: [{ name: 'xenoblade_(series)', modifier: '+' }], icon: '' }
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
		{ name: 'Straight', tags: [{ name: 'straight', modifier: '+' }], icon: '' },
		{ name: 'Blacked', tags: [{ name: 'blacked', modifier: '+' }], icon: blackedIcon },
		{ name: 'Futanari', tags: [{ name: 'futanari', modifier: '+' }], icon: futanariIcon },
		{ name: 'Futa x Male', tags: [{ name: 'futa_on_male', modifier: '+' }], icon: '' }
	]);

	const characters = Object.freeze([
		{name: 'Nami', tags: [{name: 'nami_(one_piece)', modifier: '+'}],icon: ''},
		{name: 'Tifa', tags: [{name: 'tifa_lockhart', modifier: '+'}],icon: ''},
		{name: 'Princess Peach', tags: [{name: 'princess_peach', modifier: '+'}],icon: ''},
		{name: 'Rouge', tags: [{name: 'rouge_the_bat', modifier: '+'}],icon: ''},
		{name: 'Hinata', tags: [{name: 'hyuuga_hinata', modifier: '+'}],icon: ''},
		{name: 'Loona', tags: [{name: 'loona_(helluva_boss)', modifier: '+'}],icon: ''},
		{name: 'Gardevoir', tags: [{name: 'gardevoir', modifier: '+'}],icon: ''},
		{name: '2B', tags: [{name: 'yorha_2b', modifier: '+'}],icon: ''},
		{name: 'Amy', tags: [{name: 'amy_rose', modifier: '+'}],icon: ''},
		{name: 'Raven', tags: [{name: 'raven_(dc)', modifier: '+'}],icon: ''},
		{name: 'Chun-Li', tags: [{name: 'chun-li', modifier: '+'}],icon: ''},
		{name: 'Sakura', tags: [{name: 'sakura_haruno', modifier: '+'}],icon: ''},
		{name: 'Princess Zelda', tags: [{name: 'princess_zelda', modifier: '+'}],icon: ''},
		{name: 'Hatsune Miku', tags: [{name: 'hatsune_miku', modifier: '+'}],icon: ''},
		{name: 'Lucario', tags: [{name: 'lucario', modifier: '+'}],icon: ''},
		{name: 'Tsunade', tags: [{name: 'tsunade', modifier: '+'}],icon: ''},
		{name: 'Sonic', tags: [{name: 'sonic_the_hedgehog', modifier: '+'}],icon: ''},
		{name: 'Samus', tags: [{name: 'samus_aran', modifier: '+'}],icon: ''},
		{name: 'Naruto', tags: [{name: 'uzumaki_naruto', modifier: '+'}],icon: ''},
		{name: 'D.Va', tags: [{name: 'd.va', modifier: '+'}],icon: ''},
		{name: 'Renamon', tags: [{name: 'renamon', modifier: '+'}],icon: ''},
		{name: 'Link', tags: [{name: 'link', modifier: '+'}],icon: ''},
		{name: 'Lara Croft', tags: [{name: 'lara_croft', modifier: '+'}],icon: ''},
		{name: 'Nico Robin', tags: [{name: 'nico_robin', modifier: '+'}],icon: ''},
		{name: 'Anon', tags: [{name: 'anon', modifier: '+'}],icon: ''},
		{name: 'Widowmaker', tags: [{name: 'widowmaker', modifier: '+'}],icon: ''},
		{name: 'Ochako Uraraka', tags: [{name: 'ochako_uraraka', modifier: '+'}],icon: ''},
		{name: 'Makima', tags: [{name: 'makima_(chainsaw_man)', modifier: '+'}],icon: ''},
		{name: 'Mercy', tags: [{name: 'mercy', modifier: '+'}],icon: ''},
		{name: 'Aether', tags: [{name: 'aether_(genshin_impact)', modifier: '+'}],icon: ''},
		{name: 'Ahri', tags: [{name: 'ahri', modifier: '+'}],icon: ''},
		{name: 'Tails', tags: [{name: 'tails_the_fox', modifier: '+'}],icon: ''},
		{name: 'Izuku Midoriya', tags: [{name: 'izuku_midoriya', modifier: '+'}],icon: ''},
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

		for (const { name, modifier } of tags) {
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
		{#each characters as { name, tags, icon }}
			<QuickSearchTag {name} {icon} onclick={() => submit(tags)} />
		{/each}
	</QuickSearchList>

	<QuickSearchList name="Artists">
		{#each artists as { name, tags, icon }}
			<QuickSearchTag {name} {icon} onclick={() => submit(tags)} />
		{/each}
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

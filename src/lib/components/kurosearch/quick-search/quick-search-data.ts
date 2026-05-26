// Categories
import ahegao from '$lib/assets/build/categories/ahegao.webp';
import anal from '$lib/assets/build/categories/anal.webp';
import anthro from '$lib/assets/build/categories/anthro.webp';
import blowjob from '$lib/assets/build/categories/blowjob.webp';
import cock_worship from '$lib/assets/build/categories/cock_worship.webp';
import creampie from '$lib/assets/build/categories/creampie.webp';
import feet from '$lib/assets/build/categories/feet.webp';
import femboy from '$lib/assets/build/categories/femboy.webp';
import femdom from '$lib/assets/build/categories/femdom.webp';
import footjob from '$lib/assets/build/categories/footjob.webp';
import furry from '$lib/assets/build/categories/furry.webp';
import incest from '$lib/assets/build/categories/incest.webp';
import milf from '$lib/assets/build/categories/milf.webp';
import paizuri from '$lib/assets/build/categories/paizuri.webp';
import pov from '$lib/assets/build/categories/pov.webp';
import rimming from '$lib/assets/build/categories/rimming.webp';
import romantic from '$lib/assets/build/categories/romantic.webp';
import succubus from '$lib/assets/build/categories/succubus.webp';
import tentacle from '$lib/assets/build/categories/tentacle.webp';
import wholesome from '$lib/assets/build/categories/wholesome.webp';
import dark_skin from '$lib/assets/build/categories/dark_skin.webp';
import double_penetration from '$lib/assets/build/categories/double_penetration.webp';
import tattoo from '$lib/assets/build/categories/tattoo.webp';
import zoophilia from '$lib/assets/build/categories/zoophilia.webp';
import watersports from '$lib/assets/build/categories/watersports.webp';
import gaping from '$lib/assets/build/categories/gaping.webp';
import prolapse from '$lib/assets/build/categories/prolapse.webp';
import gangbang from '$lib/assets/build/categories/gangbang.webp';
import armpit from '$lib/assets/build/categories/armpit.webp';
import rape from '$lib/assets/build/categories/rape.webp';

// Franchises
import genshin_impact from '$lib/assets/build/franchises/genshin_impact.webp';
import league_of_legends from '$lib/assets/build/franchises/league_of_legends.webp';
import mario from '$lib/assets/build/franchises/mario.webp';
import marvel_rivals from '$lib/assets/build/franchises/marvel_rivals.webp';
import marvel from '$lib/assets/build/franchises/marvel.webp';
import nintendo from '$lib/assets/build/franchises/nintendo.webp';
import overwatch from '$lib/assets/build/franchises/overwatch.webp';
import pokemon from '$lib/assets/build/franchises/pokemon.webp';
import sonic from '$lib/assets/build/franchises/sonic.webp';
import xenoblade from '$lib/assets/build/franchises/xenoblade.webp';
import zelda from '$lib/assets/build/franchises/zelda.webp';
import zenless_zone_zero from '$lib/assets/build/franchises/zenless_zone_zero.webp';
import teen_titans from '$lib/assets/build/franchises/teen_titans.webp';

// Pairings
import blacked from '$lib/assets/build/pairings/blacked.webp';
import futa_on_male from '$lib/assets/build/pairings/futa_on_male.webp';
import futanari from '$lib/assets/build/pairings/futanari.webp';
import gay from '$lib/assets/build/pairings/gay.webp';
import straight from '$lib/assets/build/pairings/straight.webp';
import yuri from '$lib/assets/build/pairings/yuri.webp';

// Characters

import sakura from '$lib/assets/build/characters/sakura.webp';
import princesszelda from '$lib/assets/build/characters/princesszelda.webp';
import gardevoir from '$lib/assets/build/characters/gardevoir.webp';
import loona from '$lib/assets/build/characters/loona.webp';
import nami from '$lib/assets/build/characters/nami.webp';
import peach from '$lib/assets/build/characters/peach.webp';
import rouge from '$lib/assets/build/characters/rouge.webp';
import tifa from '$lib/assets/build/characters/tifa.webp';
import hinata from '$lib/assets/build/characters/hinata.webp';
import yorha2b from '$lib/assets/build/characters/2b.webp';
import chunli from '$lib/assets/build/characters/chunli.webp';
import raven from '$lib/assets/build/characters/raven.webp';
import amy from '$lib/assets/build/characters/amy.webp';

// Imports
import type { SortStoreData } from '$lib/store/sort-store';

export const LABELS_AI = Object.freeze({
	both: 'both',
	'no-ai': 'no ai',
	ai: 'only ai'
});

export const LABELS_MEDIA = Object.freeze({
	all: 'all',
	video: 'video',
	image: 'image',
	gif: 'gif',
	comic: 'comic'
});

export const LABELS_SORT = Object.freeze({
	new: 'new',
	best: 'best',
	random: 'random'
});

export const TAGS_AI = Object.freeze({
	both: [],
	'no-ai': [{ name: 'ai_generated', modifier: '-' }],
	ai: [{ name: 'ai_generated', modifier: '+' }]
} as Record<string, kurosearch.SearchableTag[]>);

export const TAGS_MEDIA = Object.freeze({
	all: [] as kurosearch.SearchableTag[],
	video: [{ name: 'video', modifier: '+' }],
	image: [{ name: 'animated', modifier: '-' }],
	gif: [{ name: 'animated_gif', modifier: '+' }],
	comic: [{ name: 'comic', modifier: '+' }]
} as Record<string, kurosearch.SearchableTag[]>);

export const SORT_VALUES = Object.freeze({
	new: { property: 'id', direction: 'desc' },
	best: { property: 'score', direction: 'desc' },
	random: { property: 'random', direction: 'desc' }
} as Record<string, SortStoreData>);

export interface TagData {
	name: string;
	tags: kurosearch.SearchableTag[];
	icon: string;
}

export interface CategoryData {
	Artists: TagData[];
	Categories: TagData[];
	Franchises: TagData[];
	Pairings: TagData[];
	Characters: TagData[];
}

export const quickSelectData = Object.freeze({
	Categories: [
		{ name: 'Femboy', tags: [{ name: 'femboy', modifier: '+' }], icon: femboy },
		{ name: 'Wholesome', tags: [{ name: 'wholesome', modifier: '+' }], icon: wholesome },
		{ name: 'Romantic', tags: [{ name: 'romantic', modifier: '+' }], icon: romantic },
		{ name: 'Femdom', tags: [{ name: 'femdom', modifier: '+' }], icon: femdom },
		{ name: 'Furry', tags: [{ name: 'furry', modifier: '+' }], icon: furry },
		{ name: 'Anthro', tags: [{ name: 'anthro', modifier: '+' }], icon: anthro },
		{ name: 'Tentacle', tags: [{ name: 'tentacle', modifier: '+' }], icon: tentacle },
		{ name: 'Pov', tags: [{ name: 'pov', modifier: '+' }], icon: pov },
		{ name: 'Incest', tags: [{ name: 'incest', modifier: '+' }], icon: incest },
		{ name: 'Succubus', tags: [{ name: 'succubus', modifier: '+' }], icon: succubus },
		{ name: 'Milf', tags: [{ name: 'milf', modifier: '+' }], icon: milf },
		{ name: 'Paizuri', tags: [{ name: 'paizuri', modifier: '+' }], icon: paizuri },
		{ name: 'Ahegao', tags: [{ name: 'ahegao', modifier: '+' }], icon: ahegao },
		{ name: 'Creampie', tags: [{ name: 'creampie', modifier: '+' }], icon: creampie },
		{ name: 'Rimming', tags: [{ name: 'rimming', modifier: '+' }], icon: rimming },
		{ name: 'Cock Worship', tags: [{ name: 'cock_worship', modifier: '+' }], icon: cock_worship },
		{ name: 'Anal', tags: [{ name: 'anal', modifier: '+' }], icon: anal },
		{ name: 'Blowjob', tags: [{ name: 'blowjob', modifier: '+' }], icon: blowjob },
		{ name: 'Dark Skin', tags: [{ name: 'dark_skin', modifier: '+' }], icon: dark_skin },
		{ name: 'Footjob', tags: [{ name: 'footjob', modifier: '+' }], icon: footjob },
		{ name: 'Tattoo', tags: [{ name: 'tattoo', modifier: '+' }], icon: tattoo },
		{
			name: 'Double Penetration',
			tags: [{ name: 'double penetration', modifier: '+' }],
			icon: double_penetration
		},
		{ name: 'Feet', tags: [{ name: 'feet', modifier: '+' }], icon: feet },
		{ name: 'Zoophilia', tags: [{ name: 'zoophilia', modifier: '+' }], icon: zoophilia },
		{ name: 'Watersports', tags: [{ name: 'watersports', modifier: '+' }], icon: watersports },
		{ name: 'Rape', tags: [{ name: 'rape', modifier: '+' }], icon: rape },
		{ name: 'Armpit', tags: [{ name: 'armpits', modifier: '+' }], icon: armpit },
		{ name: 'Gangbang', tags: [{ name: 'gangbang', modifier: '+' }], icon: gangbang },
		{ name: 'Gaping', tags: [{ name: 'gaping', modifier: '+' }], icon: gaping },
		{ name: 'Prolapse', tags: [{ name: 'prolapse', modifier: '+' }], icon: prolapse }
	],
	Franchises: [
		{ name: 'Pokemon', tags: [{ name: 'pokemon', modifier: '+' }], icon: pokemon },
		{
			name: 'Genshin Impact',
			tags: [{ name: 'genshin_impact', modifier: '+' }],
			icon: genshin_impact
		},
		{
			name: 'League of Legends',
			tags: [{ name: 'league_of_legends', modifier: '+' }],
			icon: league_of_legends
		},
		{ name: 'Overwatch', tags: [{ name: 'overwatch', modifier: '+' }], icon: overwatch },
		{ name: 'Nintendo', tags: [{ name: 'nintendo', modifier: '+' }], icon: nintendo },
		{
			name: 'Zenless Zone Zero',
			tags: [{ name: 'zenless_zone_zero', modifier: '+' }],
			icon: zenless_zone_zero
		},
		{ name: 'Zelda', tags: [{ name: 'the_legend_of_zelda', modifier: '+' }], icon: zelda },
		{
			name: 'Marvel Rivals',
			tags: [{ name: 'marvel_rivals', modifier: '+' }],
			icon: marvel_rivals
		},
		{ name: 'Marvel', tags: [{ name: 'marvel', modifier: '+' }], icon: marvel },
		{ name: 'Mario', tags: [{ name: 'mario_(series)', modifier: '+' }], icon: mario },
		{ name: 'Sonic', tags: [{ name: 'sonic_(series)', modifier: '+' }], icon: sonic },
		{ name: 'Xenoblade', tags: [{ name: 'xenoblade_(series)', modifier: '+' }], icon: xenoblade },
		{ name: 'Teen Titans', tags: [{ name: 'teen_titans', modifier: '+' }], icon: teen_titans }
	],
	Pairings: [
		{
			name: 'Lesbian',
			tags: [
				{ name: 'yuri', modifier: '~' },
				{ name: 'lesbian', modifier: '~' }
			],
			icon: yuri
		},
		{
			name: 'Gay',
			tags: [
				{ name: 'yaoi', modifier: '~' },
				{ name: 'gay', modifier: '~' }
			],
			icon: gay
		},
		{ name: 'Straight', tags: [{ name: 'straight', modifier: '+' }], icon: straight },
		{ name: 'Blacked', tags: [{ name: 'blacked', modifier: '+' }], icon: blacked },
		{ name: 'Futanari', tags: [{ name: 'futanari', modifier: '+' }], icon: futanari },
		{ name: 'Futa x Male', tags: [{ name: 'futa_on_male', modifier: '+' }], icon: futa_on_male }
	],
	Characters: [
		{ name: 'Nami', tags: [{ name: 'nami_(one_piece)', modifier: '+' }], icon: nami },
		{ name: 'Tifa', tags: [{ name: 'tifa_lockhart', modifier: '+' }], icon: tifa },
		{ name: 'Princess Peach', tags: [{ name: 'princess_peach', modifier: '+' }], icon: peach },
		{ name: 'Rouge', tags: [{ name: 'rouge_the_bat', modifier: '+' }], icon: rouge },
		{ name: 'Hinata', tags: [{ name: 'hyuuga_hinata', modifier: '+' }], icon: hinata },
		{ name: 'Loona', tags: [{ name: 'loona_(helluva_boss)', modifier: '+' }], icon: loona },
		{ name: 'Gardevoir', tags: [{ name: 'gardevoir', modifier: '+' }], icon: gardevoir },
		{ name: '2B', tags: [{ name: 'yorha_2b', modifier: '+' }], icon: yorha2b },
		{ name: 'Amy', tags: [{ name: 'amy_rose', modifier: '+' }], icon: amy },
		{ name: 'Raven', tags: [{ name: 'raven_(dc)', modifier: '+' }], icon: raven },
		{ name: 'Chun-Li', tags: [{ name: 'chun-li', modifier: '+' }], icon: chunli },
		{ name: 'Sakura', tags: [{ name: 'sakura_haruno', modifier: '+' }], icon: sakura },
		{
			name: 'Princess Zelda',
			tags: [{ name: 'princess_zelda', modifier: '+' }],
			icon: princesszelda
		},
		{ name: 'Hatsune Miku', tags: [{ name: 'hatsune_miku', modifier: '+' }], icon: '' },
		{ name: 'Lucario', tags: [{ name: 'lucario', modifier: '+' }], icon: '' },
		{ name: 'Tsunade', tags: [{ name: 'tsunade', modifier: '+' }], icon: '' },
		{ name: 'Sonic', tags: [{ name: 'sonic_the_hedgehog', modifier: '+' }], icon: '' },
		{ name: 'Samus', tags: [{ name: 'samus_aran', modifier: '+' }], icon: '' },
		{ name: 'Naruto', tags: [{ name: 'uzumaki_naruto', modifier: '+' }], icon: '' },
		{ name: 'D.Va', tags: [{ name: 'd.va', modifier: '+' }], icon: '' },
		{ name: 'Renamon', tags: [{ name: 'renamon', modifier: '+' }], icon: '' },
		{ name: 'Link', tags: [{ name: 'link', modifier: '+' }], icon: '' },
		{ name: 'Lara Croft', tags: [{ name: 'lara_croft', modifier: '+' }], icon: '' },
		{ name: 'Nico Robin', tags: [{ name: 'nico_robin', modifier: '+' }], icon: '' },
		{ name: 'Anon', tags: [{ name: 'anon', modifier: '+' }], icon: '' },
		{ name: 'Widowmaker', tags: [{ name: 'widowmaker', modifier: '+' }], icon: '' },
		{ name: 'Ochako Uraraka', tags: [{ name: 'ochako_uraraka', modifier: '+' }], icon: '' },
		{ name: 'Makima', tags: [{ name: 'makima_(chainsaw_man)', modifier: '+' }], icon: '' },
		{ name: 'Mercy', tags: [{ name: 'mercy', modifier: '+' }], icon: '' },
		{ name: 'Aether', tags: [{ name: 'aether_(genshin_impact)', modifier: '+' }], icon: '' },
		{ name: 'Ahri', tags: [{ name: 'ahri', modifier: '+' }], icon: '' },
		{ name: 'Tails', tags: [{ name: 'tails_the_fox', modifier: '+' }], icon: '' },
		{ name: 'Izuku Midoriya', tags: [{ name: 'izuku_midoriya', modifier: '+' }], icon: '' }
	],
	Artists: [
		{ name: 'Pixiewillow', tags: [{ name: 'pixiewillow', modifier: '+' }], icon: '' },
		{ name: 'Nyl2', tags: [{ name: 'nyl2', modifier: '+' }], icon: '' },
		{ name: 'Hentaudio', tags: [{ name: 'hentaudio', modifier: '+' }], icon: '' },
		{ name: 'Norori', tags: [{ name: 'norori', modifier: '+' }], icon: '' },
		{ name: 'Theobrobine', tags: [{ name: 'theobrobine', modifier: '+' }], icon: '' },
		{ name: 'Toushi Ryoku', tags: [{ name: 'toushi_ryoku', modifier: '+' }], icon: '' },
		{ name: 'Evilzorak', tags: [{ name: 'evilzorak', modifier: '+' }], icon: '' },
		{ name: 'Kittenvox', tags: [{ name: 'kittenvox', modifier: '+' }], icon: '' },
		{ name: 'Derpixon', tags: [{ name: 'derpixon', modifier: '+' }], icon: '' },
		{ name: 'Howlsfm', tags: [{ name: 'howlsfm', modifier: '+' }], icon: '' },
		{ name: 'Generalbutch', tags: [{ name: 'generalbutch', modifier: '+' }], icon: '' },
		{ name: 'Nagoonimation', tags: [{ name: 'nagoonimation', modifier: '+' }], icon: '' },
		{ name: 'Bordeaux_black', tags: [{ name: 'bordeaux_black', modifier: '+' }], icon: '' },
		{ name: 'Marota', tags: [{ name: 'marota_(imyme_maro)', modifier: '+' }], icon: '' },
		{ name: 'Opennsfwsp', tags: [{ name: 'opennsfwsp', modifier: '+' }], icon: '' },
		{ name: 'Kassioppiava', tags: [{ name: 'kassioppiava', modifier: '+' }], icon: '' },
		{ name: 'Chloeangelva', tags: [{ name: 'chloeangelva', modifier: '+' }], icon: '' },
		{ name: 'Midnight_datura', tags: [{ name: 'midnight_datura', modifier: '+' }], icon: '' },
		{ name: 'Suoiresnu', tags: [{ name: 'suoiresnu', modifier: '+' }], icon: '' },
		{ name: 'Amplected', tags: [{ name: 'amplected', modifier: '+' }], icon: '' },
		{ name: 'Pleasedbyviolet', tags: [{ name: 'pleasedbyviolet', modifier: '+' }], icon: '' },
		{ name: 'Cottontailva', tags: [{ name: 'cottontailva', modifier: '+' }], icon: '' },
		{ name: 'Akujisaitova', tags: [{ name: 'akujisaitova', modifier: '+' }], icon: '' },
		{ name: 'Rinn Mayy', tags: [{ name: 'rinn_mayy', modifier: '+' }], icon: '' },
		{ name: 'Unepicroachy', tags: [{ name: 'unepicroachy', modifier: '+' }], icon: '' },
		{ name: 'Zerodiamonds', tags: [{ name: 'zerodiamonds', modifier: '+' }], icon: '' },
		{ name: 'Hard-degenerate', tags: [{ name: 'hard-degenerate', modifier: '+' }], icon: '' },
		{ name: 'Hydrafxx', tags: [{ name: 'hydrafxx', modifier: '+' }], icon: '' },
		{ name: 'Oolay-tiger', tags: [{ name: 'oolay-tiger', modifier: '+' }], icon: '' },
		{ name: 'Fugtrup', tags: [{ name: 'fugtrup', modifier: '+' }], icon: '' },
		{ name: 'Tsuzura', tags: [{ name: 'tsuzura_(pixiv74922627)', modifier: '+' }], icon: '' },
		{ name: 'Moneti', tags: [{ name: 'moneti_(daifuku)', modifier: '+' }], icon: '' },
		{ name: 'Ivan e Recshun', tags: [{ name: 'ivan_e_recshun', modifier: '+' }], icon: '' },
		{ name: 'Kittyyevil', tags: [{ name: 'kittyyevil', modifier: '+' }], icon: '' },
		{ name: 'Lehornysfx', tags: [{ name: 'lehornysfx', modifier: '+' }], icon: '' },
		{ name: 'Slayed.coom', tags: [{ name: 'slayed.coom', modifier: '+' }], icon: '' },
		{ name: 'Schpicy', tags: [{ name: 'schpicy', modifier: '+' }], icon: '' },
		{ name: 'Volkor', tags: [{ name: 'volkor', modifier: '+' }], icon: '' },
		{ name: 'Macstarva', tags: [{ name: 'macstarva', modifier: '+' }], icon: '' },
		{ name: 'Lecheryamoreva', tags: [{ name: 'lecheryamoreva', modifier: '+' }], icon: '' },
		{ name: 'Jackerman', tags: [{ name: 'jackerman', modifier: '+' }], icon: '' },
		{
			name: 'Kashiwamochi Yomogi',
			tags: [{ name: 'kashiwamochi_yomogi', modifier: '+' }],
			icon: ''
		},
		{ name: 'Ginagaloreva', tags: [{ name: 'ginagaloreva', modifier: '+' }], icon: '' },
		{ name: 'Leebongchun', tags: [{ name: 'leebongchun', modifier: '+' }], icon: '' },
		{ name: 'Omikami', tags: [{ name: 'omikami', modifier: '+' }], icon: '' },
		{ name: 'Sia Mofu', tags: [{ name: 'sia_mofu', modifier: '+' }], icon: '' },
		{ name: 'Th3k1d', tags: [{ name: 'th3k1d', modifier: '+' }], icon: '' },
		{ name: 'Setsugetsuka436', tags: [{ name: 'setsugetsuka436', modifier: '+' }], icon: '' },
		{ name: 'Hamaburicchi', tags: [{ name: 'hamaburicchi', modifier: '+' }], icon: '' },
		{ name: 'Anda Inmu', tags: [{ name: 'anda_inmu', modifier: '+' }], icon: '' }
	]
} as CategoryData);

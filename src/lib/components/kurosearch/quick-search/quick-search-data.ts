// Categories
import ahegao from '$lib/assets/categories/ahegao.png';
import anal from '$lib/assets/categories/anal.png';
import anthro from '$lib/assets/categories/anthro.png';
import blowjob from '$lib/assets/categories/blowjob.png';
import cock_worship from '$lib/assets/categories/cock_worship.png';
import creampie from '$lib/assets/categories/creampie.png';
import feet from '$lib/assets/categories/feet.jpeg';
import femboy from '$lib/assets/categories/femboy.png';
import femdom from '$lib/assets/categories/femdom.png';
import footjob from '$lib/assets/categories/footjob.png';
import furry from '$lib/assets/categories/furry.jpg';
import incest from '$lib/assets/categories/incest.png';
import milf from '$lib/assets/categories/milf.png';
import paizuri from '$lib/assets/categories/paizuri.png';
import pov from '$lib/assets/categories/pov.png';
import rimming from '$lib/assets/categories/rimming.png';
import romantic from '$lib/assets/categories/romantic.png';
import succubus from '$lib/assets/categories/succubus.png';
import tentacle from '$lib/assets/categories/tentacle.png';
import wholesome from '$lib/assets/categories/wholesome.png';
import dark_skin from '$lib/assets/categories/dark_skin.png';
import double_penetration from '$lib/assets/categories/double_penetration.png';
import tattoo from '$lib/assets/categories/tattoo.png';
import zoophilia from '$lib/assets/categories/zoophilia.png';
import watersports from '$lib/assets/categories/watersports.png';
import gaping from '$lib/assets/categories/gaping.png';
import prolapse from '$lib/assets/categories/prolapse.png';
import gangbang from '$lib/assets/categories/gangbang.png';
import armpit from '$lib/assets/categories/armpit.png';
import rape from '$lib/assets/categories/rape.png';

// Franchises
import genshin_impact from '$lib/assets/franchises/genshin_impact.png';
import league_of_legends from '$lib/assets/franchises/league_of_legends.png';
import mario from '$lib/assets/franchises/mario.png';
import marvel_rivals from '$lib/assets/franchises/marvel_rivals.png';
import marvel from '$lib/assets/franchises/marvel.png';
import nintendo from '$lib/assets/franchises/nintendo.png';
import overwatch from '$lib/assets/franchises/overwatch.png';
import pokemon from '$lib/assets/franchises/pokemon.png';
import sonic from '$lib/assets/franchises/sonic.png';
import xenoblade from '$lib/assets/franchises/xenoblade.png';
import zelda from '$lib/assets/franchises/zelda.png';
import zenless_zone_zero from '$lib/assets/franchises/zenless_zone_zero.png';
import teen_titans from '$lib/assets/franchises/teen_titans.png';

// Pairings
import blacked from '$lib/assets/pairings/blacked.png';
import futa_on_male from '$lib/assets/pairings/futa_on_male.png';
import futanari from '$lib/assets/pairings/futanari.png';
import gay from '$lib/assets/pairings/gay.png';
import straight from '$lib/assets/pairings/straight.png';
import yuri from '$lib/assets/pairings/yuri.png';

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
	date: 'date',
	score: 'score',
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
	date: { property: 'id', direction: 'desc' },
	score: { property: 'score', direction: 'desc' },
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
		{ name: 'Nami', tags: [{ name: 'nami_(one_piece)', modifier: '+' }], icon: '' },
		{ name: 'Tifa', tags: [{ name: 'tifa_lockhart', modifier: '+' }], icon: '' },
		{ name: 'Princess Peach', tags: [{ name: 'princess_peach', modifier: '+' }], icon: '' },
		{ name: 'Rouge', tags: [{ name: 'rouge_the_bat', modifier: '+' }], icon: '' },
		{ name: 'Hinata', tags: [{ name: 'hyuuga_hinata', modifier: '+' }], icon: '' },
		{ name: 'Loona', tags: [{ name: 'loona_(helluva_boss)', modifier: '+' }], icon: '' },
		{ name: 'Gardevoir', tags: [{ name: 'gardevoir', modifier: '+' }], icon: '' },
		{ name: '2B', tags: [{ name: 'yorha_2b', modifier: '+' }], icon: '' },
		{ name: 'Amy', tags: [{ name: 'amy_rose', modifier: '+' }], icon: '' },
		{ name: 'Raven', tags: [{ name: 'raven_(dc)', modifier: '+' }], icon: '' },
		{ name: 'Chun-Li', tags: [{ name: 'chun-li', modifier: '+' }], icon: '' },
		{ name: 'Sakura', tags: [{ name: 'sakura_haruno', modifier: '+' }], icon: '' },
		{ name: 'Princess Zelda', tags: [{ name: 'princess_zelda', modifier: '+' }], icon: '' },
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

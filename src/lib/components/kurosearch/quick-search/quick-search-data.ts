// Categories
import ahegao from '$lib/assets/categories/ahegao.png';
import anal from '$lib/assets/categories/anal.png';
import anthro from '$lib/assets/categories/anthro.png';
import blacked from '$lib/assets/categories/blacked.png';
import blowjob from '$lib/assets/categories/blowjob.png';
import cock_worship from '$lib/assets/categories/cock_worship.png';
import creampie from '$lib/assets/categories/creampie.png';
import feet from '$lib/assets/categories/feet.jpeg';
import femboy from '$lib/assets/categories/femboy.png';
import femdom from '$lib/assets/categories/femdom.png';
import footjob from '$lib/assets/categories/footjob.jpg';
import furry from '$lib/assets/categories/furry.jpg';
import futanari from '$lib/assets/categories/futanari.png';
import incest from '$lib/assets/categories/incest.png';
import milf from '$lib/assets/categories/milf.png';
import paizuri from '$lib/assets/categories/paizuri.png';
import pov from '$lib/assets/categories/pov.png';
import rimming from '$lib/assets/categories/rimming.png';
import romantic from '$lib/assets/categories/romantic.png';
import succubus from '$lib/assets/categories/succubus.png';
import tentacle from '$lib/assets/categories/tentacle.png';
import wholesome from '$lib/assets/categories/wholesome.png';

// Franchises
import leagueOfLegendsIcon from '$lib/assets/franchises/league_of_legends.png';
import genshinImpactIcon from '$lib/assets/franchises/genshin_impact.png';
import pokemonIcon from '$lib/assets/franchises/pokemon.png';
import overwatchIcon from '$lib/assets/franchises/overwatch.png';
import TextButton from '$lib/components/pure/text-button/TextButton.svelte';

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
		{ name: 'Dark Skin', tags: [{ name: 'dark_skin', modifier: '+' }], icon: '' },
		{ name: 'Footjob', tags: [{ name: 'footjob', modifier: '+' }], icon: '' },
		{ name: 'Tattoo', tags: [{ name: 'tattoo', modifier: '+' }], icon: '' },
		{ name: 'Double Penetration', tags: [{ name: 'double penetration', modifier: '+' }], icon: '' },
		{ name: 'Feet', tags: [{ name: 'feet', modifier: '+' }], icon: '' },
		{ name: 'Zoophilia', tags: [{ name: 'zoophilia', modifier: '+' }], icon: '' },
		{ name: 'Watersports', tags: [{ name: 'watersports', modifier: '+' }], icon: '' },
		{ name: 'Rape', tags: [{ name: 'rape', modifier: '+' }], icon: '' },
		{ name: 'Armpit', tags: [{ name: 'armpit', modifier: '+' }], icon: '' },
		{ name: 'Gangbang', tags: [{ name: 'gangbang', modifier: '+' }], icon: '' },
		{ name: 'Prolapse', tags: [{ name: 'prolapse', modifier: '+' }], icon: '' }
	],
	Franchises: [
		{ name: 'Pokemon', tags: [{ name: 'pokemon', modifier: '+' }], icon: pokemonIcon },
		{
			name: 'Genshin Impact',
			tags: [{ name: 'genshin_impact', modifier: '+' }],
			icon: genshinImpactIcon
		},
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
	],
	Pairings: [
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
		{ name: 'Blacked', tags: [{ name: 'blacked', modifier: '+' }], icon: blacked },
		{ name: 'Futanari', tags: [{ name: 'futanari', modifier: '+' }], icon: futanari },
		{ name: 'Futa x Male', tags: [{ name: 'futa_on_male', modifier: '+' }], icon: '' }
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

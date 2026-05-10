<script lang="ts">
	import QuickSearchTag from './QuickSearchTag.svelte';
	import QuickSearchGroup from './QuickSearchGroup.svelte';
	import activeTags from '$lib/store/active-tags-store';
	import results from '$lib/store/results-store';
	import { goto } from '$app/navigation';

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
	import QuickSearchMedia from './QuickSearchMedia.svelte';

	const categories = [
		{ name: 'Tentacle', tag: 'tentacle', icon: tentacleIcon },
		{ name: 'Futanari', tag: 'futanari', icon: futanariIcon },
		{ name: 'Paizuri', tag: 'paizuri', icon: paizuriIcon },
		{ name: 'Ahegao', tag: 'ahegao', icon: ahegaoIcon },
		{ name: 'Creampie', tag: 'creampie', icon: creampieIcon },
		{ name: 'Anal', tag: 'anal', icon: analIcon },
		{ name: 'Blacked', tag: 'blacked', icon: blackedIcon },
		{ name: 'Blowjob', tag: 'blowjob', icon: blowjobIcon }
	];

	const franchises = [
		{ name: 'Pokemon', tag: 'pokemon', icon: pokemonIcon },
		{ name: 'Genshin Impact', tag: 'genshin_impact', icon: genshinImpactIcon },
		{ name: 'League of Legends', tag: 'league_of_legends', icon: leagueOfLegendsIcon },
		{ name: 'Overwatch', tag: 'overwatch', icon: overwatchIcon }
	];

	let mediaTags = $state([] as kurosearch.SearchableTag[]);

	const submit = async (tag: string) => {
		activeTags.reset();
		activeTags.addByName(tag);
		for (const mediaTag of mediaTags) {
			activeTags.addByName(mediaTag.name, mediaTag.modifier);
		}
		results.reset();
		goto('/');
	};
</script>

<QuickSearchMedia
	setTags={(tags) => {
		mediaTags = tags;
	}}
/>

<QuickSearchGroup name="Categories">
	{#each categories as { name, tag, icon }}
		<QuickSearchTag {name} {icon} onclick={() => submit(tag)} />
	{/each}
</QuickSearchGroup>

<QuickSearchGroup name="Fandoms">
	{#each franchises as { name, tag, icon }}
		<QuickSearchTag {name} {icon} onclick={() => submit(tag)} />
	{/each}
</QuickSearchGroup>

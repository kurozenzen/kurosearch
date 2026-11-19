<script lang="ts">
	import LayoutMobile from '$lib/components/kurosearch/layout-mobile/LayoutMobile.svelte';
	import ScrollUpButton from '$lib/components/pure/button-scroll-up/ScrollUpButton.svelte';
	import { keybindsVideo } from '$lib/logic/keybinds/keyboard-utils';
	import { getFirstPage } from '$lib/logic/search.svelte';
	import { onMount } from 'svelte';
	import { on } from 'svelte/events';
	import LynxMain from './LynxMain.svelte';
	import SearchForm from './SearchForm.svelte';
	import { results } from '$lib/store';
	import ResultsMobile from '$lib/components/kurosearch/results/ResultsMobile.svelte';
	import ResultHeader from '$lib/components/kurosearch/results/ResultHeader.svelte';

	onMount(() => {
		if (results.value.postCount === 0) {
			getFirstPage();
		}
		return on(window, 'keydown', keybindsVideo);
	});
</script>

<svelte:head>
	<title>kurosearch - Rule34 Hentai</title>
	<meta
		name="description"
		content="Simple and powerful Rule34/Hentai browsing site with a focus on simplicity and user experience. Supports excluding tags, sorting and filtering."
	/>
	<link rel="canonical" href="https://kurosearch.com" />
</svelte:head>

<LayoutMobile>
	<LynxMain />
	<SearchForm />
	<ResultHeader />
	<ResultsMobile />
	<ScrollUpButton />
</LayoutMobile>

<style>
	:global(main) {
		display: flex;
		flex-direction: column;
		gap: var(--grid-gap);
	}
</style>

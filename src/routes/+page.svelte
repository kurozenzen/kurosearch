<script lang="ts">
	import SearchError from '$lib/components/kurosearch/error-search/SearchError.svelte';
	import LayoutMobile from '$lib/components/kurosearch/layout-mobile/LayoutMobile.svelte';
	import PageJump from '$lib/components/kurosearch/page-navigation/PageJump.svelte';
	import PageNavigation from '$lib/components/kurosearch/page-navigation/PageNavigation.svelte';
	import NoMoreResults from '$lib/components/kurosearch/results/NoMoreResults.svelte';
	import ResultHeader from '$lib/components/kurosearch/results/ResultHeader.svelte';
	import Results from '$lib/components/kurosearch/results/Results.svelte';
	import ZeroResults from '$lib/components/kurosearch/results/ZeroResults.svelte';
	import ScrollUpButton from '$lib/components/pure/button-scroll-up/ScrollUpButton.svelte';
	import IntersectionDetector from '$lib/components/pure/intersection-detector/IntersectionDetector.svelte';
	import LoadingAnimation from '$lib/components/pure/loading-animation/LoadingAnimation.svelte';
	import TextButton from '$lib/components/pure/text-button/TextButton.svelte';
	import { keybindsVideo } from '$lib/logic/keybinds/keyboard-utils';
	import { getFirstPage, getNextPage, getPage } from '$lib/logic/search';
	import pageNavigationEnabled from '$lib/store/page-navigation-enabled-store';
	import resultColumns from '$lib/store/result-columns-store';
	import results from '$lib/store/results-store';
	import { onMount } from 'svelte';
	import { on } from 'svelte/events';
	import LynxMain from './LynxMain.svelte';
	import SearchForm from './SearchForm.svelte';

	const onpagejump = async (pid: number) => {
		await getPage(pid);
		document.getElementById('result-header')?.scrollIntoView();
	};

	onMount(() => {
		if ($results.postCount === 0) {
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

	{#if $pageNavigationEnabled}
		<PageJump onpagechange={onpagejump} />
	{/if}

	<ResultHeader onsortfilterupdate={getFirstPage} />

	{#if $results.error}
		<SearchError error={$results.error} />
	{:else if $results.hasPage}
		<section>
			{#if $results.postCount === 0}
				<ZeroResults onsortfilterupdate={getFirstPage} />
			{:else}
				<Results onsortfilterupdate={getFirstPage} onendreached={getNextPage} />
				{#if $results.hasLastPage}
					<NoMoreResults />
				{:else if $pageNavigationEnabled}
					<PageNavigation
						onpagechange={(pid) => {
							getPage(pid);
							document.getElementById('result-header')?.scrollIntoView();
						}}
					/>
				{:else}
					<IntersectionDetector
						absoluteTop={undefined}
						rootMargin="{1000 / Number($resultColumns)}px"
						onintersection={getNextPage}
					/>
					<TextButton title="Load more posts" class="mixin-accent" onclick={getNextPage}>
						{#if $results.loading}
							<LoadingAnimation />
						{:else}
							Load more
						{/if}
					</TextButton>
				{/if}
			{/if}
		</section>
		<ScrollUpButton />
	{/if}

	{#if $results.loading}
		<div></div>
	{/if}
</LayoutMobile>

<style>
	:global(main) {
		display: flex;
		flex-direction: column;
		gap: var(--grid-gap);
	}

	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--grid-gap);
	}

	div {
		contain: strict;
		height: 100vh;
		border-radius: var(--border-radius-large);
		animation: sweep ease-in-out 3s infinite;
	}
</style>

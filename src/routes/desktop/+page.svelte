<script lang="ts">
	import FooterMobile from '$lib/components/kurosearch/footer/FooterMobile.svelte';
	import HeaderDesktop from '$lib/components/kurosearch/header-desktop/HeaderDesktop.svelte';
	import ActivePostDesktop from '$lib/components/kurosearch/post-desktop/ActivePostDesktop.svelte';
	import PostDesktop from '$lib/components/kurosearch/post-desktop/PostDesktop.svelte';
	import QuickSearch from '$lib/components/kurosearch/quick-search/QuickSearch.svelte';
	import { getFirstPage } from '$lib/logic/search';
	import { SkipDirection, skipVideo, toggleVideo } from '$lib/store/active-video.svelte';
	import results from '$lib/store/results-store';
	import { onMount } from 'svelte';
	import { on } from 'svelte/events';
	import ResultWrapper from '../result-wrapper/ResultWrapper.svelte';

	let activePost = $state<kurosearch.Post | undefined>(undefined);

	const keybinds = (event: KeyboardEvent) => {
		if (event.ctrlKey && event.key === 'Enter') {
			event.preventDefault();
			event.stopPropagation();
			getFirstPage();
		}

		if (
			document.activeElement?.tagName === 'INPUT' ||
			document.activeElement?.tagName === 'TEXTAREA'
		) {
			return;
		}

		if (
			(event.key === '/' || event.key === 's') &&
			(!document.activeElement || document.activeElement === document.body)
		) {
			event.preventDefault();
			event.stopPropagation();
			document.getElementById('searchbar')?.focus();
		}

		if (event.ctrlKey && event.key === 'm') {
			event.preventDefault();
			event.stopPropagation();
			document.getElementById('select-modifier')?.click();
		}

		switch ((event as KeyboardEvent).key) {
			case ' ':
			case 'k':
				if (toggleVideo()) {
					event.preventDefault();
					event.stopPropagation();
				}
				break;

			case 'ArrowLeft':
			case 'j':
				if (skipVideo(undefined, SkipDirection.Backward)) {
					event.preventDefault();
					event.stopPropagation();
				}
				break;

			case 'ArrowRight':
			case 'l':
				if (skipVideo(undefined, SkipDirection.Forward)) {
					event.preventDefault();
					event.stopPropagation();
				}
				break;
			case 'Escape':
				activePost = undefined;
				break;
		}
	};

	onMount(() => on(window, 'keydown', keybinds));
</script>

<svelte:head>
	<title>kurosearch - Rule34 Hentai</title>
	<meta
		name="description"
		content="Simple and powerful Rule34/Hentai browsing site with a focus on simplicity and user experience. Supports excluding tags, sorting and filtering."
	/>
	<link rel="canonical" href="https://kurosearch.com/desktop" />
</svelte:head>

<HeaderDesktop />

<main>
	{#if !$results.hasPage && !$results.loading}
		<QuickSearch onSubmit={getFirstPage} />
	{:else if $results.postCount === 0 && $results.loading}
		<div class="loading-panel">
			<div></div>
			<div></div>
			<div></div>
		</div>
	{:else}
		<section class="search-output">
			<ResultWrapper>
				<ol class="multi-column">
					{#each $results.posts as post (post.id)}
						<PostDesktop
							{post}
							onclick={() => {
								activePost = post;
							}}
						/>
					{/each}
				</ol>
			</ResultWrapper>
		</section>
	{/if}

	{#if activePost !== undefined}
		<ActivePostDesktop post={activePost} onclose={() => (activePost = undefined)} />
	{/if}
</main>

<FooterMobile />

<style>
	main {
		display: flex;
		flex-direction: column;
		gap: var(--grid-gap);
		max-width: 100vw;
		width: 100%;
		flex-grow: 1;
	}

	.search-output {
		grid-area: main;
		width: 100%;
		flex-grow: 1;
		contain: content;
	}

	ol {
		display: grid;
		gap: var(--grid-gap);
		grid-template-columns: repeat(3, minmax(0, 1fr));
		grid-auto-rows: 10vw;
		border-radius: var(--border-radius);
		margin-bottom: var(--grid-gap);
	}

	:global(.button-close) {
		position: fixed;
		top: var(--small-gap);
		left: var(--small-gap);
		z-index: var(--z-dialog);
	}

	.loading-panel {
		flex-grow: 1;
		display: flex;
		gap: var(--grid-gap);
		align-items: stretch;

		div {
			border-radius: var(--border-radius-large);
			animation: sweep ease-in-out 3s infinite;
			flex-grow: 1;
		}
	}
</style>

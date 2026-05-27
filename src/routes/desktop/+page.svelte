<script lang="ts">
	// Header
	// Body
	import FooterMobile from '$lib/components/kurosearch/footer/FooterMobile.svelte';
	import HeaderDesktop from '$lib/components/kurosearch/header-desktop/HeaderDesktop.svelte';
	import Comments from '$lib/components/kurosearch/post-comment/Comments.svelte';
	import PostDesktop from '$lib/components/kurosearch/post-desktop/PostDesktop.svelte';
	import { calculateAspectRatio } from '$lib/components/kurosearch/post/ratio';
	import QuickSearch from '$lib/components/kurosearch/quick-search/QuickSearch.svelte';
	import Rating from '$lib/components/kurosearch/rating/Rating.svelte';
	import RelativeTime from '$lib/components/kurosearch/relative-time/RelativeTime.svelte';
	import Score from '$lib/components/kurosearch/score/Score.svelte';
	import ExternalSource from '$lib/components/kurosearch/source-external/ExternalSource.svelte';
	import KurosearchSource from '$lib/components/kurosearch/source-kurosearch/KurosearchSource.svelte';
	import Rule34Source from '$lib/components/kurosearch/source-rule34/Rule34Source.svelte';
	import PostDetailsTagList from '$lib/components/kurosearch/tag-list/PostDetailsTagList.svelte';
	import IconButton from '$lib/components/pure/button-icon/IconButton.svelte';
	import { getGifSources, getVideoSources, isLoop } from '$lib/logic/media-utils';
	import { getFirstPage } from '$lib/logic/search';
	import { SkipDirection, skipVideo, toggleVideo } from '$lib/store/active-video.svelte';
	import alwaysLoop from '$lib/store/always-loop-store';
	import results from '$lib/store/results-store';
	import { onMount } from 'svelte';
	import { on } from 'svelte/events';
	import ResultWrapper from '../result-wrapper/ResultWrapper.svelte';

	console.log(
		'%ckurosearch\n%cHi, if you are reading this because you are debugging or reverse-engineering, feel free to send me a DM on Discord :)',
		'color:crimson;font-size:32px;',
		'color:unset;font-size:auto;'
	);

	let nextFocus = $state(0);
	let activePost = $state<kurosearch.Post | undefined>(undefined);

	let tagsByType = $derived(
		(activePost?.tags || []).reduce(
			(result, tag) => {
				if (result[tag.type] === undefined) {
					result[tag.type] = [];
				}

				result[tag.type].push(tag);

				return result;
			},
			{} as Record<string, kurosearch.Tag[]>
		)
	);

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
		{@const aspectRatio = calculateAspectRatio(activePost.width, activePost.height)}
		{@const vertical = aspectRatio > 1.5}
		{@const scrollable = aspectRatio < 0.4}
		{@const horizontal = !vertical && !scrollable}
		<section id="active-post" class:vertical class:scrollable class:horizontal>
			<IconButton
				class="button-close mixin-invisible"
				onclick={() => {
					activePost = undefined;
				}}
			>
				<i class="codicon codicon-close"></i>
			</IconButton>

			{#if activePost.type === 'video'}
				{@const sources = getVideoSources(
					activePost.file_url,
					activePost.sample_url,
					activePost.preview_url
				)}
				<!-- svelte-ignore a11y_media_has_caption -->
				<!-- svelte-ignore element_invalid_self_closing_tag -->
				<video
					src={sources.animated}
					poster={sources.static}
					width={activePost.width}
					height={activePost.height}
					loop={$alwaysLoop || isLoop(activePost.tags)}
					controls
				/>
			{/if}
			{#if activePost.type === 'gif'}
				{@const sources = getGifSources(
					activePost.file_url,
					activePost.sample_url,
					activePost.preview_url
				)}

				<img src={sources.animated} alt="active post" />
			{/if}
			{#if activePost.type === 'image'}
				{#if scrollable}
					<div id="media">
						<img src={activePost.file_url} alt="active post" />
					</div>
				{:else}
					<img src={activePost.file_url} alt="active post" />
				{/if}
			{/if}

			<div id="details">
				<h1>Post <b>#{activePost.id}</b></h1>
				<div class="flex-row">
					<Rating value={activePost.rating} />
					<span>•</span>
					<span>{activePost.type.toUpperCase()}</span>
					<span>•</span>
					<Score post={activePost} />
					<span>•</span>
					<RelativeTime value={activePost.change} />
				</div>
				<div class="flex-row">
					<KurosearchSource id={activePost.id} />
					<span>•</span>
					<ExternalSource
						source="https://rule34.xxx/index.php?page=post&s=view&id={activePost.id}"
					/>
					<span>•</span>
					<Rule34Source url={activePost.file_url} />
					{#if activePost.source}
						<span>•</span>
						<ExternalSource source={activePost.source} />
					{/if}
				</div>
				<div class="tags">
					{#each Object.entries(tagsByType) as [type, tags]}
						<div>
							<h3>{type}</h3>
							<PostDetailsTagList {tags} />
						</div>
					{/each}
				</div>

				<h3>Comments</h3>
				<Comments post={activePost} />
			</div>
		</section>
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

	#active-post {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 99;
		display: flex;
		background-color: var(--background-0);
	}

	.vertical {
		flex-direction: column;
		overflow: scroll;
	}

	.vertical img,
	.vertical video {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.horizontal,
	.scrollable {
		justify-content: center;
	}

	.horizontal img,
	.horizontal video {
		object-fit: contain;
	}

	.horizontal #details,
	.scrollable #details {
		flex: 0 1 50vw;
		overflow-y: auto;
	}

	.scrollable #media {
		flex: 0 0 70vh;
		width: 70vh;
		overflow-y: scroll;
	}
	.scrollable img {
		width: 100%;
		height: unset;
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

	:not(.vertical) #details {
		overflow-y: auto;
	}

	#details {
		display: flex;
		flex-direction: column;
		padding: var(--grid-gap);
		gap: var(--grid-gap);

		h3 {
			color: var(--text-highlight);
		}

		.flex-row {
			display: flex;
			align-items: center;
			gap: var(--small-gap);
			overflow-x: auto;
		}

		.tags {
			display: flex;
			gap: var(--grid-gap);
			flex-wrap: wrap;

			div {
				display: flex;
				flex-direction: column;
				gap: var(--small-gap);

				h3 {
					text-transform: capitalize;
				}
			}
		}
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

<script lang="ts">
	import SingleColumnPost from '$lib/components/kurosearch/post/SingleColumnPost.svelte';
	import SimpleTag from '$lib/components/kurosearch/tag-simple/SimpleTag.svelte';
	import PageGeneric from '$lib/components/pure/page-generic/PageGeneric.svelte';
	import Preference from '$lib/components/pure/preference/Preference.svelte';
	import { favouritePostsStore } from '$lib/store/favourite-posts-store';
	import activeTagsStore from '$lib/store/active-tags-store';
	import Select from '$lib/components/pure/select/Select.svelte';
	import {
		computeFavourteTags,
		TAG_FILTER_OPTIONS,
		TAG_LIMIT_OPTIONS,
		TAG_SORT_OPTIONS,
		type FavouriteTagLimit,
		type FavouriteTagSort,
		type TagTypeFilter
	} from './favourite-tags';

	let message = $derived.by(() => {
		if ($favouritePostsStore.ids.size == 0) {
			return "You haven't got any favourites yet";
		} else if ($favouritePostsStore.ids.size === 1) {
			return 'You have exactly one favourite post';
		} else {
			return `You have ${$favouritePostsStore.ids.size} favourite posts`;
		}
	});

	let tagFilter = $state<TagTypeFilter>('all');
	let tagSort = $state<FavouriteTagSort>('count');
	let tagLimit = $state<FavouriteTagLimit>('20');

	const favouriteTags = $derived(
		computeFavourteTags($favouritePostsStore.posts, tagFilter, tagSort, tagLimit)
	);
</script>

<svelte:head>
	<title>kurosearch - Favourites</title>
	<meta name="description" content="Your favourite posts." />
</svelte:head>

<PageGeneric title="Favourites">
	<Preference title="Info" description={message}></Preference>

	{#if $favouritePostsStore.posts.length > 0}
		<Preference title="Tags" description="Browse tags that appear on your favourite posts.">
			<div>
				<label>
					Filter Tags
					<Select options={TAG_FILTER_OPTIONS} bind:value={tagFilter} />
				</label>
				<label>
					Order Tags
					<Select options={TAG_SORT_OPTIONS} bind:value={tagSort} />
				</label>
				<label>
					Limit Tags
					<Select options={TAG_LIMIT_OPTIONS} bind:value={tagLimit} />
				</label>
			</div>
			<ol class="tags">
				{#each favouriteTags as tag}
					{@const active = $activeTagsStore.find((t) => t.name === tag.name) !== undefined}
					<SimpleTag
						{tag}
						{active}
						onclick={() => {
							active
								? activeTagsStore.removeByName(tag.name)
								: activeTagsStore.addOrReplace({ ...tag, modifier: '+' });
						}}
						topLevel
					/>
				{/each}
			</ol>
		</Preference>

		<Preference title="Posts" description="All your favourite posts are listed here.">
			<ol class="single-column">
				{#each $favouritePostsStore.posts as post (post.id)}
					<SingleColumnPost {post} onfullscreen={() => {}} />
				{/each}
			</ol>
		</Preference>
	{/if}
</PageGeneric>

<style>
	.tags {
		margin-block-start: var(--small-gap);
		display: flex;
		flex-wrap: wrap;
		gap: var(--small-gap);
	}

	.single-column {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: var(--grid-gap);
	}

	label {
		color: var(--text-highlight);
		display: inline-flex;
		flex-direction: column;
		gap: var(--small-gap);
	}

	div {
		display: flex;
		flex-wrap: wrap;
		gap: var(--grid-gap);
	}
</style>

<script lang="ts">
	import results from '$lib/store/results-store';
	import resultColumns from '$lib/store/result-columns-store';
	import SortFilterConfig from '../sort-filter-config/SortFilterConfig.svelte';
	import { formatCount } from '$lib/logic/format-count';
	import SingleColumnPost from '../post/SingleColumnPost.svelte';
	import MosaicPost from '../post/MosaicPost.svelte';
	import Dialog from '$lib/components/pure/dialog/Dialog.svelte';

	let viewing: undefined | kurosearch.Post;
</script>

<div>
	<span>{formatCount($results.postCount)} posts</span>
	<SortFilterConfig />
</div>

{#if $resultColumns === '1'}
	<section class="single">
		{#each $results.posts as post}
			<SingleColumnPost {post} />
		{/each}
	</section>
{:else}
	<section class="multi" style="grid-template-columns: repeat({$resultColumns}, 1fr);">
		{#each $results.posts as post}
			<MosaicPost {post} on:click={() => (viewing = post)} />
		{/each}
	</section>

	{#if viewing !== undefined}
		<Dialog on:close={() => (viewing = undefined)}>
			<article>
				<SingleColumnPost post={viewing} open />
			</article>
		</Dialog>
	{/if}
{/if}

<style>
	div {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
	}

	@media (width <= calc(800px + 2rem)) {
		div {
			padding-inline: var(--grid-gap);
		}
	}

	.single {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.multi {
		width: 100%;
		display: grid;
		gap: 0.5rem;
	}

	article {
		width: 95vw;
		height: 95vh;
		overflow-y: auto;
	}
</style>

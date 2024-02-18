<script>
	import { base } from '$app/paths';
	import TextButton from '$lib/components/pure/text-button/TextButton.svelte';
	import activeSupertagsStore from '$lib/store/active-supertags-store';
	import activeTagsStore from '$lib/store/active-tags-store';
</script>

<section>
	<img
		src="{base}/assets/lynxy-chibi-not-found.webp"
		alt="No more results to load"
		width="1231"
		height="864"
	/>

	<p>You have seen everything there is to see...</p>
	<div>
		<TextButton
			type="secondary"
			title="Scroll back up."
			on:click={() => {
				window.scrollTo({ top: 0 });
			}}
		>
			Back to Top
		</TextButton>
		<TextButton
			type="secondary"
			title="Reset tags."
			on:click={() => {
				activeTagsStore.reset();
				activeSupertagsStore.reset();
			}}
		>
			Reset Tags
		</TextButton>
	</div>
</section>

<style>
	section {
		overflow: hidden;
		background-color: var(--background-1);
		max-width: 400px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--grid-gap);
	}

	@media (min-width: 400px) {
		section {
			border-radius: var(--border-radius-large);
		}
	}

	img {
		display: block;
		object-fit: cover;
		aspect-ratio: 1231 / 864;
		max-width: 100%;
		max-height: 300px;
	}

	div {
		display: flex;
		gap: var(--grid-gap);
		padding-block-end: var(--grid-gap);
	}
</style>

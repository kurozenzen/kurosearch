<script module lang="ts">
	const validateTags = (
		activeTags: kurosearch.ModifiedTag[],
		blockedContent: Record<kurosearch.BlockingGroup, boolean>,
		activeSupertags: kurosearch.Supertag[]
	) => {
		const supertags = activeSupertags.flatMap((supertagEntry) =>
			supertagEntry.tags.map((tag) => ({ ...tag, supertag: supertagEntry.name }))
		);
		const blockedTags = (Object.keys(blockedContent) as kurosearch.BlockingGroup[])
			.filter((x) => x in BLOCKING_GROUP_TAGS)
			.flatMap((groupName) =>
				BLOCKING_GROUP_TAGS[groupName].map((name) => ({
					modifier: '-',
					name,
					group: groupName
				}))
			);

		const errors = [];

		for (const tag of activeTags) {
			const matchingBlockedTag = blockedTags.find((blockedTag) => blockedTag.name === tag.name);
			if (tag.modifier !== '-' && matchingBlockedTag) {
				errors.push(`"${tag.name}" is blocked by "${matchingBlockedTag.group}" in preferences.`);
			}

			const matchingSupertag = supertags.find((supertag) => supertag.name === tag.name);
			if (matchingSupertag) {
				if (tag.modifier === '-' && matchingSupertag.modifier !== '-') {
					errors.push(
						`"${tag.name}" is excluded but required by supertag "${matchingSupertag.supertag}".`
					);
				}
				if (tag.modifier !== '-' && matchingSupertag.modifier === '-') {
					errors.push(
						`"${tag.name}" is required but excluded by supertag "${matchingSupertag.supertag}".`
					);
				}
			}
		}

		for (const tag of supertags) {
			const matchingBlockedTag = blockedTags.find((blockedTag) => blockedTag.name === tag.name);
			if (tag.modifier !== '-' && matchingBlockedTag) {
				errors.push(
					`"${tag.name}" (of supertag "${tag.supertag}") is blocked by "${matchingBlockedTag.group}" in preferences.`
				);
			}

			const matchingSupertag = supertags.find(
				(other) => other.supertag !== tag.supertag && other.name === tag.name
			);
			if (matchingSupertag) {
				if (tag.modifier === '-' && matchingSupertag.modifier !== '-') {
					errors.push(
						`"${tag.name}" is excluded by "${tag.supertag}" but required by supertag "${matchingSupertag.supertag}".`
					);
				}
				if (tag.modifier !== '-' && matchingSupertag.modifier === '-') {
					errors.push(
						`"${tag.name}" is required by "${tag.supertag}" but excluded by supertag "${matchingSupertag.supertag}".`
					);
				}
			}
		}

		return errors;
	};
</script>

<script lang="ts">
	import notFoundSrc from '$lib/assets/lynxy-chibi-not-found.webp';
	import TextButton from '$lib/components/pure/button-text/TextButton.svelte';
	import { BLOCKING_GROUP_TAGS } from '$lib/logic/blocking-group-data';
	import { activeSupertags, activeTags, blockedContent, filter, sort } from '$lib/store';

	interface Props {
		onsortfilterupdate: () => void;
	}

	let { onsortfilterupdate }: Props = $props();

	let conflictingTags = $derived(
		validateTags(activeTags.value, blockedContent.value, activeSupertags.value)
	);
</script>

<section>
	<img src={notFoundSrc} alt="Nothing here..." width="1231" height="864" />

	{#if conflictingTags.length}
		<h6>
			<b>⚠</b>
			<span>Conflicting tags detected</span>
			<b>⚠</b>
		</h6>
		<ul>
			{#each conflictingTags as error}
				<li>
					<b>⚠</b>
					<span>{error}</span>
				</li>
			{/each}
		</ul>
	{:else}
		<p>We couldn't find any posts matching your tags. Sorry...</p>
	{/if}
	<div>
		<TextButton
			title="In case your filter caused all posts to vanish. Reset it."
			class="mixin-secondary"
			onclick={() => {
				filter.reset();
				sort.reset();
				onsortfilterupdate();
			}}
		>
			Reset Filter
		</TextButton>
		<TextButton
			title="Tag combinations that are too specific will not yield results."
			class="mixin-secondary"
			onclick={() => {
				filter.reset();
				sort.reset();
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
		border-radius: var(--border-radius-large);
		margin: auto;
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

	ul {
		display: flex;
		flex-direction: column;
		gap: var(--small-gap);
		padding-inline: var(--small-gap);
	}

	h6 {
		font-size: var(--font-size);
		background-color: #413c26;
		color: #ffe169;
		width: 100%;
		text-align: center;
		padding: var(--small-gap);
	}

	li {
		background-color: #413c26;
		color: #ffe169;
		padding: var(--small-gap);
		border-radius: var(--border-radius-small);
		display: flex;
		gap: var(--small-gap);
		align-items: center;
	}

	b {
		color: #fe8d59;
	}
</style>

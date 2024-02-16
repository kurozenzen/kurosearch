<script lang="ts">
	import { getShareUrl } from '$lib/logic/url-parsing';
	import activeTags from '$lib/store/active-tags-store';
	import sort from '$lib/store/sort-store';
	import filter from '$lib/store/filter-store';
	import TagButton from '../button-tag/TagButton.svelte';

	const share = async () => {
		const shareData = {
			title: 'kurosearch',
			text: 'Saved Search Configuration',
			url: getShareUrl($activeTags, $sort, $filter).toString()
		};

		try {
			await navigator.share(shareData);
		} catch (err) {
			// ignored
		}
	};
</script>

<TagButton title="Share current search." icon="codicon codicon-copy" on:click={share} />

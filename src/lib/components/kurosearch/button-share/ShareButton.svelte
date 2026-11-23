<script lang="ts" module>
	import { getShareUrl } from '#lib/logic/url-parsing';
	import TagButton from '../button-tag/TagButton.svelte';
	import { activeSupertags, activeTags, filter, sort } from '#lib/store';

	const share = async () => {
		const shareData: ShareData = {
			title: 'kurosearch',
			text: `Created ${new Date().toLocaleDateString()}`,
			url: getShareUrl(activeTags.value, activeSupertags.value, sort.value, filter.value).toString()
		};

		try {
			await navigator.share(shareData);
		} catch (_err) {
			// ignored
		}
	};
</script>

<TagButton title="Share current search." onclick={share} class="codicon codicon-share" />

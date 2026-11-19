<script lang="ts">
	import { getShareUrl } from '$lib/logic/url-parsing';
	import TagButton from '../button-tag/TagButton.svelte';
	import { activeTags, filter, sort } from '$lib/store';

	const share = async () => {
		const shareData: ShareData = {
			title: 'kurosearch',
			text: `Created ${new Date().toLocaleDateString()}`,
			url: getShareUrl(activeTags.value, sort.value, filter.value).toString()
		};

		try {
			await navigator.share(shareData);
		} catch (_err) {
			// ignored
		}
	};
</script>

<TagButton title="Share current search." onclick={share}>
	<i class="codicon codicon-share"></i>
</TagButton>

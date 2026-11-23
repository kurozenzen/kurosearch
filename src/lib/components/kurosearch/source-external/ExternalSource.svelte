<script lang="ts">
	import { isValidUrl } from '#lib/logic/url-utils';

	interface Props {
		source: string;
	}

	let { source }: Props = $props();

	let url = $derived(isValidUrl(source) ? new URL(source) : null);
	let label = $derived(url?.hostname?.replace(/^www./, ''));
</script>

{#if url}
	<a href={url.toString()} target="_newtab">
		<i class="mixin-icon-text codicon codicon-link"></i>
		{label}
	</a>
{/if}

<style>
	a {
		color: var(--text-link);
		font-size: var(--text-size);
		text-decoration: none;
	}
</style>

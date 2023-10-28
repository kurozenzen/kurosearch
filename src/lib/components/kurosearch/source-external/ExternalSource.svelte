<script lang="ts">
	import { isValidUrl } from '$lib/logic/url-utils';

	export let source: string;

	$: url = isValidUrl(source) ? new URL(source) : null;
	$: label = url?.hostname?.replace(/^www./, '');
</script>

{#if url}
	<a href={url.toString()} target="_newtab"><i class="codicon codicon-link" /> {label}</a>
{/if}

<style>
	a {
		color: var(--text-link);
		font-size: var(--text-size);
		text-decoration: none;
		white-space: nowrap;
		display: inline-flex;
		gap: var(--tiny-gap);
		align-items: center;
	}
</style>

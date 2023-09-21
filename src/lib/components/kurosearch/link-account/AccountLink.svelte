<script lang="ts">
	import { base } from '$app/paths';
	import IconLink from '$lib/components/pure/icon-link/IconLink.svelte';

	export let src: string | undefined;
</script>

<IconLink title="Account" href="{base}/account">
	{#if src}
		<img class="profile-picture" {src} alt="Account" />
	{:else}
		<i class="codicon codicon-account" />
	{/if}
</IconLink>

<style>
	img,
	i {
		width: 16px;
		height: 16px;
		border-radius: 8px;
	}
</style>

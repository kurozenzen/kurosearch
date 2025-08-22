<script lang="ts">
	import PageJump from './PageJump.svelte';
	import results from '$lib/store/results-store';
	import { PAGE_SIZE } from '$lib/logic/api-client/ApiClient';
	import PageButton, { pageLabel } from './PageButton.svelte';

	interface Props {
		onpagechange: (newPage: number) => void;
	}

	let { onpagechange }: Props = $props();

	let totalPages = $derived(Math.ceil($results.postCount / PAGE_SIZE));

	const firstPid = 0;
	let prevPid = $derived($results.pageCount - 2);
	let currPid = $derived($results.pageCount - 1);
	let nextPid = $derived($results.pageCount);
	let lastPid = $derived(Math.min(totalPages - 1, 9999));
</script>

<div>
	{#if prevPid > firstPid}
		<PageButton pid={0} onclick={() => onpagechange(0)} />
	{/if}
	{#if prevPid > 1}
		<i class="codicon codicon-ellipsis"></i>
	{/if}
	{#if prevPid >= 0}
		<PageButton pid={prevPid} onclick={() => onpagechange(prevPid)} />
	{/if}
	<span>
		{pageLabel(currPid)}
	</span>
	{#if nextPid <= lastPid}
		<PageButton pid={nextPid} onclick={() => onpagechange(nextPid)} />
	{/if}
	{#if lastPid - nextPid > 1}
		<i class="codicon codicon-ellipsis"></i>
	{/if}
	{#if nextPid < lastPid}
		<PageButton pid={lastPid} onclick={() => onpagechange(lastPid)} />
	{/if}
</div>
<PageJump {onpagechange} />

<style>
	div {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		justify-content: center;
	}

	span {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0 0.5rem;
		min-width: var(--box-height);
		height: var(--box-height);
		color: var(--text-accent);
		background-color: var(--accent);
		border-radius: var(--border-radius);
	}
</style>

<script lang="ts">
	import PageJump from './PageJump.svelte';
	import { PAGE_SIZE } from '$lib/logic/api-client/ApiClient';
	import PageButton, { pageLabel } from './PageButton.svelte';
	import { results } from '$lib/store';

	interface Props {
		onpagechange: (newPage: number) => void;
	}

	let { onpagechange }: Props = $props();

	let totalPages = $derived(Math.ceil(results.value.postCount / PAGE_SIZE));

	const firstPid = 0;
	let prevPid = $derived(results.value.pageCount - 2);
	let currPid = $derived(results.value.pageCount - 1);
	let nextPid = $derived(results.value.pageCount);
	let lastPid = $derived(Math.min(totalPages - 1, 9999));
</script>

<PageJump />
<nav aria-label="Result page navigation">
	{#if prevPid > firstPid}
		<PageButton pid={0} onclick={() => onpagechange(0)} />
	{/if}
	{#if prevPid > 1}
		<i class="codicon codicon-ellipsis"></i>
	{/if}
	{#if prevPid >= 0}
		<PageButton pid={prevPid} onclick={() => onpagechange(prevPid)} />
	{/if}
	<span class="mixin-shape-box mixin-accent">
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
</nav>

<style>
	nav {
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
	}
</style>

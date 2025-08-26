<script lang="ts">
	import TextButton from '$lib/components/pure/text-button/TextButton.svelte';
	import { PAGE_SIZE } from '$lib/logic/api-client/ApiClient';
	import results from '$lib/store/results-store';
	import NumberInput from '../dialog-sort-filter/NumberInput.svelte';

	interface Props {
		onpagechange: (newPage: number) => void;
	}

	let { onpagechange }: Props = $props();

	let totalPages = $derived(Math.min(10000, Math.ceil($results.postCount / PAGE_SIZE)));

	let jumpPid: number = $state(NaN);
</script>

<div>
	Go to page <NumberInput min={1} max={totalPages} bind:value={jumpPid} step={1} /> of {totalPages}
	<TextButton
		onclick={() => onpagechange(jumpPid)}
		title=" Page"
		type="primary"
		disabled={isNaN(jumpPid)}
		reducepadding
	>
		Go
	</TextButton>
</div>

<style>
	div {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		justify-content: center;
	}
</style>

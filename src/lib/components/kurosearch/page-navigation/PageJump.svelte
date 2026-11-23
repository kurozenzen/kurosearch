<script lang="ts">
	import TextButton from '#lib/components/pure/button-text/TextButton.svelte';
	import { PAGE_SIZE } from '#lib/logic/api-client/ApiClient';
	import { jumpToPage } from '#lib/logic/search.svelte';
	import { results } from '#lib/store';
	import NumberInput from '../../pure/input-number/NumberInput.svelte';

	let totalPages = $derived(Math.min(10000, Math.ceil(results.value.postCount / PAGE_SIZE)));

	let jumpPageNumber: number = $state(NaN);
</script>

<div>
	Go to page <NumberInput
		name="input-page-jump"
		min={1}
		max={totalPages}
		bind:value={jumpPageNumber}
		step={1}
		aria-label="Page number input"
	/> of {totalPages}
	<TextButton
		onclick={() => jumpToPage(jumpPageNumber - 1)}
		title=" Page"
		disabled={isNaN(jumpPageNumber) || jumpPageNumber < 1 || jumpPageNumber > totalPages}
		class="mixin-accent jump-button"
	>
		Go
	</TextButton>
</div>

<style>
	div {
		display: flex;
		gap: var(--grid-gap);
		align-items: center;
		justify-content: center;
		white-space: nowrap;
	}

	:global(.jump-button) {
		height: var(--line-height);
	}
</style>

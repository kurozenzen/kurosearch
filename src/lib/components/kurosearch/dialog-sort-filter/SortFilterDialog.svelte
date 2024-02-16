<script context="module" lang="ts">
</script>

<script lang="ts">
	import NumberInput from './NumberInput.svelte';

	import RadioGroup from './RadioGroup.svelte';

	import sort from '$lib/store/sort-store';
	import filter from '$lib/store/filter-store';
	import TextButton from '$lib/components/pure/text-button/TextButton.svelte';
	import Dialog from '$lib/components/pure/dialog/Dialog.svelte';
	import RotatingIconSelect from '$lib/components/pure/rotating-select/RotatingIconSelect.svelte';
	import Select from '$lib/components/pure/select/Select.svelte';
	import RotatingTextSelect from '$lib/components/pure/rotating-select/RotatingTextSelect.svelte';
	import {
		LABELS_RATING,
		LABELS_SCORE_COMPARATOR,
		LABELS_SORT_DIRECTION,
		LABELS_SORT_PROPERTY
	} from '../sort-filter-config/sortfilter';

	export let dialog: HTMLDialogElement;

	const reset = () => {
		sort.reset();
		filter.reset();
	};
</script>

<Dialog bind:dialog on:close>
	<div class="container">
		<h3>Sorting and Filtering</h3>
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<div>
			<b>Sorting</b>
			<div class="row">
				<RotatingIconSelect bind:value={$sort.direction} options={LABELS_SORT_DIRECTION} />
				<Select bind:value={$sort.property} options={LABELS_SORT_PROPERTY} />
			</div>
		</div>

		<div>
			<b>Filtering by Score</b>
			<div class="row">
				<RotatingTextSelect
					bind:value={$filter.scoreComparator}
					options={LABELS_SCORE_COMPARATOR}
				/>
				<NumberInput bind:value={$filter.scoreValue} min={0} max={10000} step={1} />
			</div>
		</div>

		<div>
			<b>Rating</b>
			<RadioGroup name="rating" options={LABELS_RATING} bind:value={$filter.rating} />
		</div>

		<TextButton title="Return to searching" on:click={() => dialog.close()}>Done</TextButton>
		<TextButton title="Reset sort and filter" type="secondary" on:click={reset}>Reset</TextButton>
	</div>
</Dialog>

<style>
	.container {
		display: flex;
		flex-direction: column;
		gap: var(--grid-gap);
	}

	.row {
		display: flex;
		gap: var(--small-gap);
	}

	b {
		display: block;
		padding-bottom: var(--small-gap);
	}
</style>

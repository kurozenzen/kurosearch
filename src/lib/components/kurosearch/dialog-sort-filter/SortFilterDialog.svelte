<script lang="ts">
	import NumberInput from '../../pure/input-number/NumberInput.svelte';
	import RadioGroup from '$lib/components/pure/radio-group/RadioGroup.svelte';
	import TextButton from '$lib/components/pure/button-text/TextButton.svelte';
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
	import { filter, sort } from '$lib/store';

	interface Props {
		open: boolean;
		onclose: () => void;
	}

	let { open = $bindable(), onclose }: Props = $props();

	const close = () => {
		console.log('Close button clicked');
		open = false;
	};

	const reset = () => {
		sort.reset();
		filter.reset();
	};
</script>

<Dialog bind:open {onclose}>
	<div class="container">
		<div class="row">
			<h3>Sorting and Filtering</h3>
			<div class="spacer"></div>
			<button
				type="button"
				class="mixin-hover mixin-invisible codicon codicon-close"
				onclick={close}
				aria-label="Close"
			>
			</button>
		</div>
		<div>
			<b>Sorting</b>
			<div class="row">
				<RotatingIconSelect
					id="sort-direction"
					bind:value={sort.value.direction}
					options={LABELS_SORT_DIRECTION}
				/>
				<Select
					id="sort-property"
					bind:value={sort.value.property}
					options={LABELS_SORT_PROPERTY}
				/>
			</div>
		</div>

		<div>
			<b>Filtering by Score</b>
			<div class="row">
				<RotatingTextSelect
					id="filter-comparator"
					bind:value={filter.value.scoreComparator}
					options={LABELS_SCORE_COMPARATOR}
				/>
				<NumberInput
					id="filter-score"
					bind:value={filter.value.scoreValue}
					min={0}
					max={10000}
					step={1}
				/>
			</div>
		</div>

		<div>
			<b>Rating</b>
			<RadioGroup name="rating" options={LABELS_RATING} bind:value={filter.value.rating} />
		</div>

		<TextButton title="Return to searching" class="mixin-accent" onclick={close}>Done</TextButton>
		<TextButton title="Reset sort and filter" class="mixin-secondary" onclick={reset}>
			Reset
		</TextButton>
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

	button {
		justify-self: end;
	}

	.spacer {
		flex-grow: 1;
	}
</style>

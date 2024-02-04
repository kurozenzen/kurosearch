<script context="module" lang="ts">
	export const RATING_OPTIONS = Object.freeze({
		all: 'All',
		safe: 'Safe',
		questionable: 'Questionable',
		explicit: 'Explicit'
	});
	const OPTIONS_SORT_PROPERTY = Object.freeze({
		id: 'Uploaded',
		score: 'Score',
		updated: 'Updated',
		random: 'Random'
	});
	const OPTIONS_SORT_DIRECTION = Object.freeze({
		desc: 'codicon codicon-arrow-down',
		asc: 'codicon codicon-arrow-up'
	});
	const OPTIONS_SCORE_COMPARATOR = Object.freeze({ '>=': '≥', '<=': '≤' });
</script>

<script lang="ts">
	import RadioGroup from './RadioGroup.svelte';

	import sort from '$lib/store/sort-store';
	import filter from '$lib/store/filter-store';
	import TextButton from '$lib/components/pure/text-button/TextButton.svelte';
	import Dialog from '$lib/components/pure/dialog/Dialog.svelte';
	import RotatingIconSelect from '$lib/components/pure/rotating-select/RotatingIconSelect.svelte';
	import Select from '$lib/components/pure/select/Select.svelte';
	import RotatingTextSelect from '$lib/components/pure/rotating-select/RotatingTextSelect.svelte';
	import { isEnter } from '$lib/logic/keyboard-utils';

	export let dialog: HTMLDialogElement;

	let internalScoreValue: number;

	const blurOnEnter = (event: KeyboardEvent) =>
		isEnter(event) && (event.target as HTMLElement)?.blur();
	const reset = () => {
		sort.reset();
		filter.reset();
		internalScoreValue = $filter.scoreValue;
	};

	$: {
		if (internalScoreValue === undefined) {
			internalScoreValue = $filter.scoreValue;
		}

		let scoreValue = Number(internalScoreValue);
		if (!isNaN(scoreValue)) {
			$filter.scoreValue = scoreValue;
		}
	}
</script>

<Dialog bind:dialog on:close>
	<div class="container">
		<h3>Sorting and Filtering</h3>
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<div>
			<b>Sorting</b>
			<div class="row">
				<RotatingIconSelect bind:value={$sort.direction} options={OPTIONS_SORT_DIRECTION} />
				<Select bind:value={$sort.property} options={OPTIONS_SORT_PROPERTY} />
			</div>
		</div>

		<div>
			<b>Filtering by Score</b>
			<div class="row">
				<RotatingTextSelect
					bind:value={$filter.scoreComparator}
					options={OPTIONS_SCORE_COMPARATOR}
				/>
				<input
					type="number"
					min={0}
					max={100000}
					step={1}
					bind:value={internalScoreValue}
					on:keyup={blurOnEnter}
				/>
			</div>
		</div>

		<b>Filtering by Rating</b>
		<RadioGroup name="rating" options={RATING_OPTIONS} bind:value={$filter.rating} />
		<TextButton title="Return to searching." on:click={() => dialog.close()}>Done</TextButton>
		<TextButton title="Reset sort and filter." type="secondary" on:click={reset}>Reset</TextButton>
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

	input[type='number'] {
		height: var(--line-height);
		box-sizing: border-box;
		background-color: transparent;
		border-radius: var(--border-radius);
		padding-inline: var(--small-gap);
		border: 2px solid var(--background-1);
		width: 90px;
	}

	b {
		display: block;
		padding-bottom: var(--small-gap);
	}
</style>

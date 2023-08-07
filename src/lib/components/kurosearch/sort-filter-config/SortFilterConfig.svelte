<script context="module" lang="ts">
	const OPTIONS_SORT_PROPERTY = Object.freeze({
		id: 'Uploaded',
		score: 'Score',
		updated: 'Updated'
	});
	const OPTIONS_SORT_DIRECTION = Object.freeze({
		desc: 'codicon codicon-arrow-down',
		asc: 'codicon codicon-arrow-up'
	});
	const OPTIONS_SCORE_COMPARATOR = Object.freeze({ '>=': '≥', '<=': '≤' });
	const RATING_OPTIONS = Object.freeze({
		all: 'All',
		safe: 'Safe',
		questionable: 'Questionable',
		explicit: 'Explicit'
	});

	const LABELS_SORT: Record<
		kurosearch.SortProperty,
		Record<kurosearch.SortDirection, string>
	> = Object.freeze({
		id: {
			asc: 'Oldest',
			desc: 'Newest'
		},
		score: {
			asc: 'Worst',
			desc: 'Best'
		},
		updated: {
			asc: 'Inactive',
			desc: 'Active'
		}
	});

	const getFilterLabel = (
		rating: kurosearch.Rating,
		scoreValue: number,
		scoreComparator: kurosearch.ScoreComparator
	) => {
		let ratingLabel = rating === 'all' ? undefined : RATING_OPTIONS[rating];
		let scoreLabel =
			scoreValue === 0 && scoreComparator === '>='
				? undefined
				: `Score${scoreComparator}${formatCount(scoreValue)}`;

		return [ratingLabel, scoreLabel].filter((x) => x !== undefined).join(',') || 'All';
	};
</script>

<script lang="ts">
	import sort from '$lib/store/sort-store';
	import filter from '$lib/store/filter-store';
	import TextButton from '$lib/components/pure/text-button/TextButton.svelte';
	import { isEnter } from '$lib/logic/keyboard-utils';
	import { formatCount } from '$lib/logic/format-count';
	import Dialog from '$lib/components/pure/dialog/Dialog.svelte';
	import RotatingIconSelect from '$lib/components/pure/rotating-select/RotatingIconSelect.svelte';
	import Select from '$lib/components/pure/select/Select.svelte';
	import RotatingTextSelect from '$lib/components/pure/rotating-select/RotatingTextSelect.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let editSortFilter = false;

	const openDialog = () => (editSortFilter = true);
	const closeDialog = () => {
		editSortFilter = false;
		dispatch('sortfilterupdate');
	};
	const blurOnEnter = (event: KeyboardEvent) =>
		isEnter(event) && (event.target as HTMLElement)?.blur();
	const reset = () => {
		sort.reset();
		filter.reset();
		internalScoreValue = $filter.scoreValue;
	};

	let internalScoreValue: number;

	$: {
		if (internalScoreValue === undefined) {
			internalScoreValue = $filter.scoreValue;
		}

		let scoreValue = Number(internalScoreValue);
		if (!isNaN(scoreValue)) {
			$filter.scoreValue = scoreValue;
		}
	}

	$: filterLabel = getFilterLabel($filter.rating, $filter.scoreValue, $filter.scoreComparator);
	$: sortLabel = LABELS_SORT[$sort.property][$sort.direction];
</script>

<button on:click={openDialog}>
	<i class="codicon codicon-filter" />
	<span>{filterLabel}</span>
	<i class="codicon codicon-arrow-swap" />
	<span>{sortLabel}</span>
</button>

{#if editSortFilter}
	<Dialog on:close={closeDialog}>
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

			<!-- svelte-ignore a11y-label-has-associated-control -->
			<div>
				<b>Filtering by Rating</b>
				<div class="row">
					<Select bind:value={$filter.rating} options={RATING_OPTIONS} />
				</div>
			</div>
			<TextButton title="Return to searching." on:click={closeDialog}>Done</TextButton>
			<TextButton title="Reset sort and filter." type="secondary" on:click={reset}>Reset</TextButton
			>
		</div>
	</Dialog>
{/if}

<style>
	button {
		display: flex;
		align-items: center;
		background-color: transparent;
		color: var(--text);
	}

	@media (hover: hover) {
		button {
			transition: color var(--default-transition-behaviour);
		}
		button:hover {
			color: var(--text-highlight);
		}
	}

	.codicon-arrow-swap {
		transform: rotate(90deg);
	}

	i {
		display: inline-block;
		margin-inline: var(--grid-gap) 4px;
	}

	.container {
		display: flex;
		flex-direction: column;
		gap: var(--grid-gap);
	}

	.row {
		display: flex;
		gap: var(--small-gap);
	}

	input {
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

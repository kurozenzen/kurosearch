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
	import sortFilter from '$lib/store/sort-filter-store';
	import TextButton from '$lib/components/pure/text-button/TextButton.svelte';
	import { isEnter } from '$lib/logic/keyboard-utils';
	import { formatCount } from '$lib/logic/format-count';
	import Dialog from '$lib/components/pure/dialog/Dialog.svelte';
	import RotatingIconSelect from '$lib/components/pure/rotating-select/RotatingIconSelect.svelte';
	import Select from '$lib/components/pure/select/Select.svelte';
	import RotatingTextSelect from '$lib/components/pure/rotating-select/RotatingTextSelect.svelte';

	let editSortFilter = false;
	const openDialog = () => (editSortFilter = true);
	const closeDialog = () => (editSortFilter = false);
	const reset = () => {
		sortFilter.reset();
		internalScoreValue = $sortFilter.scoreValue;
	};

	let internalScoreValue: number;

	$: {
		if (internalScoreValue === undefined) {
			internalScoreValue = $sortFilter.scoreValue;
		}

		let scoreValue = Number(internalScoreValue);
		if (!isNaN(scoreValue)) {
			$sortFilter.scoreValue = scoreValue;
		}
	}

	$: filterLabel = getFilterLabel(
		$sortFilter.rating,
		$sortFilter.scoreValue,
		$sortFilter.scoreComparator
	);

	$: sortLabel = LABELS_SORT[$sortFilter.sortProperty][$sortFilter.sortDirection];
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
			<label>
				<b>Sorting</b>
				<div class="row">
					<RotatingIconSelect
						bind:value={$sortFilter.sortDirection}
						options={OPTIONS_SORT_DIRECTION}
					/>
					<Select bind:value={$sortFilter.sortProperty} options={OPTIONS_SORT_PROPERTY} />
				</div>
			</label>

			<label>
				<b>Filtering by Score</b>
				<div class="row">
					<RotatingTextSelect
						bind:value={$sortFilter.scoreComparator}
						options={OPTIONS_SCORE_COMPARATOR}
					/>
					<input
						type="number"
						min={0}
						max={100000}
						step={1}
						bind:value={internalScoreValue}
						on:keyup={(event) => isEnter(event) && event.target.blur()}
					/>
				</div>
			</label>

			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label>
				<b>Filtering by Rating</b>
				<div class="row">
					<Select bind:value={$sortFilter.rating} options={RATING_OPTIONS} />
				</div>
			</label>
			<TextButton title="Return to searching." on:click={closeDialog}>Done</TextButton>
			<TextButton title="Reset sort and filter." type="secondary" on:click={reset}>Reset</TextButton
			>
		</div>
	</Dialog>
{/if}

<style>
	button {
		background-color: transparent;
		color: var(--text);
	}

	@media (hover: hover) {
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

	label {
		display: flex;
		flex-direction: column;
		gap: var(--small-gap);
	}
</style>

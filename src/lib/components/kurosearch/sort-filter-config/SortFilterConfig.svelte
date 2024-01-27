<script context="module" lang="ts">
	import { RATING_OPTIONS } from '$lib/components/kurosearch/dialog-sort-filter/SortFilterDialog.svelte';

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
		},
		random: {
			asc: 'Random',
			desc: 'Random'
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
	import { formatCount } from '$lib/logic/format-count';
	import { createEventDispatcher } from 'svelte';
	import SortFilterDialog from '../dialog-sort-filter/SortFilterDialog.svelte';
	import { addHistory } from '$lib/logic/use/onpopstate';

	const dispatch = createEventDispatcher();
	const serializeSortFilter = (sort: any, filter: any) =>
		JSON.stringify(Object.assign({}, sort, filter));

	let dialog: HTMLDialogElement;
	let sortFilterBefore = '';

	$: filterLabel = getFilterLabel($filter.rating, $filter.scoreValue, $filter.scoreComparator);
	$: sortLabel = LABELS_SORT[$sort.property][$sort.direction];
</script>

<button
	on:click={() => {
		sortFilterBefore = serializeSortFilter($sort, $filter);
		dialog.showModal();
		addHistory('dialog');
	}}
>
	<i class="codicon codicon-filter" />
	<span>{filterLabel}</span>
	<i class="codicon codicon-arrow-swap" />
	<span>{sortLabel}</span>
</button>

<SortFilterDialog
	bind:dialog
	on:close={() => {
		const sortFilterAfter = serializeSortFilter($sort, $filter);
		if (sortFilterAfter !== sortFilterBefore) {
			dispatch('sortfilterupdate');
		}
	}}
/>

<style>
	button {
		display: flex;
		align-items: center;
		background-color: transparent;
		color: var(--text);
	}

	i {
		display: inline-block;
		margin-inline-start: var(--grid-gap);
		margin-inline-end: var(--tiny-gap);
	}

	.codicon-arrow-swap {
		transform: rotate(90deg);
	}

	@media (hover: hover) {
		button {
			transition: color var(--default-transition-behaviour);
		}
		button:hover {
			color: var(--text-highlight);
		}
	}
</style>

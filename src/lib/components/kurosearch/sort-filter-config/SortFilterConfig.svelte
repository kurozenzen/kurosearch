<script lang="ts">
	import sort from '$lib/store/sort-store';
	import filter from '$lib/store/filter-store';
	import { createEventDispatcher } from 'svelte';
	import SortFilterDialog from '../dialog-sort-filter/SortFilterDialog.svelte';
	import { addHistory } from '$lib/logic/use/onpopstate';
	import { getFilterLabel, getSortLabel } from './sortfilter';

	const dispatch = createEventDispatcher();
	const serializeSortFilter = (sort: any, filter: any) =>
		JSON.stringify(Object.assign({}, sort, filter));

	let dialog: HTMLDialogElement;
	let sortFilterBefore = '';

	$: filterLabel = getFilterLabel($filter.rating, $filter.scoreValue, $filter.scoreComparator);
	$: sortLabel = getSortLabel($sort.property, $sort.direction);
</script>

<button
	type="button"
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
		align-self: stretch;
		background-color: transparent;
		color: var(--text);
	}

	span,
	i {
		user-select: none;
	}

	i {
		display: inline-block;
		margin-inline-end: var(--tiny-gap);
	}

	i.codicon-arrow-swap {
		margin-inline-start: var(--grid-gap);
	}

	.codicon-arrow-swap {
		transform: rotate(90deg);
	}

	@media (hover: hover) {
		button {
			padding-inline: var(--grid-gap);
			border-radius: var(--border-radius);
			transition: all var(--default-transition-behaviour);
		}
		button:hover {
			color: var(--text-highlight);
			background-color: var(--background-1);
		}
	}
</style>

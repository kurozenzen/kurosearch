<script lang="ts">
	import sort, { type SortStoreData } from '$lib/store/sort-store';
	import filter, { type FilterStoreData } from '$lib/store/filter-store';
	import SortFilterDialog from '../dialog-sort-filter/SortFilterDialog.svelte';
	import { addHistory } from '$lib/logic/use/onpopstate';
	import { getFilterLabel, getSortLabel } from './sortfilter';

	interface Props {
		onsortfilterupdate: () => void;
	}

	let { onsortfilterupdate }: Props = $props();

	const serializeSortFilter = (sort: SortStoreData, filter: FilterStoreData) =>
		JSON.stringify(Object.assign({}, sort, filter));

	let dialog: HTMLDialogElement = $state(undefined);
	let sortFilterBefore = '';

	let filterLabel = $derived(
		getFilterLabel($filter.rating, $filter.scoreValue, $filter.scoreComparator)
	);
	let sortLabel = $derived(getSortLabel($sort.property, $sort.direction));
</script>

<button
	type="button"
	onclick={() => {
		sortFilterBefore = serializeSortFilter($sort, $filter);
		dialog.showModal();
		addHistory('dialog');
	}}
>
	<i class="codicon codicon-filter"></i>
	<span>{filterLabel}</span>
	<i class="codicon codicon-arrow-swap"></i>
	<span>{sortLabel}</span>
</button>

<SortFilterDialog
	bind:dialog
	onclose={() => {
		const sortFilterAfter = serializeSortFilter($sort, $filter);
		if (sortFilterAfter !== sortFilterBefore) {
			onsortfilterupdate();
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

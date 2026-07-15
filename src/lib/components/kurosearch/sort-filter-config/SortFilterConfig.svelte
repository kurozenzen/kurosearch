<script lang="ts">
	import { addHistory } from '$lib/logic/attachments/onpopstate';
	import filter, { type FilterStoreData } from '$lib/store/filter-store';
	import sort, { type SortStoreData } from '$lib/store/sort-store';
	import SortFilterDialog from '../dialog-sort-filter/SortFilterDialog.svelte';
	import ResultHeaderItem from '../results/ResultHeaderItem.svelte';
	import { getFilterLabel, getSortLabel } from './sortfilter';

	interface Props {
		onsortfilterupdate: () => void;
		class?: string;
	}

	let { onsortfilterupdate, ...rest }: Props = $props();

	const serializeSortFilter = (sort: SortStoreData, filter: FilterStoreData) =>
		JSON.stringify(Object.assign({}, sort, filter));

	// svelte-ignore non_reactive_update
	let dialog: HTMLDialogElement;
	let sortFilterBefore = '';

	let filterLabel = $derived(
		getFilterLabel($filter.rating, $filter.scoreValue, $filter.scoreComparator)
	);
	let sortLabel = $derived(getSortLabel($sort.property, $sort.direction));
</script>

<ResultHeaderItem
	onclick={() => {
		sortFilterBefore = serializeSortFilter($sort, $filter);
		dialog.showModal();
		addHistory('dialog');
	}}
	class={rest.class}
>
	<i class="codicon codicon-filter"></i>
	<span>{filterLabel}</span>
	<i class="codicon codicon-arrow-swap"></i>
	<span>{sortLabel}</span>
</ResultHeaderItem>

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
</style>

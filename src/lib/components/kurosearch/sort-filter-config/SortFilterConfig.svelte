<script lang="ts">
	import { filter, sort, type SortFilterData } from '$lib/store';
	import type { ClassValue } from 'svelte/elements';
	import SortFilterDialog from '../dialog-sort-filter/SortFilterDialog.svelte';
	import ResultHeaderItem from '../results/ResultHeaderItem.svelte';
	import { getFilterLabel, getSortLabel } from './sortfilter';

	interface Props {
		onsortfilterupdate: () => void;
		class?: ClassValue;
	}

	let { onsortfilterupdate, ...rest }: Props = $props();

	let showDialog = $state(false);
	let before: SortFilterData | undefined;
</script>

<ResultHeaderItem
	onclick={() => {
		before = {
			sort: $state.snapshot(sort.value),
			filter: $state.snapshot(filter.value)
		};
		showDialog = true;
	}}
	class={rest.class}
>
	<i class="codicon codicon-filter"></i>
	<span
		>{getFilterLabel(
			filter.value.rating,
			filter.value.scoreValue,
			filter.value.scoreComparator
		)}</span
	>
	<i class="codicon codicon-arrow-swap"></i>
	<span>{getSortLabel(sort.value.property, sort.value.direction)}</span>
</ResultHeaderItem>

<SortFilterDialog
	bind:open={showDialog}
	onclose={() => {
		if (
			before?.sort.direction !== sort.value.direction ||
			before?.sort.property !== sort.value.property ||
			before.filter.rating !== filter.value.rating ||
			before.filter.scoreComparator !== filter.value.scoreComparator ||
			before.filter.scoreValue !== filter.value.scoreValue
		) {
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

<script lang="ts">
	import { formatCount, formatExactCount } from '$lib/logic/format-count';
	import results from '$lib/store/results-store';
	import ResultHeaderItem from './ResultHeaderItem.svelte';

	let displayExactCount = $state(false);
	let displayedCount = $derived(
		displayExactCount ? formatExactCount($results.postCount) : formatCount($results.postCount)
	);
</script>					

<ResultHeaderItem
	class={$results.loading ? 'loading-sweep' : undefined}
	onclick={() => {
		displayExactCount = !displayExactCount;
	}}
>
	{displayedCount} posts
</ResultHeaderItem>

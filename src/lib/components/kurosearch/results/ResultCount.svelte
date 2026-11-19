<script lang="ts">
	import { formatCount, formatExactCount } from '$lib/logic/format-count';
	import { results } from '$lib/store';
	import ResultHeaderItem from './ResultHeaderItem.svelte';

	let displayExactCount = $state(false);
	let displayedCount = $derived(
		displayExactCount
			? formatExactCount(results.value.postCount)
			: formatCount(results.value.postCount)
	);
</script>

<ResultHeaderItem
	class={results.value.loading ? 'loading-sweep' : undefined}
	onclick={() => {
		displayExactCount = !displayExactCount;
	}}
>
	{displayedCount} posts
</ResultHeaderItem>

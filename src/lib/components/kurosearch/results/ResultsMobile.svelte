<script>
	import { pageNavigationEnabled } from '$lib/store';
	import ResultsInfinite from './ResultsInfinite.svelte';
	import ResultsPaged from './ResultsPaged.svelte';
</script>

{#if pageNavigationEnabled.value}
	<ResultsPaged />
{:else}
	<ResultsInfinite />
{/if}

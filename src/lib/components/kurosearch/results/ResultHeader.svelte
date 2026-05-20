<script lang="ts">
	import SortFilterConfig from '../sort-filter-config/SortFilterConfig.svelte';
	import ResultCount from './ResultCount.svelte';

	interface Props {
		onsortfilterupdate: () => void;
	}

	let { onsortfilterupdate }: Props = $props();
</script>

<div id="result-header">
	<ResultCount />
	<SortFilterConfig {onsortfilterupdate} />
</div>

<style>
	div {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
</style>

<script lang="ts">
	import { getFirstPage } from '#lib/logic/search.svelte';
	import { pageNavigationEnabled } from '#lib/store';
	import PageJump from '../page-navigation/PageJump.svelte';
	import SortFilterConfig from '../sort-filter-config/SortFilterConfig.svelte';
	import ResultCount from './ResultCount.svelte';
</script>

<header id="result-header">
	<div class="left">
		<ResultCount />
	</div>
	{#if pageNavigationEnabled.value}
		<div class="center">
			<PageJump />
		</div>
	{/if}
	<div class="right">
		<SortFilterConfig onsortfilterupdate={getFirstPage} />
	</div>
</header>

<style>
	#result-header {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		grid-auto-flow: dense;
		gap: var(--grid-gap);
	}

	.left {
		grid-column: 1;
	}

	.center {
		grid-column: 2;
	}

	@media (max-width: 600px) {
		.center {
			grid-column: span 3;
			grid-row: 2;
		}
	}

	.right {
		grid-column: 3;
		display: flex;
		justify-content: end;
	}
</style>

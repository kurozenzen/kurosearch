<script lang="ts">
	import { formatCount } from '$lib/logic/format-count';
	import results from '$lib/store/results-store';
	import SortFilterConfig from '../sort-filter-config/SortFilterConfig.svelte';

	export let loading: boolean;
</script>

<div>
	<span class:loading>{formatCount($results.postCount)} posts</span>
	<SortFilterConfig on:sortfilterupdate />
</div>

<style>
	div {
		width: 100%;
		height: var(--line-height);
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
	}

	@media (width <= calc(800px + 2rem)) {
		div {
			padding-inline: var(--small-gap);
		}
	}

	@keyframes sweep {
		0% {
			background: var(--background-1);
		}
		50% {
			background: var(--background-2);
		}
		100% {
			background: var(--background-1);
		}
	}

	.loading {
		border-radius: var(--border-radius);
		color: transparent;
		padding-inline: 1em;
		animation: sweep ease-in-out 3s infinite;
	}
</style>

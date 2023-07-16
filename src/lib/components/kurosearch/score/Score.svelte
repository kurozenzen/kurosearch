<script lang="ts">
	import { formatCount } from '$lib/logic/format-count';

	export let value: number;
</script>

<span data-testid="score" class="codicon codicon-heart">{formatCount(value)}</span>

<style>
	span {
		white-space: nowrap;
		display: inline-flex;
		gap: 4px;
		align-items: center;
	}
</style>

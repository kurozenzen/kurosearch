<script lang="ts">
	import { formatCreatedAt } from '$lib/logic/format-relative-time';

	export let value: number | string;
</script>

<span>{formatCreatedAt(value)}</span>

<style>
	span {
		white-space: nowrap;
	}
</style>

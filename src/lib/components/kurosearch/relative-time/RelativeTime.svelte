<script lang="ts">
	import { formatCreatedAt } from '$lib/logic/format-relative-time';

	interface Props {
		value: number | string;
	}

	let { value }: Props = $props();
</script>

<span>{formatCreatedAt(value)}</span>

<style>
	span {
		white-space: nowrap;
	}
</style>

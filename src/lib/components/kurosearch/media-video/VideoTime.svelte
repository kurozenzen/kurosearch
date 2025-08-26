<script lang="ts">
	import { formatVideoTime } from '$lib/logic/format-time';

	interface Props {
		timeLeft: number;
	}

	let { timeLeft }: Props = $props();
</script>

<span>{formatVideoTime(timeLeft)}</span>

<style>
	span {
		font-size: 12px;
		background-color: #0008;
		border-radius: var(--tiny-gap);
		padding: var(--tiny-gap);
		color: white;
		user-select: none;
	}
</style>

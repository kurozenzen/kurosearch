<script module lang="ts">
	export const pageLabel = (page: number) => page + 1;
</script>

<script lang="ts">
	interface Props {
		pid: number;
		onclick: () => void;
	}

	let { pid, onclick }: Props = $props();
</script>

<button {onclick} aria-label="Go to page {pageLabel(pid)}" class="mixin-shape-box mixin-primary mixin-hover">
	{pageLabel(pid)}
</button>

<style>
	button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0 0.5rem;
		min-width: var(--box-height);
	}
</style>

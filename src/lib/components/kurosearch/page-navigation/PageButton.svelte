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

<button {onclick} aria-label="Go to page {pageLabel(pid)}">
	{pageLabel(pid)}
</button>

<style>
	button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0 0.5rem;
		min-width: var(--box-height);
		height: var(--box-height);
		border-radius: var(--border-radius);
		color: var(--text);
		background-color: var(--background-1);
	}

	@media (hover: hover) {
		button {
			transition: background-color var(--default-transition-behaviour);
		}

		button:hover {
			background-color: var(--background-2);
		}
	}
</style>

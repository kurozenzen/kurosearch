<script lang="ts">
	export let title: string;
</script>

<button type="button" {title} on:click>
	<slot />
</button>

<style>
	button {
		width: var(--line-height-small);
		height: var(--line-height-small);
		border-radius: var(--border-radius);
		padding: var(--tiny-gap);
		background-color: var(--accent);
		color: var(--text-accent);
	}

	@media (hover: hover) {
		button {
			transition: background-color var(--default-transition-behaviour);
		}

		button:hover {
			background-color: var(--accent-light);
		}
	}
</style>

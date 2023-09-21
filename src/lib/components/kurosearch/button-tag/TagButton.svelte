<script lang="ts">
	export let title: string;
	export let icon: string;
</script>

<button {title} on:click>
	<i class={icon} />
</button>

<style>
	button {
		width: var(--line-height-small);
		height: var(--line-height-small);
		border-radius: var(--line-height-small);
		padding: 4px;
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

	i {
		font-size: var(--text-size-large);
		width: var(--text-size-large);
		height: var(--text-size-large);
		text-align: center;
	}
</style>

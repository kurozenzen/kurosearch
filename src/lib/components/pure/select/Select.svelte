<script lang="ts">
	interface Props {
		options: Record<string, string>;
		value: string;
	}

	let { options, value = $bindable() }: Props = $props();
</script>

<select bind:value>
	{#each Object.entries(options) as [value, label]}
		<option {value}>{label}</option>
	{/each}
</select>

<style>
	select {
		display: inline-flex;
		align-items: center;
		height: var(--line-height);
		padding-inline: var(--small-gap);
		color: var(--text);
		border: 2px solid var(--background-1);
		border-radius: var(--border-radius);
	}

	@media (hover: hover) {
		select {
			transition: all var(--default-transition-behaviour);
		}

		select:hover {
			color: var(--text-highlight);
			background-color: var(--background-1);
			border-color: var(--background-2);
		}
	}

	option {
		background-color: var(--background-0);
		color: var(--text);
	}
</style>

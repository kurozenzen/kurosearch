<script lang="ts">
	export let options: Record<string, string>;
	export let value: string;

	$: index = Object.keys(options).indexOf(value);
	$: entries = Object.entries(options);
	$: icon = entries[index][1];

	const rotate = () => {
		index = (index + 1) % entries.length;
		value = entries[index][0];
	};
</script>

<button class={icon} on:click={rotate} />

<style>
	button {
		background-color: var(--background-1);
		color: var(--text);
		border-radius: var(--line-height);
		width: var(--line-height);
		height: var(--line-height);
		line-height: var(--line-height);
		font-size: var(--text-size-large);
	}

	@media (hover: hover) {
		button {
			transition: all var(--default-transition-behaviour);
		}

		button:hover {
			color: var(--text-highlight);
			background-color: var(--background-2);
		}
	}
</style>

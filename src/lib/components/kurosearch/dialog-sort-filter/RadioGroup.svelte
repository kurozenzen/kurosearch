<script lang="ts">
	export let name: string;
	export let value: string;
	export let options: Record<string, string>;
</script>

<div id="group-{name}" role="radiogroup">
	{#each Object.entries(options) as [key, label]}
		<input type="radio" name="group-{name}" value={key} id="{name}-{key}" bind:group={value} />
		<label for="{name}-{key}">{label}</label>
	{/each}
</div>

<style>
	div {
		display: flex;
		height: var(--box-height);
		align-items: stretch;
	}

	input {
		display: none;
	}

	label {
		display: flex;
		align-items: center;
		padding-inline: var(--grid-gap);
		text-transform: uppercase;
		font-size: var(--text-size-small);
		color: var(--text);
		background-color: var(--background-1);
		transition: background-color var(--default-transition-behaviour);
		user-select: none;
	}

	input:checked + label {
		background-color: var(--accent);
		color: var(--text-accent);
	}

	@media (hover: hover) {
		label:hover {
			background-color: var(--background-2);
		}

		input:checked + label:hover {
			background-color: var(--accent);
		}
	}

	label:first-of-type {
		border-bottom-left-radius: var(--border-radius);
		border-top-left-radius: var(--border-radius);
	}

	label:last-of-type {
		border-bottom-right-radius: var(--border-radius);
		border-top-right-radius: var(--border-radius);
	}
</style>

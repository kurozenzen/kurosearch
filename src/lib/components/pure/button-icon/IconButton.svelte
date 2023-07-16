<script lang="ts">
	export let id: string | undefined = undefined;
</script>

<button {id} class={$$props.class} aria-label={$$props['aria-label']} on:click>
	<slot />
</button>

<style>
	button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: var(--line-height);
		height: var(--line-height);
		border-radius: var(--border-radius-full);
		border: none;
		color: var(--text);
		background-color: transparent;
		/* background-color: red; */
		font-size: var(--text-size-large);
		vertical-align: middle;
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

<button on:click>
	<slot />
</button>

<style>
	button {
		display: grid;
		place-content: center;
		background-color: var(--background-1);
		color: var(--text);
		border-radius: var(--line-height);
		width: var(--line-height);
		height: var(--line-height);
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

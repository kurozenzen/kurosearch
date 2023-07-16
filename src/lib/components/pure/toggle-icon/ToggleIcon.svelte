<script lang="ts">
	export let title: string;
	export let icon: string;
	export let active: boolean;

	const toggleActive = () => {
		active = !active;
	};
</script>

<button {title} class={icon} class:active on:click={toggleActive} />

<style>
	button {
		background-color: unset;
		color: var(--text);
		width: var(--line-height);
		height: var(--line-height);
		line-height: var(--line-height);
		vertical-align: middle;
		text-align: center;
		font-size: var(--text-size-large);
	}

	button.active {
		color: var(--accent);
	}

	@media (hover: hover) {
		button {
			transition: color var(--default-transition-behaviour);
		}

		button:hover {
			color: var(--text-highlight);
		}

		button.active:hover {
			color: var(--accent-light);
		}
	}
</style>

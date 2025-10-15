<script lang="ts">
	interface Props {
		title: string;
		icon: string;
		active: boolean;
		'aria-label'?: string;
	}

	let { title, icon, active = $bindable(), ...rest }: Props = $props();

	const toggleActive = () => {
		active = !active;
	};

	let ariaLabel = $derived(rest['aria-label'] || title);
</script>

<button
	type="button"
	{title}
	class={icon}
	class:active
	onclick={toggleActive}
	aria-label={ariaLabel}
	aria-pressed={active}
>
</button>

<style lang="scss">
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

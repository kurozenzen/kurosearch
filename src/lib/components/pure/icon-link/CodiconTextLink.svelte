<script lang="ts">
	export let title: string;
	export let href: string;
	export let icon: string;
	export let label: string;
</script>

<a {title} {href} target="_blank" class={icon}>
	{label}
</a>

<style>
	a {
		display: inline-flex;
		align-items: center;
		gap: 4px;
		color: currentColor;
		font-size: var(--text-size-small);
		vertical-align: middle;
	}

	a::before {
		height: unset;
	}

	@media (hover: hover) {
		a {
			transition: color var(--default-transition-behaviour);
		}

		a:hover {
			color: var(--text-highlight);
		}
	}
</style>

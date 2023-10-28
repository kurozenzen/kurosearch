<script lang="ts">
	export let title: string;
	export let href: string;
	export let icon: string;
	export let label: string;
	export let target: string = '_self';
</script>

<a {title} {href} {target} class={icon}>
	{label}
</a>

<style>
	a {
		display: inline-flex;
		align-items: center;
		gap: var(--tiny-gap);
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

<script lang="ts">
	interface Props {
		title: string;
		href: string;
		icon: string;
		label: string;
		target?: string;
	}

	let { title, href, icon, label, target }: Props = $props();
</script>

<a {title} {href} {target} class="mixin-icon-text {icon}">
	{label}
</a>

<style>
	a {
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

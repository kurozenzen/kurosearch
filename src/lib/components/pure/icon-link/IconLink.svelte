<script lang="ts">
	export let title: string;
	export let href: string;
	export let newtab = false;
	export let className = '';
</script>

<a {title} {href} target={newtab ? '_blank' : '_self'} class={className}>
	<slot />
</a>

<style>
	a {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-width: var(--line-height);
		height: var(--line-height);
		border-radius: var(--border-radius-full);
		border: none;
		color: var(--text);
		background-color: transparent;
		font-size: var(--text-size-large);
		text-align: center;
	}

	@media (hover: hover) {
		a {
			transition: all var(--default-transition-behaviour);
		}

		a:hover {
			background-color: var(--background-1);
			color: var(--text-highlight);
		}
	}
</style>

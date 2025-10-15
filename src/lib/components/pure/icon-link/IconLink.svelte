<script lang="ts">
	interface Props {
		title: string;
		href: string;
		newtab?: boolean;
		className?: string;
		children?: import('svelte').Snippet;
	}

	let { title, href, newtab = false, className = '', children }: Props = $props();
</script>

<a
	{title}
	{href}
	target={newtab ? '_blank' : '_self'}
	rel={newtab ? 'noopener noreferrer' : undefined}
	aria-label={title}
	class={className}
>
	{@render children?.()}
</a>

<style lang="scss">
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

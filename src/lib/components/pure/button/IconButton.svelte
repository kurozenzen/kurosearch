<script module lang="ts">
	export const ICON_BUTTON_VARIANTS = [
		'transparent',
		'with-background',
		'half-background'
	] as const;
	export type IconButtonVariant = (typeof ICON_BUTTON_VARIANTS)[number];
</script>

<script lang="ts">
	import Button from './Button.svelte';
	import type { ButtonProps } from './Button.svelte';

	export interface IconButtonProps extends Omit<ButtonProps, 'variant'> {
		icon?: string;
		variant?: IconButtonVariant | ButtonProps['variant'];
	}

	let { icon, variant, onclick, ...rest }: IconButtonProps = $props();

	let resolvedVariant = $derived(() => {
		// Use the exported constant array for validation
		if (variant && ICON_BUTTON_VARIANTS.includes(variant as IconButtonVariant)) {
			return 'custom';
		}
		return variant as ButtonProps['variant'];
	});

	// Map IconButton variants to CSS classes
	let iconButtonClass = $derived(() => {
		let classes = [`icon-button`];

		if (variant) {
			classes.push(`icon-button--${variant}`);
		}

		if (rest.class) {
			const classValue = Array.isArray(rest.class) ? rest.class.join(' ') : String(rest.class);
			classes.push(classValue);
		}

		return classes.join(' ');
	});
</script>

<Button
	variant={resolvedVariant()}
	size="small"
	class={iconButtonClass()}
	style="
		--button-width: var(--line-height);
		--button-height: var(--line-height);
		--button-min-height: var(--line-height);
		--button-border-radius: var(--border-radius-full);
		--button-padding-inline: 0;
		--button-aspect-ratio: 1;
		--button-font-size: var(--text-size-large);
	"
	{...rest}
	onclick={(e) => {
		e.stopPropagation();
		onclick?.(e);
	}}
>
	{#if icon}
		<i class="codicon codicon-{icon}"></i>
	{/if}
	{@render rest.children?.()}
</Button>

<!--<style lang="scss">-->
<!--  :global(.icon-button) {-->
<!--    // Override Button styles for icon button specific behavior-->
<!--    width: var(&#45;&#45;line-height);-->
<!--    height: var(&#45;&#45;line-height);-->
<!--    min-height: var(&#45;&#45;line-height);-->
<!--    border-radius: var(&#45;&#45;border-radius-full);-->
<!--    padding-inline: 0;-->
<!--    aspect-ratio: 1;-->

<!--    // Base transparent style-->
<!--    color: var(&#45;&#45;text);-->
<!--    background-color: transparent;-->
<!--    font-size: var(&#45;&#45;text-size-large);-->
<!--    text-transform: none;-->
<!--  }-->

<!--  :global(.button&#45;&#45;custom.icon-button) {-->
<!--    border-radius: 50%;-->
<!--  }-->

<!--  :global(.icon-button&#45;&#45;background) {-->
<!--    background-color: var(&#45;&#45;background-1);-->
<!--  }-->

<!--  :global(.icon-button&#45;&#45;half-background) {-->
<!--    background-color: #0008;-->
<!--  }-->

<!--  @media (hover: hover) {-->
<!--    :global(.icon-button:hover:not(:disabled)) {-->
<!--      color: var(&#45;&#45;text-highlight);-->
<!--      background-color: var(&#45;&#45;background-2);-->
<!--    }-->
<!--  }-->

<!--  // Override focus styles for icon buttons-->
<!--  :global(.icon-button:focus-visible) {-->
<!--    outline: 2px solid var(&#45;&#45;text-highlight);-->
<!--    outline-offset: 2px;-->
<!--  }-->

<!--  // Mobile touch target adjustment-->
<!--  @media (max-width: 768px) {-->
<!--    :global(.icon-button) {-->
<!--      min-height: var(&#45;&#45;line-height);-->
<!--      // Keep icon buttons compact on mobile-->
<!--    }-->
<!--  }-->
<!--</style>-->

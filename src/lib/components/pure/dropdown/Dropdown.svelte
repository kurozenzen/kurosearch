<script lang="ts">
	import { type Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	interface Props {
		element: string;
		class?: ClassValue;
		summary: Snippet<[boolean]>;
		details: Snippet<[string]>;
		onOpenChange?: (open: boolean) => void;
	}

	let { element, summary, details, onOpenChange, ...rest }: Props = $props();

	let open = $state(false);
	let container: HTMLElement | undefined = $state();

	const setOpen = (value: boolean) => {
		if (open !== value) {
			open = value;
			onOpenChange?.(open);
		}
	};

	const trackOpen = (event: Event) => {
		if (container) {
			setOpen(container.contains(event.target as Node));
		}
	};

	const closeOnEscape = (event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			event.stopPropagation();
			container?.focus();
			setOpen(false);
		}
	};
</script>

<svelte:document onclick={trackOpen} onfocusin={trackOpen} />

<!-- svelte-ignore a11y_no_static_element_interactions -->
<svelte:element
	this={element}
	class={['container', rest.class]}
	bind:this={container}
	class:open
	onkeydown={closeOnEscape}
>
	{@render summary(open)}
	{@render details('details')}
</svelte:element>

<style>
	.container {
		display: flex;
		position: relative;

		&.open {
			filter: drop-shadow(0px 3px 5px black);
			z-index: var(--z-searchbar);
		}

		:global(.details) {
			position: absolute;
			top: 100%;
			left: 0;
			width: 100%;
		}

		&:not(.open) :global(.details) {
			display: none;
		}
	}
</style>

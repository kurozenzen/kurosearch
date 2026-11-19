<script lang="ts">
	import { type Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	interface Props {
		class?: ClassValue;
		summary: Snippet<[boolean]>;
		details: Snippet;
		onOpenChange?: (open: boolean) => void;
	}

	let { summary, details, onOpenChange, ...rest }: Props = $props();

	let open = $state(false);

	let container: HTMLDivElement | undefined;

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
<div class={['container', rest.class]} bind:this={container} class:open onkeydown={closeOnEscape}>
	{@render summary(open)}

	<div class="details">
		{@render details()}
	</div>
</div>

<style>
	.container {
		display: flex;
		position: relative;

		.details {
			display: none;
			position: absolute;
			top: 100%;
			left: 0;
			width: 100%;
		}

		&.open {
			filter: drop-shadow(0px 3px 5px black);
			z-index: var(--z-searchbar);

			.details {
				display: block;
			}
		}
	}
</style>

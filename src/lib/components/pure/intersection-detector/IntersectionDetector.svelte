<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	/**
	 * This prop should not change at runtime.
	 * Dynamically adjusting it is not implemented
	 */
	export let rootMargin: string;
	export let absoluteTop: string | undefined;

	const dispatch = createEventDispatcher();
	const intersectionObserver = new IntersectionObserver(
		(entries) => {
			if (entries[0].isIntersecting) {
				dispatch('intersection');
			}
		},
		{ rootMargin }
	);

	let ref: HTMLDivElement;

	$: {
		intersectionObserver.disconnect();
		if (ref) {
			intersectionObserver.observe(ref);
		}
	}
</script>

<div bind:this={ref} style={absoluteTop ? `position:absolute;top:${absoluteTop};` : undefined} />

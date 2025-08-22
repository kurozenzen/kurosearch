<script lang="ts">
	/**
	 * rootMargin should not change at runtime.
	 * Dynamically adjusting it is not implemented
	 */
	let { rootMargin, absoluteTop, onintersection } = $props();

	const intersectionObserver = new IntersectionObserver(
		(entries) => {
			if (entries[0].isIntersecting) {
				onintersection();
			}
		},
		{ rootMargin }
	);

	let ref: HTMLDivElement;
	$effect(() => {
		if (ref) {
			intersectionObserver.observe(ref);
		}
		return () => {
			intersectionObserver.disconnect();
		};
	});
</script>

<div
	bind:this={ref}
	style={absoluteTop ? `position:absolute;top:${absoluteTop};` : undefined}
></div>

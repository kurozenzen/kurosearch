<script lang="ts">
	import { observer } from '$lib/logic/attachments/observer';

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
		// svelte-ignore state_referenced_locally
		{ rootMargin }
	);
</script>

<div
	{@attach observer(intersectionObserver)}
	style={absoluteTop ? `position:absolute;top:${absoluteTop};` : undefined}
></div>

<script lang="ts">
	import { observer } from '$lib/logic/attachments/observer';

	interface Props {
		rootMargin: string;
		absoluteTop?: string;
		onintersection: () => void;
	}

	/**
	 * rootMargin should not change at runtime.
	 * Dynamically adjusting it is not implemented
	 */
	let { rootMargin, absoluteTop, onintersection }: Props = $props();
</script>

<div
	{@attach observer(
		new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					onintersection();
				}
			},
			// svelte-ignore state_referenced_locally
			{ rootMargin }
		)
	)}
	style={absoluteTop ? `position:absolute;top:${absoluteTop};` : undefined}
></div>

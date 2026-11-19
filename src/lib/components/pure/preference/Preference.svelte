<script lang="ts">
	import type { Snippet } from 'svelte';
	import H3 from '../heading/H3.svelte';

	interface Props {
		title: string;
		description: string;
		children?: Snippet;
		display?: boolean;
	}

	let { title, description, children, display = true }: Props = $props();
</script>

<div class:display>
	<H3 {title} />
	<p>{description}</p>
	{@render children?.()}
</div>

<style>
	div {
		display: none;
		flex-direction: column;
		align-items: start;
		gap: var(--grid-gap);
	}

	.display {
		display: flex;
	}
</style>

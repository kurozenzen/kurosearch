<script lang="ts">
	import type { Snippet } from 'svelte';
	import Heading3 from '../heading/Heading3.svelte';

	interface Props {
		title: string;
		description: string;
		children?: Snippet;
		display?: boolean;
	}

	let { title, description, children, display = true }: Props = $props();
</script>

<div class:display>
	<Heading3>{title}</Heading3>
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

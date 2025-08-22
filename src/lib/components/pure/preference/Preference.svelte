<script lang="ts">
	import type { Snippet } from 'svelte';
	import Heading3 from '../heading/Heading3.svelte';

	interface Props {
		title: string;
		description: string;
		children?: Snippet;
	}

	let { title, description, children }: Props = $props();
</script>

<div>
	<Heading3>{title}</Heading3>
	<p>{description}</p>
	{@render children?.()}
</div>

<style>
	p {
		margin-block-end: var(--grid-gap);
	}
</style>

<script lang="ts">
	import H3 from '$lib/components/pure/heading/H3.svelte';
	import { type Snippet } from 'svelte';

	interface Props {
		title: string;
		children: Snippet;
	}

	let { title, children }: Props = $props();
</script>

<section>
	<H3 {title} />
	{@render children()}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		gap: var(--grid-gap);
	}
</style>

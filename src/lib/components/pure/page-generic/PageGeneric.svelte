<script lang="ts">
	import type { Snippet } from 'svelte';
	import H2 from '../heading/H2.svelte';

	interface Props {
		title: string;
		children: Snippet;
	}

	let { title, children }: Props = $props();
</script>

<section>
	<H2 {title} />
	{@render children()}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		gap: var(--huge-gap);
		padding-block: var(--huge-gap);
	}

	@media (width <= calc(800px + 2rem)) {
		section {
			padding-inline: var(--grid-gap);
		}
	}
</style>

<script lang="ts">
	import H2 from '$lib/components/pure/heading/H2.svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		id?: string;
		children: Snippet;
	}

	let { title, children }: Props = $props();
</script>

<section>
	<H2 {title} />
	{@render children()}
</section>

<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		id?: string;
		children: Snippet;
	}

	let { title, id, children }: Props = $props();
</script>

<section>
	<h2 {id}>{title}</h2>
	{@render children()}
</section>

<style>
	h2 {
		color: var(--text-highlight);
		font-size: 2.25em;
	}
</style>

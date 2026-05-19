<script lang="ts">
	import LayoutDesktop from '$lib/components/kurosearch/layout-desktop/LayoutDesktop.svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}
	const { children }: Props = $props();
</script>

<LayoutDesktop>
	{@render children()}
</LayoutDesktop>

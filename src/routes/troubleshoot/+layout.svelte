<script lang="ts">
	import LayoutMobile from '$lib/components/kurosearch/layout-mobile/LayoutMobile.svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}
	const { children }: Props = $props();
</script>

<LayoutMobile>
	{@render children()}
</LayoutMobile>

<script lang="ts">
	import TextButton from '$lib/components/pure/button-text/TextButton.svelte';
	import LoadingAnimation from '$lib/components/pure/loading-animation/LoadingAnimation.svelte';
	import type { InputProps } from '$lib/components/pure/types';
	import type { Snippet } from 'svelte';

	interface Props extends InputProps {
		loading: boolean;
		children: Snippet;
	}

	let { loading, children }: Props = $props();
</script>

{#if loading}
	<LoadingAnimation />
{:else}
	{@render children()}
{/if}

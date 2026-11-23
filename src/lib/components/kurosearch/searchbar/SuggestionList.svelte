<script lang="ts">
	import LoadingAnimation from '#lib/components/pure/loading-animation/LoadingAnimation.svelte';
	import type { ClassValue } from 'svelte/elements';
	import Suggestion from './Suggestion.svelte';

	interface Props {
		class?: ClassValue;
		promise?: Promise<kurosearch.Suggestion[]>;
		onclick: (suggestion: kurosearch.Suggestion) => void;
		selectedIndex: number;
	}

	let { promise, onclick, selectedIndex, ...rest }: Props = $props();
</script>

{#snippet placeholder(icon: string, message: string)}
	<div class={['suggestions placeholder', rest.class]}>
		<i class={icon}></i>
		<span>{message}</span>
	</div>
{/snippet}

{#if promise}
	{#await promise}
		<div class={['suggestions placeholder', rest.class]}>
			<LoadingAnimation />
		</div>
	{:then suggestions}
		<ol class={['suggestions', rest.class]}>
			{#each suggestions as suggestion, index (suggestion.label)}
				<Suggestion
					{suggestion}
					onclick={() => onclick(suggestion)}
					selected={index === selectedIndex}
				/>
			{/each}
		</ol>
	{:catch error}
		{@render placeholder('codicon codicon-error', error.message)}
	{/await}
{:else}
	{@render placeholder('codicon codicon-info', 'Try clicking the +')}
{/if}

<style>
	.suggestions {
		background-color: var(--background-1);
		border-radius: 0 0 var(--border-radius) var(--border-radius);
	}

	.placeholder {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 8px;
		gap: var(--small-gap);
	}
</style>

<script>
	import TextButton from '$lib/components/pure/text-button/TextButton.svelte';
	import cookiesAccepted from '$lib/store/cookies-accepted-store';
	import { fly } from 'svelte/transition';
</script>

<div out:fly={{ y: 200, duration: 200 }}>
	<span>This site uses cookies</span>
	<TextButton title="Accept cookies" on:click={() => cookiesAccepted.set(true)}>Ok</TextButton>
</div>

<style>
	div {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100vw;

		display: flex;
		align-items: center;
		justify-content: center;
		gap: var(--grid-gap);
		padding: var(--grid-gap);

		background-color: var(--background-1);
		/* contain: strict; */
		z-index: var(--z-dialog);
	}
</style>

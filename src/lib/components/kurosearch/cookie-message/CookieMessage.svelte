<script>
	import TextButton from '$lib/components/pure/text-button/TextButton.svelte';
	import cookiesAccepted from '$lib/store/cookies-accepted-store';
	import { fly } from 'svelte/transition';
</script>

<section out:fly={{ y: 200, duration: 200 }}>
	<div>
		<span>This website uses cookies.</span>
		<TextButton title="Accept cookies" on:click={() => cookiesAccepted.set(true)}>Ok</TextButton>
	</div>
</section>

<style>
	section {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100vw;
		background-color: var(--background-1);
		z-index: var(--z-dialog);
	}

	div {
		max-width: var(--body-width);
		margin: auto;

		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--grid-gap);
		padding: var(--grid-gap);
	}
</style>

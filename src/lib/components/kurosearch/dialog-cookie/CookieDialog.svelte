<script lang="ts">
	import TextButton from '$lib/components/pure/button-text/TextButton.svelte';
	import { cookiesAccepted } from '$lib/store';
	import LynxMain from '../../../../routes/LynxMain.svelte';

	let dialog: HTMLDialogElement | undefined = $state();

	const accept = () => {
		cookiesAccepted.value = true;
		dialog?.close();
	};

	const leave = () => {
		history.back();
	};

	$effect(() => {
		if (!cookiesAccepted.value) {
			dialog?.showModal();
		}
	});
</script>

<dialog id="cookie-dialog" bind:this={dialog}>
	<LynxMain />
	<h2>kurosearch</h2>
	<b>Mature Content and Cookies</b>
	<p>
		By using this website you confirm that you are okay with and legally allowed to view such
		content.
	</p>
	<TextButton title="Accept terms of use" class="mixin-accent" onclick={accept}>Accept</TextButton>
	<TextButton title="Leave website" class="mixin-secondary" onclick={leave}>Leave</TextButton>
</dialog>

<style>
	dialog:open {
		display: grid;
		grid-template-columns: 1fr 1fr;
		background-color: var(--background-0);
		gap: var(--grid-gap);
		padding: var(--grid-gap);
		max-width: 500px;
		max-height: 99vh;
		border-radius: var(--border-radius-large);
		border: solid 2px crimson;
		box-shadow: 0 0 100px 100px black;

		&::backdrop {
			backdrop-filter: blur(10px);
		}

		:global(:first-child),
		h2,
		b,
		p {
			grid-column: span 2;
		}
	}

	h2 {
		place-self: center;
		font-family: 'Zen Kaku Gothic New', sans-serif;
		font-size: 72px;
		color: var(--accent);
		margin-block: -1rem 0;
	}

	@media (max-width: 600px) {
		h2 {
			font-size: 12vw;
		}
	}
</style>

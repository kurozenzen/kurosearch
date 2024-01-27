<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Dialog from '$lib/components/pure/dialog/Dialog.svelte';
	import Heading3 from '$lib/components/pure/heading/Heading3.svelte';
	import TextButton from '$lib/components/pure/text-button/TextButton.svelte';

	export let dialog: HTMLDialogElement;
	export let title: string;
	export let warning: string;
	export let labelConfirm: string;
	export let labelCancel: string;

	const dispatch = createEventDispatcher();
	const confirm = () => {
		dispatch('confirm');
		dialog.close();
	};
</script>

<Dialog on:close bind:dialog>
	<div>
		<Heading3>{title}</Heading3>
		<span>{warning}</span>
		<TextButton title="Delete supertag" on:click={confirm}>
			{labelConfirm}
		</TextButton>
		<TextButton type="secondary" title="Cancel" on:click={() => dialog.close()}>
			{labelCancel}
		</TextButton>
	</div>
</Dialog>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: var(--grid-gap);
	}
</style>

<script lang="ts">
	import Dialog from '$lib/components/pure/dialog/Dialog.svelte';
	import Heading3 from '$lib/components/pure/heading/Heading3.svelte';
	import TextButton from '$lib/components/pure/text-button/TextButton.svelte';

	interface Props {
		dialog: HTMLDialogElement;
		title: string;
		warning: string;
		labelConfirm: string;
		labelCancel: string;
		onconfirm: () => void;
		onclose?: () => void;
	}

	let {
		dialog = $bindable(),
		title,
		warning,
		labelConfirm,
		labelCancel,
		onconfirm,
		onclose
	}: Props = $props();

	const confirmAndClose = () => {
		onconfirm();
		dialog.close();
	};
</script>

<Dialog {onclose} bind:dialog>
	<div>
		<Heading3>{title}</Heading3>
		<span>{warning}</span>
		<TextButton title="Delete supertag" onclick={confirmAndClose}>
			{labelConfirm}
		</TextButton>
		<TextButton type="secondary" title="Cancel" onclick={() => dialog.close()}>
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

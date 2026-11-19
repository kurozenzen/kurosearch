<script lang="ts">
	import Dialog from '$lib/components/pure/dialog/Dialog.svelte';
	import TextButton from '$lib/components/pure/button-text/TextButton.svelte';
	import H3 from '$lib/components/pure/heading/H3.svelte';

	interface Props {
		open: boolean;
		title: string;
		warning: string;
		labelConfirm: string;
		labelCancel: string;
		onconfirm: () => void;
		onclose?: () => void;
	}

	let {
		open = $bindable(),
		title,
		warning,
		labelConfirm,
		labelCancel,
		onconfirm,
		onclose
	}: Props = $props();

	const confirmAndClose = () => {
		onconfirm();
		open = false;
	};
</script>

<Dialog {onclose} bind:open>
	<div>
		<H3 {title} />
		<span>{warning}</span>
		<TextButton title="Delete supertag" class="mixin-accent" onclick={confirmAndClose}>
			{labelConfirm}
		</TextButton>
		<TextButton title="Cancel" class="mixin-secondary" onclick={() => dialog.close()}>
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

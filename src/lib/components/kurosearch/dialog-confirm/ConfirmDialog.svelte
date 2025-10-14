<script lang="ts">
	import Dialog from '$lib/components/pure/dialog/Dialog.svelte';
	import Heading3 from '$lib/components/pure/heading/Heading3.svelte';
	import TextButton from '$lib/components/pure/button/TextButton.svelte';

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
		dialog?.close();
	};
</script>

<Dialog {onclose} bind:dialog>
	<div>
		<h2>{title}</h2>
		<span>{warning}</span>
		<div class="options">
			<TextButton type="secondary" title="Delete supertag" onclick={confirmAndClose}>
				{labelConfirm}
			</TextButton>
			<TextButton title="Cancel" onclick={() => dialog?.close()}>
				{labelCancel}
			</TextButton>
		</div>
	</div>
</Dialog>

<style lang="scss">
	div {
		display: flex;
		flex-direction: column;
		gap: var(--grid-gap);
		place-content: center;
		margin: 1rem 1rem 0.5rem 1rem;
	}

	span {
		max-width: 400px;
		word-wrap: break-word;
		hyphens: auto;
	}

	h2 {
		color: var(--text-highlight);
		font-size: var(--text-size-h3);
		padding-block-start: 1rem;
		padding-block-end: var(--grid-gap);
	}

	@media (min-width: 768px) {
		.options {
			flex-direction: row;
		}
	}
</style>

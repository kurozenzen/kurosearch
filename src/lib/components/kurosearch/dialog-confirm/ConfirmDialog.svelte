<script lang="ts">
	import Dialog from '$lib/components/pure/dialog/Dialog.svelte';
	import Heading3 from '$lib/components/pure/heading/Heading3.svelte';
	import TextButton from '$lib/components/pure/text-button/TextButton.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	const emitRemove = () => dispatch('confirm');
	const emitClose = () => dispatch('close');
	const confirm = () => {
		emitRemove();
		emitClose();
	};

	export let title: string;
	export let warning: string;
	export let labelConfirm: string;
	export let labelCancel: string;
</script>

<Dialog on:close>
	<div>
		<Heading3>{title}</Heading3>
		<span>{warning}</span>
		<TextButton title="Delete supertag" on:click={confirm}>{labelConfirm}</TextButton>
		<TextButton type="secondary" title="Cancel" on:click={emitClose}>{labelCancel}</TextButton>
	</div>
</Dialog>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: var(--grid-gap);
	}
</style>

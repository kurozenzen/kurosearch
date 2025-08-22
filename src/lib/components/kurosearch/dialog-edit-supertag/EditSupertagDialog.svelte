<script lang="ts">
	import Dialog from '$lib/components/pure/dialog/Dialog.svelte';
	import TextInput from '$lib/components/pure/input-text/TextInput.svelte';
	import TextButton from '$lib/components/pure/text-button/TextButton.svelte';
	import { getTagSuggestions } from '$lib/logic/api-client/ApiClient';
	import { nextModifier } from '$lib/logic/modifier-utils';
	import Searchbar from '../searchbar/Searchbar.svelte';
	import ModifiedTag from '../tag-modified/ModifiedTag.svelte';

	interface Props {
		dialog: HTMLDialogElement;
		supertag: kurosearch.Supertag;
		onedit: (oldName: string, newSupertag: kurosearch.Supertag) => void;
		onclose?: () => void;
	}

	let { dialog = $bindable(), supertag, onedit, onclose }: Props = $props();

	const emitEdit = () => onedit(supertag.name, newSupertag);

	let newSupertag = $state({ ...supertag, tags: [...supertag.tags] });
</script>

<Dialog bind:dialog {onclose}>
	<div>
		<h3>Edit Supertag</h3>
		<span>Name</span>
		<TextInput bind:value={newSupertag.name} placeholder="Name" autocomplete="false" />
		<span>Description</span>
		<TextInput
			bind:value={newSupertag.description}
			placeholder="Description"
			autocomplete="false"
		/>

		<span>Add or remove tags</span>
		<Searchbar
			placeholder="Search for tags"
			fetchSuggestions={getTagSuggestions}
			onpick={(suggestion) => {
				newSupertag.tags = [
					...newSupertag.tags,
					{ modifier: suggestion.modifier, name: suggestion.label }
				];
			}}
		/>
		<ul>
			{#each newSupertag.tags as tag, i}
				<ModifiedTag
					{tag}
					onclick={() => {
						newSupertag.tags.splice(i, 1);
						newSupertag.tags = [...newSupertag.tags];
					}}
					oncontextmenu={() => {
						newSupertag.tags[i].modifier = nextModifier(tag.modifier);
					}}
				/>
			{/each}
		</ul>
		<TextButton
			title="Save changes"
			onclick={() => {
				emitEdit();
				dialog.close();
			}}
		>
			Save
		</TextButton>
		<TextButton type="secondary" title="Cancel" onclick={() => dialog.close()}>Cancel</TextButton>
	</div>
</Dialog>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: var(--grid-gap);
	}

	span {
		font-size: var(--text-size-small);
		margin-block-end: -0.75rem;
	}

	ul {
		min-height: 24px;
		display: flex;
		flex-wrap: wrap;
		gap: var(--small-gap);
		justify-content: center;
	}
</style>

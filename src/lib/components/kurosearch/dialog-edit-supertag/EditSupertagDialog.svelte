<script lang="ts">
	import Dialog from '#lib/components/pure/dialog/Dialog.svelte';
	import TextInput from '#lib/components/pure/input-text/TextInput.svelte';
	import TextButton from '#lib/components/pure/button-text/TextButton.svelte';
	import { getTagSuggestions } from '#lib/logic/api-client/ApiClient';
	import { nextModifier } from '#lib/logic/modifier-utils';
	import Searchbar from '../searchbar/Searchbar.svelte';
	import ModifiedTag from '../tag-modified/ModifiedTag.svelte';

	interface Props {
		open: boolean;
		readonly supertag: kurosearch.Supertag | undefined;
		onedit: (newSupertag: kurosearch.Supertag) => void;
		onclose?: () => void;
	}

	let { open = $bindable(), supertag, onedit, onclose }: Props = $props();

	let newSupertag = $state<kurosearch.Supertag>({
		name: '',
		description: '',
		tags: []
	});

	$effect(() => {
		newSupertag = $state.snapshot(supertag) ?? {
			name: '',
			description: '',
			tags: []
		};
	});

	const emitEdit = () => {
		if (supertag !== undefined) {
			onedit(newSupertag);
		}
	};
</script>

<Dialog bind:open {onclose}>
	<div>
		<h3>Edit Supertag</h3>
		<span>Name</span>
		<TextInput
			id="supertag-name"
			bind:value={newSupertag.name}
			placeholder="Name"
			class="mixin-outline"
		/>
		<span>Description</span>
		<TextInput
			id="supertag-description"
			bind:value={newSupertag.description}
			placeholder="Description"
			class="mixin-outline"
		/>

		<span>Add or remove tags</span>
		<Searchbar
			fetchSuggestions={getTagSuggestions}
			onpick={(suggestion, modifier) => {
				newSupertag.tags = [...newSupertag.tags, { modifier, name: suggestion.label }];
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
			class="mixin-accent"
			onclick={() => {
				emitEdit();
				open = false;
			}}
		>
			Save
		</TextButton>
		<TextButton
			title="Cancel"
			class="mixin-secondary"
			onclick={() => {
				open = false;
			}}
		>
			Cancel
		</TextButton>
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

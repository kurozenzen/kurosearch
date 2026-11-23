<script lang="ts">
	import Dialog from '#lib/components/pure/dialog/Dialog.svelte';
	import TextButton from '#lib/components/pure/button-text/TextButton.svelte';
	import DetailedTag from '#lib/components/kurosearch/tag-detailed/DetailedTag.svelte';
	import { activeTags } from '#lib/store';
	import { createNewSupertagFromActiveTags } from '#lib/logic/supertags.svelte';
	import TextInput from '#lib/components/pure/input-text/TextInput.svelte';

	interface Props {
		open: boolean;
	}

	let { open = $bindable() }: Props = $props();

	let name = $state('');
	let description = $state('');

	let valid = $derived(name !== '' && activeTags.value.length > 1);
</script>

<Dialog bind:open>
	<section>
		<h3>Create Supertag</h3>

		<button
			type="button"
			class="codicon codicon-close"
			onclick={() => {
				open = false;
			}}
			aria-label="Close"
		></button>

		<div>
			<label for="supertag-name"> Name </label>
			<TextInput
				bind:value={name}
				placeholder="Descriptive name"
				id="supertag-name"
				class="mixin-outline"
			/>
		</div>

		<div>
			<label for="supertag-description"> Description </label>
			<TextInput
				bind:value={description}
				placeholder="Short description"
				id="supertag-description"
				class="mixin-outline"
			/>
		</div>

		<div>
			<span> Tags</span>
			<ol>
				{#each activeTags.value as tag}
					<DetailedTag {tag} />
				{/each}
			</ol>
		</div>
		<div class="last">
			<TextButton
				title={valid ? 'Click to create supertag' : 'Enter a valid name to continue'}
				disabled={!valid}
				class="mixin-accent"
				onclick={() => {
					createNewSupertagFromActiveTags({
						name,
						description,
						tags: activeTags.value.map(({ modifier, name }) => ({ modifier, name }))
					});
					open = false;
				}}
			>
				Create supertag
			</TextButton>
		</div>
	</section>
</Dialog>

<style>
	section {
		display: grid;
		grid-template-columns: 1fr auto;
		gap: var(--small-gap);
		border-radius: var(--border-radius-small);
	}

	button {
		justify-self: end;
	}

	div {
		grid-column: span 2;
	}

	.last {
		display: grid;
		place-items: center;
	}

	label,
	span {
		display: block;
		margin-bottom: var(--tiny-gap);
		color: var(--text);
		font-size: var(--text-size-small);
	}

	div :global(input) {
		width: 100%;
	}

	ol {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}
</style>

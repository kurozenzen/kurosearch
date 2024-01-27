<script lang="ts">
	import Checkbox from '$lib/components/pure/checkbox/Checkbox.svelte';
	import Heading1 from '$lib/components/pure/heading/Heading1.svelte';
	import Preference from '$lib/components/pure/preference/Preference.svelte';
	import Select from '$lib/components/pure/select/Select.svelte';
	import TextButton from '$lib/components/pure/text-button/TextButton.svelte';
	import { ALL_BLOCKING_GROUPS } from '$lib/logic/blocking-group-data';
	import blockedContent from '$lib/store/blocked-content-store';
	import localstorageEnabled from '$lib/store/localstorage-enabled-store';
	import alwaysLoop from '$lib/store/always-loop-store';
	import theme from '$lib/store/theme-store';
	import resultColumns from '$lib/store/result-columns-store';
	import ConfirmDialog from '$lib/components/kurosearch/dialog-confirm/ConfirmDialog.svelte';
	import cookiesAccepted from '$lib/store/cookies-accepted-store';
	import highResolutionEnabled from '$lib/store/high-resolution-enabled';
	import resultsStore from '$lib/store/results-store';
	import activeTagsStore from '$lib/store/active-tags-store';
	import activeSupertagsStore from '$lib/store/active-supertags-store';

	let resetDialog: HTMLDialogElement;

	const THEME_OPTIONS = Object.freeze({
		'crimson dark': 'Dark',
		'crimson light': 'Light',
		'hotpink light': 'Bubblegum',
		'hotpink dark': 'Dark Bubblegum',
		'crimson coffee': 'Coffee'
	});
	const RESULT_COLUMNS_OPTIONS = Object.freeze({
		'1': 'Single Column',
		'2': 'Two Columns',
		'3': 'Three Columns',
		'4': 'Four Columns'
	});

	const reset = () => {
		theme.reset();
		localstorageEnabled.reset();
		blockedContent.reset();
		alwaysLoop.reset();
		resultColumns.reset();
		cookiesAccepted.reset();
		highResolutionEnabled.reset();
	};
</script>

<svelte:head>
	<title>kurosearch - Preferences</title>
</svelte:head>

<section>
	<Heading1>Preferences</Heading1>

	<Preference title="Theme" description="Change the look of the app.">
		<Select bind:value={$theme} options={THEME_OPTIONS} />
	</Preference>

	<Preference title="Save Tags & Posts" description="Save active tags and posts between sessions.">
		<Checkbox id="checkbox-localstorage-enabled" bind:checked={$localstorageEnabled}>
			{$localstorageEnabled ? 'Save' : "Don't save"}
		</Checkbox>
		<div>
			<TextButton title="Reset Posts" type="secondary" on:click={() => resultsStore.reset()}>
				Reset Posts
			</TextButton>
			<TextButton
				title="Reset Tags"
				type="secondary"
				on:click={() => {
					activeTagsStore.reset();
					activeSupertagsStore.reset();
				}}
			>
				Reset Tags
			</TextButton>
		</div>
	</Preference>

	<Preference
		title="Blocked Content"
		description="Completely prevent certain types of posts without cluttering your search."
	>
		{#each ALL_BLOCKING_GROUPS as groupName}
			<Checkbox id={`checkbox-${groupName}`} bind:checked={$blockedContent[groupName]}>
				{groupName}
			</Checkbox>
		{/each}
	</Preference>

	<Preference
		title="Loop Videos"
		description="By default only videos with the 'loop' tag are looped. When this setting is enabled, all videos are looped."
	>
		<Checkbox id="checkbox-always-loop" bind:checked={$alwaysLoop}>
			{$alwaysLoop ? 'Always' : "Only with 'loop' tag"}
		</Checkbox>
	</Preference>

	<Preference title="Result layout" description="Save active tags and posts between sessions.">
		<Select bind:value={$resultColumns} options={RESULT_COLUMNS_OPTIONS} />
	</Preference>

	<Preference
		title="Higher Resolution"
		description="When enabled, the app will always load the highest resolution available. This causes increased network consumption and can impact performance."
	>
		<Checkbox id="checkbox-high-resolution-enabled" bind:checked={$highResolutionEnabled}>
			{$highResolutionEnabled ? 'Enabled' : 'Disabled'}
		</Checkbox>
	</Preference>

	<Preference
		title="Reset preferences"
		description="Undo all customizations and return to default settings."
	>
		<TextButton title="Reset preferences" on:click={() => resetDialog.showModal()}>Reset</TextButton
		>
	</Preference>
</section>

<ConfirmDialog
	bind:dialog={resetDialog}
	title="Reset Preferences"
	warning="This will reset all your settings to default values. Are you sure you want to do that?"
	labelConfirm="Yes, reset"
	labelCancel="Cancel"
	on:confirm={reset}
/>

<style>
	section {
		padding-inline: var(--grid-gap);
	}

	div {
		display: flex;
		padding-block-start: var(--grid-gap);
		flex-wrap: wrap;
		gap: var(--grid-gap);
	}
</style>

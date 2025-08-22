<script lang="ts" context="module">
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
</script>

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
	import apiKey from '$lib/store/api-key-store';
	import userId from '$lib/store/user-id-store';
	import resultColumns from '$lib/store/result-columns-store';
	import ConfirmDialog from '$lib/components/kurosearch/dialog-confirm/ConfirmDialog.svelte';
	import cookiesAccepted from '$lib/store/cookies-accepted-store';
	import highResolutionEnabled from '$lib/store/high-resolution-enabled';
	import resultsStore from '$lib/store/results-store';
	import activeTagsStore from '$lib/store/active-tags-store';
	import autoplayFullscreenEnabled from '$lib/store/autoplay-fullscreen-enabled-store';
	import autoplayFullscreenDelay from '$lib/store/autoplay-fullscreen-delay-store';
	import activeSupertagsStore from '$lib/store/active-supertags-store';
	import wideLayoutEnabled from '$lib/store/wide-layout-enabled-store';
	import gifPreloadEnabled from '$lib/store/gif-preload-enabled-store';
	import { addHistory } from '$lib/logic/use/onpopstate';
	import NumberInput from '$lib/components/kurosearch/dialog-sort-filter/NumberInput.svelte';
	import openTagsOnPostClick from '$lib/store/tags-shortcut-store';
	import TextInput from '$lib/components/pure/input-text/TextInput.svelte';
	import pageNavigationEnabled from '$lib/store/page-navigation-enabled-store';

	let resetDialog: HTMLDialogElement;

	const reset = () => {
		theme.reset();
		localstorageEnabled.reset();
		blockedContent.reset();
		alwaysLoop.reset();
		resultColumns.reset();
		cookiesAccepted.reset();
		highResolutionEnabled.reset();
		wideLayoutEnabled.reset();
		gifPreloadEnabled.reset();
		apiKey.reset();
		userId.reset();
		pageNavigationEnabled.reset();
	};
</script>

<svelte:head>
	<title>kurosearch - Preferences</title>
	<meta
		name="description"
		content="Customize your kurosearch browsing experience however you like."
	/>
</svelte:head>

<section>
	<Heading1>Preferences</Heading1>

	<Preference title="Theme" description="Change the look of the app.">
		<Select bind:value={$theme} options={THEME_OPTIONS} />
	</Preference>

	<Preference title="API Access" description="Use your own API key to rule34.xxx.">
		<div class="button-row">
			<TextInput bind:value={$apiKey} placeholder="Enter your API key here" />
			<TextInput bind:value={$userId} placeholder="Enter your User Id here" />
			<a
				href="https://rule34.xxx/index.php?page=account&s=options"
				target="_blank"
				rel="noopener noreferrer">Manage your API key</a
			>
		</div>
	</Preference>

	<Preference title="Save Tags & Posts" description="Save active tags and posts between sessions.">
		<Checkbox id="checkbox-localstorage-enabled" bind:checked={$localstorageEnabled}>
			{$localstorageEnabled ? 'Save' : "Don't save"}
		</Checkbox>
		<div class="button-row">
			<TextButton title="Reset Posts" type="secondary" onclick={() => resultsStore.reset()}>
				Reset Posts
			</TextButton>
			<TextButton
				title="Reset Tags"
				type="secondary"
				onclick={() => {
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

	<Preference
		title="Autoscroll in Fullscreen"
		description="When enabled, fullscreen view will scroll automatically."
	>
		<div class="flex">
			<Checkbox id="checkbox-fullscreen-autplay" bind:checked={$autoplayFullscreenEnabled}>
				{$autoplayFullscreenEnabled ? 'Enabled' : 'Disabled'}
			</Checkbox>
			<NumberInput bind:value={$autoplayFullscreenDelay} min={1} max={60} step={1} />
			<span>{$autoplayFullscreenDelay} seconds</span>
		</div>
	</Preference>

	<Preference title="Result layout" description="Save active tags and posts between sessions.">
		<div class="flex">
			<Select bind:value={$resultColumns} options={RESULT_COLUMNS_OPTIONS} />
			<Checkbox id="checkbox-wide-layout" bind:checked={$wideLayoutEnabled}>
				{$wideLayoutEnabled ? 'Extra wide' : 'Default width'}
			</Checkbox>
		</div>
	</Preference>

	<Preference
		title="Enable Page Navigation"
		description="Navigate using pages instead of infinite scrolling."
	>
		<div class="flex">
			<Checkbox id="checkbox-page-navigation" bind:checked={$pageNavigationEnabled}>
				{$pageNavigationEnabled ? 'Enabled' : 'Disabled'}
			</Checkbox>
		</div>
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
		title="Gif Preload"
		description="When enabled, GIFs will load faster if you have a powerful internet connection but consume more bandwidth. Do not enable with limited bandwidth."
	>
		<Checkbox id="checkbox-gif-preload-enabled" bind:checked={$gifPreloadEnabled}>
			{$gifPreloadEnabled ? 'Enabled' : 'Disabled'}
		</Checkbox>
	</Preference>

	<Preference
		title="[LEGACY] Open tags on click"
		description="When enabled, clicking a post will immediately display the tags. This confilicts with other features. Use at your own risk."
	>
		<div class="flex">
			<Checkbox id="checkbox-tags-shortcut" bind:checked={$openTagsOnPostClick}>
				{$openTagsOnPostClick ? 'Enabled' : 'Disabled'}
			</Checkbox>
		</div>
	</Preference>

	<Preference
		title="Reset preferences"
		description="Undo all customizations and return to default settings."
	>
		<TextButton
			title="Reset preferences"
			onclick={() => {
				resetDialog.showModal();
				addHistory('dialog');
			}}
		>
			Reset
		</TextButton>
	</Preference>
</section>

<ConfirmDialog
	bind:dialog={resetDialog}
	title="Reset Preferences"
	warning="This will reset all your settings to default values. Are you sure you want to do that?"
	labelConfirm="Yes, reset"
	labelCancel="Cancel"
	onconfirm={reset}
/>

<style>
	section {
		padding-inline: var(--grid-gap);
	}

	.button-row {
		display: flex;
		padding-block-start: var(--grid-gap);
		flex-wrap: wrap;
		gap: var(--grid-gap);
		align-items: center;
	}

	.flex {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--grid-gap);
	}
</style>

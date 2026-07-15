<script lang="ts" context="module">
	const THEME_OPTIONS = Object.freeze({
		'crimson dark': 'Dark',
		'crimson light': 'Light',
		'hotpink light': 'Bubblegum',
		'hotpink dark': 'Dark Bubblegum',
		'crimson coffee': 'Coffee',
		'green rule34': 'Classic Rule34',
		'white dark': 'Monochrome Dark',
		'black light': 'Monochrome Light',
		'purple purple': 'Purple'
	});
	const RESULT_COLUMNS_OPTIONS = Object.freeze({
		'1': 'Single Column',
		'2': 'Two Columns',
		'3': 'Three Columns',
		'4': 'Four Columns'
	});
</script>

<script lang="ts">
	import ConfirmDialog from '$lib/components/kurosearch/dialog-confirm/ConfirmDialog.svelte';
	import NumberInput from '$lib/components/kurosearch/dialog-sort-filter/NumberInput.svelte';
	import Checkbox from '$lib/components/pure/checkbox/Checkbox.svelte';
	import TextInput from '$lib/components/pure/input-text/TextInput.svelte';
	import PageGeneric from '$lib/components/pure/page-generic/PageGeneric.svelte';
	import Preference from '$lib/components/pure/preference/Preference.svelte';
	import Select from '$lib/components/pure/select/Select.svelte';
	import TextButton from '$lib/components/pure/text-button/TextButton.svelte';
	import { addHistory } from '$lib/logic/attachments/onpopstate';
	import { ALL_BLOCKING_GROUPS } from '$lib/logic/blocking-group-data';
	import activeSupertagsStore from '$lib/store/active-supertags-store';
	import activeTagsStore from '$lib/store/active-tags-store';
	import alwaysLoop from '$lib/store/always-loop-store';
	import apiKey from '$lib/store/api-key-store';
	import autoplayFullscreenDelay from '$lib/store/autoplay-fullscreen-delay-store';
	import autoplayFullscreenEnabled from '$lib/store/autoplay-fullscreen-enabled-store';
	import blockedContent from '$lib/store/blocked-content-store';
	import cookiesAccepted from '$lib/store/cookies-accepted-store';
	import gifPreloadEnabled from '$lib/store/gif-preload-enabled-store';
	import highResolutionEnabled from '$lib/store/high-resolution-enabled';
	import localstorageEnabled from '$lib/store/localstorage-enabled-store';
	import pageNavigationEnabled from '$lib/store/page-navigation-enabled-store';
	import resultColumns from '$lib/store/result-columns-store';
	import resultsStore from '$lib/store/results-store';
	import openTagsOnPostClick from '$lib/store/tags-shortcut-store';
	import theme from '$lib/store/theme-store';
	import userId from '$lib/store/user-id-store';
	import wideLayoutEnabled from '$lib/store/wide-layout-enabled-store';

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

<PageGeneric title="Preferences">
	<Preference title="Theme" description="Change the look of the app.">
		<Select bind:value={$theme} options={THEME_OPTIONS} />
	</Preference>

	<Preference
		title="API Key"
		description="Use your own API key to rule34.xxx. This can speed up loading times. Some issues will not affect you, if you have your own key"
	>
		<div class="button-row">
			<TextInput bind:value={$apiKey} placeholder="Enter your API key here" />
			<TextInput bind:value={$userId} placeholder="Enter your User Id here" />
			<a
				href="https://rule34.xxx/index.php?page=account&s=options"
				target="_blank"
				rel="noopener noreferrer">Get your API key</a
			>
		</div>
	</Preference>

	<Preference
		title="Save Tags & Posts"
		description="Save active tags and posts between sessions. Note: This does not work well if you use multipe tabs frequently."
	>
		<Checkbox id="checkbox-localstorage-enabled" bind:checked={$localstorageEnabled}>Save</Checkbox>
		<div class="button-row">
			<TextButton title="Reset Posts" class="mixin-secondary" onclick={() => resultsStore.reset()}>
				Reset Posts
			</TextButton>
			<TextButton
				title="Reset Tags"
				class="mixin-secondary"
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
		<div>
			{#each ALL_BLOCKING_GROUPS as groupName}
				<Checkbox id={`checkbox-${groupName}`} bind:checked={$blockedContent[groupName]}>
					{groupName}
				</Checkbox>
			{/each}
		</div>
	</Preference>

	<Preference
		title="Loop Videos"
		description="By default only videos with the 'loop' tag are looped. When this setting is enabled, all videos are looped."
	>
		<Checkbox id="checkbox-always-loop" bind:checked={$alwaysLoop}>Always Loop</Checkbox>
	</Preference>

	<Preference
		title="Autoscroll in Fullscreen"
		description="When enabled, fullscreen view will scroll automatically."
	>
		<div class="button-row">
			<Checkbox id="checkbox-fullscreen-autplay" bind:checked={$autoplayFullscreenEnabled}>
				Scroll automatically
			</Checkbox>
			<NumberInput bind:value={$autoplayFullscreenDelay} min={1} max={60} step={1} />
			<span> After {$autoplayFullscreenDelay} seconds</span>
		</div>
	</Preference>

	<Preference title="Result layout" description="Choose how results are arranged.">
		<div class="button-row">
			<Select bind:value={$resultColumns} options={RESULT_COLUMNS_OPTIONS} />
			<Checkbox id="checkbox-wide-layout" bind:checked={$wideLayoutEnabled}>
				Extend horizontally
			</Checkbox>
		</div>
	</Preference>

	<Preference
		title="Page Navigation"
		description="Navigate using pages instead of infinite scrolling."
	>
		<div class="button-row">
			<Checkbox id="checkbox-page-navigation" bind:checked={$pageNavigationEnabled}>
				Use page navigation
			</Checkbox>
		</div>
	</Preference>

	<Preference
		title="Higher Resolution"
		description="When enabled, the app will always load the highest resolution available. This causes increased network consumption and can impact performance."
	>
		<Checkbox id="checkbox-high-resolution-enabled" bind:checked={$highResolutionEnabled}>
			Enable high resolution
		</Checkbox>
	</Preference>

	<Preference
		title="Gif Preload"
		description="When enabled, GIFs will load faster if you have a powerful internet connection but consume more bandwidth. Do not enable with limited bandwidth."
	>
		<Checkbox id="checkbox-gif-preload-enabled" bind:checked={$gifPreloadEnabled}>
			Preload GIFs
		</Checkbox>
	</Preference>

	<Preference
		title="[LEGACY] Open tags on click"
		description="When enabled, clicking a post will immediately display the tags. This confilicts with other features. Use at your own risk."
	>
		<div class="button-row">
			<Checkbox id="checkbox-tags-shortcut" bind:checked={$openTagsOnPostClick}>
				Open tags on click
			</Checkbox>
		</div>
	</Preference>

	<Preference
		title="Reset preferences"
		description="Undo all customizations and return to default settings."
	>
		<TextButton
			title="Reset preferences"
			class="mixin-accent"
			onclick={() => {
				resetDialog.showModal();
				addHistory('dialog');
			}}
		>
			Reset
		</TextButton>
	</Preference>
</PageGeneric>

<ConfirmDialog
	bind:dialog={resetDialog}
	title="Reset Preferences"
	warning="This will reset all your settings to default values. Are you sure you want to do that?"
	labelConfirm="Yes, reset"
	labelCancel="Cancel"
	onconfirm={reset}
/>

<style>
	.button-row {
		display: flex;
		flex-wrap: wrap;
		gap: var(--grid-gap);
		align-items: center;
	}
</style>

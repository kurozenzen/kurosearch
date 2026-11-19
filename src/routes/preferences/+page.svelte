<script lang="ts" module>
	const THEME_OPTIONS = Object.freeze({
		'crimson dark': 'Dark',
		'crimson light': 'Light',
		'hotpink light': 'Bubblegum',
		'hotpink dark': 'Dark Bubblegum',
		'crimson coffee': 'Coffee',
		'green rule34': 'Classic Rule34',
		'white dark': 'Monochrome Dark',
		'black light': 'Monochrome Light',
		'purple purple': 'Purple',
		'lynx dark': 'Lynx'
	});
</script>

<script lang="ts">
	import ConfirmDialog from '$lib/components/kurosearch/dialog-confirm/ConfirmDialog.svelte';
	import NumberInput from '$lib/components/pure/input-number/NumberInput.svelte';
	import IconButton from '$lib/components/pure/button-icon/IconButton.svelte';
	import Checkbox from '$lib/components/pure/checkbox/Checkbox.svelte';
	import FlexRow from '$lib/components/pure/flex-row/FlexRow.svelte';
	import TextInput from '$lib/components/pure/input-text/TextInput.svelte';
	import PageGeneric from '$lib/components/pure/page-generic/PageGeneric.svelte';
	import Preference from '$lib/components/pure/preference/Preference.svelte';
	import Select from '$lib/components/pure/select/Select.svelte';
	import TextButton from '$lib/components/pure/button-text/TextButton.svelte';
	import { ALL_BLOCKING_GROUPS } from '$lib/logic/blocking-group-data';
	import {
		activeSupertags,
		activeTags,
		alwaysLoop,
		autoplayFullscreenDelay,
		autoplayFullscreenEnabled,
		blockedContent,
		cookiesAccepted,
		dataSaver,
		gifPreloadEnabled,
		highResolutionEnabled,
		pageNavigationEnabled,
		resultColumns,
		results,
		tagsShortcut,
		theme,
		wideLayoutEnabled
	} from '$lib/store';
	import { semiPersistentStorage } from '$lib/store/generic/storage-semi.svelte';

	let showResetDialog = $state(false);

	const reset = () => {
		theme.reset();
		semiPersistentStorage.localStorageEnabled = false;
		blockedContent.reset();
		alwaysLoop.reset();
		resultColumns.reset();
		cookiesAccepted.reset();
		highResolutionEnabled.reset();
		wideLayoutEnabled.reset();
		gifPreloadEnabled.reset();
		pageNavigationEnabled.reset();
		autoplayFullscreenEnabled.reset();
		autoplayFullscreenDelay.reset();
		dataSaver.reset();
		tagsShortcut.reset();
	};

	let searchTerm = $state('');

	const checkDisplay = (preferenceName: string): boolean => {
		if (searchTerm.trim() === '') {
			return true;
		}
		return preferenceName.toLowerCase().includes(searchTerm.toLowerCase());
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
	<Preference title="Search" description="Search for preferences by name.">
		<FlexRow>
			<TextInput
				bind:value={searchTerm}
				placeholder="Enter preference name"
				class="mixin-outline"
			/>
			{#if searchTerm.trim() !== ''}
				<IconButton
					class="mixin-invisible"
					onclick={() => {
						searchTerm = '';
					}}
				>
					<i class="codicon codicon-close"></i>
				</IconButton>
			{/if}
		</FlexRow>
	</Preference>

	<Preference
		title="Theme"
		display={checkDisplay('Theme')}
		description="Change the look of the app."
	>
		<Select bind:value={theme.value} options={THEME_OPTIONS} />
	</Preference>

	<Preference
		title="Save Tags & Posts"
		display={checkDisplay('Save Tags & Posts')}
		description="Save active tags and posts between sessions. Note: This does not work well if you use multipe tabs frequently."
	>
		<Checkbox
			id="checkbox-localstorage-enabled"
			bind:checked={semiPersistentStorage.localStorageEnabled}>Save</Checkbox
		>
		<FlexRow>
			<TextButton title="Reset Posts" class="mixin-secondary" onclick={() => results.reset()}>
				Reset Posts
			</TextButton>
			<TextButton
				title="Reset Tags"
				class="mixin-secondary"
				onclick={() => {
					activeTags.reset();
					activeSupertags.reset();
				}}
			>
				Reset Tags
			</TextButton>
		</FlexRow>
	</Preference>

	<Preference
		title="Blocked Content"
		display={checkDisplay('Blocked Content')}
		description="Completely prevent certain types of posts without cluttering your search."
	>
		<div>
			{#each ALL_BLOCKING_GROUPS as groupName}
				<Checkbox id={`checkbox-${groupName}`} bind:checked={blockedContent.value[groupName]}>
					{groupName}
				</Checkbox>
			{/each}
		</div>
	</Preference>

	<Preference
		title="Loop Videos"
		display={checkDisplay('Loop Videos')}
		description="By default only videos with the 'loop' tag are looped. When this setting is enabled, all videos are looped."
	>
		<Checkbox id="checkbox-always-loop" bind:checked={alwaysLoop.value}>Always Loop</Checkbox>
	</Preference>

	<Preference
		title="Autoscroll in Fullscreen"
		display={checkDisplay('Autoscroll in Fullscreen')}
		description="When enabled, fullscreen view will scroll automatically."
	>
		<FlexRow>
			<Checkbox id="checkbox-fullscreen-autplay" bind:checked={autoplayFullscreenEnabled.value}>
				Scroll automatically
			</Checkbox>
			<NumberInput bind:value={autoplayFullscreenDelay.value} min={1} max={60} step={1} />
			<span> After {autoplayFullscreenDelay.value} seconds</span>
		</FlexRow>
	</Preference>

	<Preference
		title="Result layout"
		display={checkDisplay('Result layout')}
		description="Choose how results are arranged."
	>
		<FlexRow>
			<NumberInput min={1} max={10} step={1} bind:value={resultColumns.value} />
			<Checkbox id="checkbox-wide-layout" bind:checked={wideLayoutEnabled.value}>
				Extend horizontally
			</Checkbox>
		</FlexRow>
	</Preference>

	<Preference
		title="Page Navigation"
		display={checkDisplay('Page Navigation')}
		description="Navigate using pages instead of infinite scrolling."
	>
		<Checkbox id="checkbox-page-navigation" bind:checked={pageNavigationEnabled.value}>
			Use page navigation
		</Checkbox>
	</Preference>

	<Preference
		title="Higher Resolution"
		display={checkDisplay('Higher Resolution')}
		description="When enabled, the app will always load the highest resolution available. This causes increased network consumption and can impact performance."
	>
		<Checkbox id="checkbox-high-resolution-enabled" bind:checked={highResolutionEnabled.value}>
			Enable high resolution
		</Checkbox>
	</Preference>

	<Preference
		title="Data Saver"
		display={checkDisplay('Data Saver')}
		description="When enabled, the app will only load comics on demand."
	>
		<Checkbox id="checkbox-high-resolution-enabled" bind:checked={dataSaver.value}>
			Enable data saver
		</Checkbox>
	</Preference>

	<Preference
		title="Gif Preload"
		display={checkDisplay('Gif Preload')}
		description="When enabled, GIFs will load faster if you have a powerful internet connection but consume more bandwidth. Do not enable with limited bandwidth."
	>
		<Checkbox id="checkbox-gif-preload-enabled" bind:checked={gifPreloadEnabled.value}>
			Preload GIFs
		</Checkbox>
	</Preference>

	<Preference
		title="[LEGACY] Open tags on click"
		display={checkDisplay('[LEGACY] Open tags on click')}
		description="When enabled, clicking a post will immediately display the tags. This confilicts with other features. Use at your own risk."
	>
		<Checkbox id="checkbox-tags-shortcut" bind:checked={tagsShortcut.value}>
			Open tags on click
		</Checkbox>
	</Preference>

	<Preference
		title="Reset preferences"
		display={checkDisplay('Reset preferences')}
		description="Undo all customizations and return to default settings."
	>
		<TextButton
			title="Reset preferences"
			class="mixin-accent"
			onclick={() => {
				showResetDialog = true;
			}}
		>
			Reset
		</TextButton>
	</Preference>
</PageGeneric>

<ConfirmDialog
	bind:open={showResetDialog}
	title="Reset Preferences"
	warning="This will reset all your settings to default values. Are you sure you want to do that?"
	labelConfirm="Yes, reset"
	labelCancel="Cancel"
	onconfirm={reset}
/>

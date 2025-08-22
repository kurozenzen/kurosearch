<script lang="ts">
	import Checkbox from '$lib/components/pure/checkbox/Checkbox.svelte';
	import Heading1 from '$lib/components/pure/heading/Heading1.svelte';
	import Heading3 from '$lib/components/pure/heading/Heading3.svelte';
	import LoadingAnimation from '$lib/components/pure/loading-animation/LoadingAnimation.svelte';
	import RotatingIconSelect from '$lib/components/pure/rotating-select/RotatingIconSelect.svelte';
	import RotatingTextSelect from '$lib/components/pure/rotating-select/RotatingTextSelect.svelte';
	import Select from '$lib/components/pure/select/Select.svelte';
	import TextButton from '$lib/components/pure/text-button/TextButton.svelte';
	import TextInput from '$lib/components/pure/input-text/TextInput.svelte';
	import ToggleIcon from '$lib/components/pure/toggle-icon/ToggleIcon.svelte';
	import ModifierSelect from '$lib/components/kurosearch/modifier-select/ModifierSelect.svelte';
	import ActiveTag from '$lib/components/kurosearch/tag-detailed/DetailedTag.svelte';
	import { TAG_TYPES_WITH_ICONS } from '$lib/logic/tag-type-data';
	import CodiconLink from '$lib/components/pure/icon-link/CodiconLink.svelte';
	import DiscordLink from '$lib/components/kurosearch/link-discord/DiscordLink.svelte';
	import AccountLink from '$lib/components/kurosearch/link-account/AccountLink.svelte';
	import SettingsLink from '$lib/components/kurosearch/settings-link/SettingsLink.svelte';
	import defaultUserSrc from '$lib/assets/default-user.png';
	import { resolve } from '$app/paths';

	const tagTypeLetters = Object.fromEntries(
		Object.keys(TAG_TYPES_WITH_ICONS).map((t) => [t, t.charAt(0)])
	);

	let count = $state(0);
	let disabled = $state(false);
	let name = $state('');
	let selectedValue = $state('one');
	let selectedType: kurosearch.TagType = $state('artist');
	let modifier: kurosearch.TagModifier = $state('+');
</script>

<svelte:head>
	<title>kurosearch - Component Test</title>
</svelte:head>

<Heading1>Testing</Heading1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Heading3>Components</Heading3>

<Checkbox bind:checked={disabled} id="cb-disabled">Disabled</Checkbox>

<TextButton
	title="A button"
	onclick={() => {
		count++;
	}}
	{disabled}
>
	Clicked {count} times
</TextButton>

<TextInput placeholder="Name" bind:value={name} />
<p>Hi {name}</p>

<LoadingAnimation />
<Select options={{ one: 'One', two: 'Two', three: 'Three' }} bind:value={selectedValue} />
<p>Selected {selectedValue}</p>
<ToggleIcon bind:active={disabled} title="asdf" icon="codicon codicon-info" />
<RotatingIconSelect options={TAG_TYPES_WITH_ICONS} bind:value={selectedType} />
<RotatingTextSelect options={tagTypeLetters} bind:value={selectedType} />

<ModifierSelect bind:modifier />
<ActiveTag tag={{ modifier, name: 'my_tag', type: selectedType, count: 212333 }} active />
<ActiveTag tag={{ modifier, name: 'my_tag', type: 'ambiguous', count: 212333 }} />
<CodiconLink
	title="Sponsor"
	href="https://ko-fi.com/kurozenzen"
	icon="codicon codicon-heart"
	newtab
/>
<DiscordLink />
<CodiconLink title="Documentation" href={resolve('/help')} icon="codicon codicon-book" />
<CodiconLink title="Search" href={resolve('/')} icon="codicon codicon-search" />
<SettingsLink />
<AccountLink src={disabled ? defaultUserSrc : undefined} />

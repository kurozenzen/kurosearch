<script lang="ts" module>
	import Checkbox from '$lib/components/pure/checkbox/Checkbox.svelte';
	import LoadingAnimation from '$lib/components/pure/loading-animation/LoadingAnimation.svelte';
	import RotatingIconSelect from '$lib/components/pure/rotating-select/RotatingIconSelect.svelte';
	import RotatingTextSelect from '$lib/components/pure/rotating-select/RotatingTextSelect.svelte';
	import Select from '$lib/components/pure/select/Select.svelte';
	import TextButton from '$lib/components/pure/button-text/TextButton.svelte';
	import TextInput from '$lib/components/pure/input-text/TextInput.svelte';
	import ToggleIcon from '$lib/components/pure/toggle-icon/ToggleIcon.svelte';
	import ModifierSelect from '$lib/components/kurosearch/modifier-select/ModifierSelect.svelte';
	import ActiveTag from '$lib/components/kurosearch/tag-detailed/DetailedTag.svelte';
	import { TAG_TYPES_WITH_ICONS } from '$lib/logic/tag-type-data';
	import CodiconLink from '$lib/components/pure/icon-link/CodiconLink.svelte';
	import DiscordLink from '$lib/components/kurosearch/link-discord/DiscordLink.svelte';
	import AccountLink from '$lib/components/kurosearch/link-account/AccountLink.svelte';
	import SettingsLink from '$lib/components/kurosearch/header/LinkSettings.svelte';
	import defaultUserSrc from '$lib/assets/default-user.png';
	import { resolve } from '$app/paths';
	import lynxChibiSrc from '$lib/assets/lynxy-chibi.webp';
	import lynxChibiHalloweenSrc from '$lib/assets/lynxy-chibi-halloween.webp';
	import { getAllPosts, getAllTags } from '$lib/indexeddb/idb';
	import Preference from '$lib/components/pure/preference/Preference.svelte';
	import FlexRow from '$lib/components/pure/flex-row/FlexRow.svelte';
	import PageGeneric from '$lib/components/pure/page-generic/PageGeneric.svelte';
	import IconButton from '$lib/components/pure/button-icon/IconButton.svelte';
	import ScrollUpButton from '$lib/components/pure/button-scroll-up/ScrollUpButton.svelte';
	import NumberInput from '$lib/components/pure/input-number/NumberInput.svelte';

	const tagTypeLetters = Object.fromEntries(
		Object.keys(TAG_TYPES_WITH_ICONS).map((t) => [t, t.charAt(0)])
	);

	const downloadIDBTags = async () => {
		const tags = await getAllTags();

		const blob = new Blob([JSON.stringify(tags, null, 2)], { type: 'application/json' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = 'kurosearch_tags.json';
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
	};

	const downloadIDBPosts = async () => {
		const posts = await getAllPosts();

		const blob = new Blob([JSON.stringify(posts, null, 2)], { type: 'application/json' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = 'kurosearch_posts.json';
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
	};
</script>

<script lang="ts">
	let count = $state(0);
	let disabled = $state(false);
	let name = $state('');
	let selectedValue = $state('one');
	let selectedType: kurosearch.TagType = $state('artist');
	let modifier: kurosearch.TagModifier = $state('+');

	const onclick = () => {
		count++;
	};
</script>

<svelte:head>
	<title>kurosearch - Component Test</title>
	<meta name="description" content="Frontend test layouts." />
</svelte:head>

<PageGeneric title="UI Test">
	<Preference title="Buttons" description="Different buttons">
		<FlexRow>
			<IconButton aria-label="Reset search" class="mixin-accent" {onclick} {disabled}>
				<i class="codicon codicon-close"></i>
			</IconButton>
			<IconButton aria-label="Reset search" class="mixin-secondary" {onclick} {disabled}>
				<i class="codicon codicon-close"></i>
			</IconButton>
			<IconButton aria-label="Reset search" class="mixin-invisible" {onclick} {disabled}>
				<i class="codicon codicon-close"></i>
			</IconButton>
			<IconButton aria-label="Reset search" class="mixin-shade" {onclick} {disabled}>
				<i class="codicon codicon-close"></i>
			</IconButton>
		</FlexRow>
		<FlexRow>
			<TextButton title="A button" class="mixin-accent" {onclick} {disabled}>
				Clicked {count} times
			</TextButton>
			<TextButton title="A button" class="mixin-secondary" {onclick} {disabled}>
				Clicked {count} times
			</TextButton>
			<TextButton title="A button" class="mixin-invisible" {onclick} {disabled}>
				Clicked {count} times
			</TextButton>
			<TextButton title="A button" class="mixin-shade" {onclick} {disabled}>
				Clicked {count} times
			</TextButton>
		</FlexRow>
	</Preference>

	<Preference title="Input" description="Different input modes">
		<FlexRow>
			<Checkbox bind:checked={disabled} id="cb-disabled">Disable Input Controls</Checkbox>
			<Checkbox bind:checked={disabled} id="cb-disabled-2" {disabled}>
				Disable Input Controls
			</Checkbox>
		</FlexRow>
		<FlexRow>
			<Select
				options={{ one: 'One', two: 'Two', three: 'Three' }}
				bind:value={selectedValue}
				{disabled}
			/>

			<TextInput placeholder="Name" bind:value={name} {disabled} class="mixin-outline" />
			<NumberInput bind:value={count} min={0} max={1000} step={1} {disabled} />
			<span>{selectedValue} - {name} - {count}</span>
		</FlexRow>
		<FlexRow>
			<ToggleIcon bind:active={disabled} title="asdf" icon="codicon codicon-info" />
			<RotatingIconSelect options={TAG_TYPES_WITH_ICONS} bind:value={selectedType} />
			<RotatingTextSelect options={tagTypeLetters} bind:value={selectedType} />
			<ModifierSelect bind:modifier />
		</FlexRow>
	</Preference>

	<Preference title="Animation" description="Animations">
		<FlexRow>
			<LoadingAnimation />
		</FlexRow>
	</Preference>

	<Preference title="Links" description="Different Link representations">
		<FlexRow>
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
		</FlexRow>
	</Preference>

	<Preference title="Tags" description="Different Tag representations">
		<FlexRow>
			<ActiveTag tag={{ modifier, name: 'my_tag', type: selectedType, count: 212333 }} active />
			<ActiveTag tag={{ modifier, name: 'my_tag', type: 'ambiguous', count: 212333 }} />
		</FlexRow>
	</Preference>
</PageGeneric>

<img src={lynxChibiSrc} alt="default lynx" />
<img src={lynxChibiHalloweenSrc} alt="halloween lynx" />

<button onclick={downloadIDBTags}> Download IDB Tags </button>
<button onclick={downloadIDBPosts}> Download IDB Posts </button>

<style>
	img {
		max-width: 200px;
		height: auto;
	}
</style>

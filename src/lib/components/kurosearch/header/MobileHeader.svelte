<script lang="ts">
	import LinkKofi from './LinkKofi.svelte';
	import LinkSearch from './LinkSearch.svelte';
	import AccountLink from '../link-account/AccountLink.svelte';
	import DiscordLink from '../link-discord/DiscordLink.svelte';
	import LinkHelp from './LinkHelp.svelte';
	import LinkSettings from './LinkSettings.svelte';
	import LinkSelect from './LinkSelect.svelte';
</script>

<header>
	<nav aria-label="Main navigation">
		<LinkKofi />
		<DiscordLink />
		<LinkHelp />
		<div></div>
		<LinkSearch />
		<LinkSelect />
		<LinkSettings />
		<AccountLink />
	</nav>
</header>

<style>
	header {
		display: flex;
		width: 100%;
		max-width: var(--body-width);
		padding: var(--grid-gap);
		gap: 8px;
	}

	nav {
		display: contents;
	}

	div {
		flex-grow: 1;
	}
</style>

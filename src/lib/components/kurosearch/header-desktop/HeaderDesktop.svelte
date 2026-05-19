<script>
	import { resolve } from '$app/paths';
	import LinkHelp from '../header/LinkHelp.svelte';
	import LinkKofi from '../header/LinkKofi.svelte';
	import LinkSettings from '../header/LinkSettings.svelte';
	import AccountLink from '../link-account/AccountLink.svelte';
	import DiscordLink from '../link-discord/DiscordLink.svelte';
	import SearchbarDesktop from '../searchbar-desktop/SearchbarDesktop.svelte';
</script>

<header>
	<nav aria-label="Main navigation">
		<h1><a href={resolve('/desktop')}>ks</a></h1>
		<div class="spacer"></div>
		<SearchbarDesktop />
		<div class="spacer"></div>
		<LinkKofi />
		<DiscordLink />
		<LinkHelp />
		<LinkSettings />
		<AccountLink />
	</nav>
</header>

<style>
	header {
		grid-area: header;
		display: flex;
		width: 100%;
		padding-inline: var(--small-gap);
		padding-top: var(--small-gap);
		align-items: center;
		gap: 8px;
	}

	h1 {
		font-family: 'Zen Kaku Gothic New', sans-serif;
		font-size: 36px;
		line-height: 36px;
		margin-top: -10px;
		vertical-align: baseline;
		color: var(--accent);
	}

	a {
		color: inherit;
		text-decoration: inherit;
	}

	nav {
		display: contents;
	}

	div.spacer {
		flex-grow: 1;
	}
</style>

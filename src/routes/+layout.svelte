<script lang="ts">
	import { base } from '$app/paths';
	import AccountLink from '$lib/components/kurosearch/link-account/AccountLink.svelte';
	import DiscordLink from '$lib/components/kurosearch/link-discord/DiscordLink.svelte';
	import SettingsLink from '$lib/components/kurosearch/settings-link/SettingsLink.svelte';
	import CodiconLink from '$lib/components/pure/icon-link/CodiconLink.svelte';
	import CodiconTextLink from '$lib/components/pure/icon-link/CodiconTextLink.svelte';
	import theme from '$lib/store/theme-store';
	import wideLayoutEnabled from '$lib/store/wide-layout-enabled-store';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import TermsOfUseDialog from '$lib/components/kurosearch/dialog-terms-of-use/CookieMessage.svelte';

	import './reset.css';
	import './fonts.css';
	import './defaults.css';
	import './theme.css';
	import './codicon.css';
	import './scrollbar.css';

	import '$lib/logic/firebase/firebase';

	const userPhoto: string | undefined = undefined;

	theme.subscribe((value) => {
		if (browser) {
			const [accent, theme] = value.split(' ');
			document.documentElement.dataset.theme = theme;
			document.documentElement.dataset.accent = accent;
		}
	});
</script>

<svelte:head>
	<script lang="ts">
		const [accent, theme] = (localStorage.getItem('kurosearch:theme') ?? 'crimson dark').split(' ');
		document.documentElement.dataset.theme = theme;
		document.documentElement.dataset.accent = accent;
	</script>
</svelte:head>

<TermsOfUseDialog />

<header>
	<nav>
		<CodiconLink
			title="Sponsor"
			href="https://ko-fi.com/kurozenzen"
			icon="codicon codicon-heart"
			newtab
		/>
		<DiscordLink />
		<CodiconLink title="Documentation" href="{base}/help" icon="codicon codicon-book" />
		<div />
		<CodiconLink title="Search" href="{base}/" icon="codicon codicon-search" />
		<SettingsLink />
		<AccountLink src={userPhoto} />
	</nav>
</header>

<main class:extra-wide={$wideLayoutEnabled && $page.url.pathname === '/'}>
	<slot />
</main>

<footer>
	<section>
		<CodiconTextLink
			title="Source Code"
			href="https://github.com/kurozenzen/kurosearch"
			icon="codicon codicon-github"
			label="Github"
			target="_blank"
		/>

		<span class="copyright">© 2023 kurozenzen</span>

		<CodiconTextLink title="About" href="{base}/about" icon="codicon codicon-info" label="About" />
	</section>
	<p>
		I do not own the rights to Helheim Lynx and this site is in no way endorsed by, affiliated with,
		or in any other way connected to them.
	</p>
</footer>

<style>
	:global(body) {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		width: 100%;
		align-items: center;
		overflow-y: scroll;
	}

	nav,
	footer section {
		display: flex;
		gap: 8px;
	}

	main {
		width: 100%;
		flex-grow: 1;
		max-width: var(--body-width);
	}

	main.extra-wide {
		max-width: 90vw;
	}

	header,
	footer {
		padding: var(--grid-gap);
	}

	footer section {
		color: var(--text-muted);
		justify-content: space-between;
	}

	div {
		flex-grow: 1;
	}

	span {
		font-size: var(--text-size-small);
	}

	header,
	footer {
		width: 100%;
		max-width: calc(var(--body-width) + 2 * var(--grid-gap));
	}

	footer {
		display: flex;
		flex-direction: column;
		gap: var(--grid-gap);
	}

	p {
		font-size: var(--text-size-small);
		text-align: center;
		color: var(--text-muted);
	}
</style>

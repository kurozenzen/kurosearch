<script lang="ts">
	import { browser } from '$app/environment';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import TermsOfUseDialog from '$lib/components/kurosearch/dialog-terms-of-use/CookieMessage.svelte';
	import AccountLink from '$lib/components/kurosearch/link-account/AccountLink.svelte';
	import DiscordLink from '$lib/components/kurosearch/link-discord/DiscordLink.svelte';
	import SettingsLink from '$lib/components/kurosearch/settings-link/SettingsLink.svelte';
	import CodiconLink from '$lib/components/pure/icon-link/CodiconLink.svelte';
	import CodiconTextLink from '$lib/components/pure/icon-link/CodiconTextLink.svelte';
	import theme from '$lib/store/theme-store';
	import wideLayoutEnabled from '$lib/store/wide-layout-enabled-store';
	import { SOURCE_CODE_URL, SPONSOR_URL } from '$lib/logic/app-config';

	import './codicon.scss';
	import './defaults.scss';
	import './fonts.scss';
	import './reset.scss';
	import './scrollbar.scss';
	import './theme.scss';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	const userPhoto: string | undefined = undefined;

	const year = new Date().getFullYear();

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
		<CodiconLink title="Sponsor" href={SPONSOR_URL} icon="codicon codicon-heart" newtab />
		<DiscordLink />
		<CodiconLink title="Documentation" href={resolve('/help')} icon="codicon codicon-book" />
		<div></div>
		<CodiconLink title="Search" href={resolve('/')} icon="codicon codicon-search" />
		<CodiconLink title="Saved Posts" href={resolve('/saved')} icon="codicon codicon-notebook" />
		<SettingsLink />
		<AccountLink src={userPhoto} />
	</nav>
</header>

<main class:extra-wide={$wideLayoutEnabled && page.url.pathname === '/'}>
	{@render children?.()}
</main>

<footer>
	<section class="footer">
		<span class="stacked-tags">
			<CodiconTextLink
				title="Source Code"
				href="https://github.com/kurozenzen/kurosearch"
				icon="codicon codicon-github"
				label="Github KuroSearch"
				target="_blank"
			/>
			<CodiconTextLink
				title="Source Code Docker"
				href={SOURCE_CODE_URL}
				icon="codicon codicon-github"
				label="Github KuroSearch Docker"
				target="_blank"
			/>
		</span>

		<span class="copyright">&copy; {year} kurozenzen</span>

		<span class="stacked-tags">
			<CodiconTextLink
				title="About"
				href={resolve('/about')}
				icon="codicon codicon-info"
				label="About"
			/>
			<CodiconTextLink
				title="Instances"
				href={resolve('/instances')}
				icon="codicon codicon-server"
				label="Instances"
			/>
		</span>
	</section>
	<p>
		I do not own the rights to Helheim Lynx and this site is in no way endorsed by, affiliated with,
		or in any other way connected to them.
	</p>
</footer>

<style lang="scss">
	:global(body) {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		width: 100%;
		align-items: center;
		overflow-y: scroll;
	}

	.stacked-tags {
		display: flex;
		flex-direction: column;
		gap: 0.1rem;
	}

	.footer {
		display: flex;
		align-items: flex-start;
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

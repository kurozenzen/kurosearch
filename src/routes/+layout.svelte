<script lang="ts">
	import { base } from '$app/paths';
	import AccountLink from '$lib/components/kurosearch/account-link/AccountLink.svelte';
	import DiscordLink from '$lib/components/kurosearch/discord-link/DiscordLink.svelte';
	import SettingsLink from '$lib/components/kurosearch/settings-link/SettingsLink.svelte';
	import CodiconLink from '$lib/components/pure/icon-link/CodiconLink.svelte';
	import CodiconTextLink from '$lib/components/pure/icon-link/CodiconTextLink.svelte';
	import theme from '$lib/store/theme-store';

	const userPhoto: string | undefined = undefined;
</script>

<div class={$theme}>
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
			<i />
			<CodiconLink title="Search" href="{base}/search" icon="codicon codicon-search" />
			<SettingsLink />
			<AccountLink src={userPhoto} />
		</nav>
	</header>

	<main>
		<slot />
	</main>

	<footer>
		<CodiconTextLink
			title="Source Code"
			href="https://github.com/kurozenzen/kurosearch"
			icon="codicon codicon-github"
			label="Github"
		/>

		<span class="copyright">© 2023 kurozenzen</span>

		<CodiconTextLink
			title="Application Status"
			href="https://stats.uptimerobot.com/EZVwES34jJ"
			icon="codicon codicon-zap"
			label="Status"
		/>
	</footer>
</div>

<style>
	nav,
	footer {
		display: flex;
	}

	main {
		flex-grow: 1;
	}

	header,
	footer {
		padding: 1rem;
	}

	footer {
		color: var(--text-muted);
		justify-content: space-between;
	}

	i {
		flex-grow: 1;
	}

	span {
		font-size: var(--text-size-small);
	}

	div {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		max-width: 800px;
		margin: auto;
	}

	@layer reset {
		:global(html) {
			padding: unset;
		}
		:global(body) {
			margin: unset;
		}

		:global(ol),
		:global(ul) {
			list-style-type: unset;
			margin-block: unset;
			padding-left: unset;
		}

		:global(p),
		:global(h1),
		:global(h2),
		:global(h3) {
			margin-block: unset;
		}

		:global(a) {
			text-decoration: unset;
		}

		:global(button) {
			border: unset;
			padding: unset;
		}

		:global(dialog) {
			border: unset;
		}

		:global(input) {
			border: unset;
			color: unset;
		}

		:global(select) {
			background: unset;
			border: unset;
		}
	}

	:global(html:has(.crimson)) {
		/* --accent-color: crimson; */
		--h: 348;
		--s: 83%;
		--l: 47%;
		--text-accent: #fff;
	}

	:global(html:has(.hotpink)) {
		--accent-color: hotpink;
		--h: 330;
		--s: 100%;
		--l: 71%;
		--text-accent: #fff;
	}

	:root {
		/* Dimensions */
		--line-height-small: 24px;
		--line-height: 32px;
		--box-height: 36px;
		--line-height-large: 44px;
		--grid-gap: 1rem;
		--small-gap: 0.5rem;
		--icon-size: 32px;

		/* Rounding */
		--border-radius: 5px;
		--border-radius-full: 100px;

		/* Scrollbar */
		--scrollbar-size: 6px;

		/* Text */
		--text-size-small: 12px;
		--text-size: 14px;
		--text-size-large: 16px;
		--text-size-h1: 3.75rem;
		--text-size-h3: 1.5rem;

		/* Transitions */
		--default-transition-behaviour: 0.2s ease-out;

		/* Links */
		--text-link: #58a6ff;

		/* Shadows */
		--default-shadow: 0px 3px 10px 3px rgba(0, 0, 0, 0.75);

		/* z-index */
		--z-searchbar: 2;
		--z-media: 1;
		--z-scroll-up: 300;
		--z-dialog: 999;

		/* Accent */
		--accent: hsl(var(--h), var(--s), var(--l));
		--accent-light: hsl(var(--h), var(--s), calc(var(--l) * 1.25));

		accent-color: var(--accent);
		font-family: 'Roboto', sans-serif;
	}

	:global(html) {
		color: var(--text);
		background-color: var(--background-0);
		font-size: var(--text-size);
		transition: background var(--default-transition-behaviour);
	}

	:global(html:has(.dark)) {
		--background-0: #000000;
		--background-1: #151520;
		--background-2: #303040;
		--background-3: #454560;
		--text: #aaa;
		--text-highlight: #fff;
		--text-muted: #555;
		color-scheme: dark;

		/* Tag Types*/
		--artist-background: #a223;
		--artist-background-hover: #a228;
		--character-background: #2a23;
		--character-background-hover: #2a28;
		--copyright-background: #b4b3;
		--copyright-background-hover: #b4b8;
		--metadata-background: #f823;
		--metadata-background-hover: #f828;
	}

	:global(html:has(.light)) {
		--background-0: #fff;
		--background-1: #ddd;
		--background-2: #bbb;
		--background-3: #999;
		--text: #444;
		--text-highlight: #000;
		--text-muted: #888;
		color-scheme: light;

		/* Tag Types*/
		--artist-background: #a228;
		--artist-background-hover: #a22a;
		--character-background: #2a28;
		--character-background-hover: #2a2a;
		--copyright-background: #b4b8;
		--copyright-background-hover: #b4ba;
		--metadata-background: #f828;
		--metadata-background-hover: #f82a;
	}

	:global(html:has(.coffee)) {
		--background-0: #191515;
		--background-1: #3f3535;
		--background-2: #655555;
		--background-3: #8b7575;
		--text: #aaa;
		--text-highlight: #fff;
		--text-muted: #555;
		color-scheme: dark;

		/* Tag Types*/
		--artist-background: #a223;
		--artist-background-hover: #a228;
		--character-background: #2a23;
		--character-background-hover: #2a28;
		--copyright-background: #b4b3;
		--copyright-background-hover: #b4b8;
		--metadata-background: #f823;
		--metadata-background-hover: #f828;
	}

	:global(i) {
		font-style: normal;
	}

	:global(.codicon) {
		height: 1rem;
	}

	:global(.codicon:before) {
		font-family: codicon, serif;
		font-style: unset;
	}

	:global(.codicon-plus:before) {
		content: '\ea60';
	}

	:global(.codicon-tag:before) {
		content: '\ea66';
	}

	:global(.codicon-person:before) {
		content: '\ea67';
	}

	:global(.codicon-search:before) {
		content: '\ea6d';
	}
	:global(.codicon-eye:before) {
		content: '\ea70';
	}

	:global(.codicon-edit:before) {
		content: '\ea73';
	}

	:global(.codicon-info:before) {
		content: '\ea74';
	}

	:global(.codicon-error:before) {
		content: '\ea87';
	}

	:global(.codicon-folder:before) {
		content: '\ea83';
	}

	:global(.codicon-github:before) {
		content: '\ea84';
	}

	:global(.codicon-zap:before) {
		content: '\ea86';
	}

	:global(.codicon-arrow-down:before) {
		content: '\ea9a';
	}

	:global(.codicon-arrow-up:before) {
		content: '\eaa1';
	}

	:global(.codicon-book:before) {
		content: '\eaa4';
	}

	:global(.codicon-close:before) {
		content: '\eab8';
	}

	:global(.codicon-circle-slash:before) {
		content: '\eabd';
	}

	:global(.codicon-calendar:before) {
		content: '\eab0';
	}

	:global(.codicon-code:before) {
		content: '\eac4';
	}

	:global(.codicon-comment-discussion:before) {
		content: '\eac7';
	}

	:global(.codicon-debug-disconnect:before) {
		content: '\ead0';
	}

	:global(.codicon-filter:before) {
		content: '\eaf1';
	}

	:global(.codicon-heart:before) {
		content: '\eb05';
	}

	:global(.codicon-link-external:before) {
		content: '\eb14';
	}

	:global(.codicon-link:before) {
		content: '\eb15';
	}

	:global(.codicon-list-ordered:before) {
		content: '\eb16';
	}

	:global(.codicon-question:before) {
		content: '\eb32';
	}

	:global(.codicon-settings-gear:before) {
		content: '\eb51';
	}

	:global(.codicon-star-full:before) {
		content: '\eb59';
	}

	:global(.codicon-unverified:before) {
		content: '\eb76';
	}

	:global(.codicon-whole-word:before) {
		content: '\eb7e';
	}

	:global(.codicon-record:before) {
		content: '\eba7';
	}

	:global(.codicon-account:before) {
		content: '\eb99';
	}

	:global(.codicon-arrow-swap:before) {
		content: '\ebcb';
	}
</style>

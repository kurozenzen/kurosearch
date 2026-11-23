<script lang="ts">
	// CSS
	import '$lib/components/kurosearch/layout-common/reset.css';
	import '$lib/components/kurosearch/layout-common/defaults.css';
	import '$lib/components/kurosearch/layout-common/fonts.css';
	import '$lib/components/kurosearch/layout-common/codicon.css';
	import '$lib/components/kurosearch/layout-common/scrollbar.css';
	import '$lib/components/kurosearch/layout-common/theme.css';

	// Side Effects
	import '$lib/logic/firebase/firebase';

	// Imports
	import { browser } from '$app/environment';
	import type { Snippet } from 'svelte';
	import { theme as themeState } from '$lib/store';
	import CookieDialog from '../dialog-cookie/CookieDialog.svelte';
	import ScrollUpButton from '$lib/components/pure/button-scroll-up/ScrollUpButton.svelte';

	interface Props {
		children: Snippet;
	}

	const { children }: Props = $props();

	$effect(() => {
		if (browser) {
			const [accent, theme] = themeState.value.split(' ');
			document.documentElement.dataset.theme = theme;
			document.documentElement.dataset.accent = accent;
		}
	});
</script>

<svelte:head>
	<script>
		(() => {
			const [accent, theme] = (localStorage['kurosearch:theme'] ?? 'crimson dark').split(' ');
			document.documentElement.dataset.theme = theme;
			document.documentElement.dataset.accent = accent;
		})();
	</script>
</svelte:head>

{@render children()}
<CookieDialog />
<ScrollUpButton />

<style>
	:global(body) {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		width: 100%;
		align-items: center;
		overflow-y: scroll;
	}
</style>

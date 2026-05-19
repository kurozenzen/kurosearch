<script lang="ts">
	// CSS
	import '$lib/components/kurosearch/layout-common/codicon.css';
	import '$lib/components/kurosearch/layout-common/defaults.css';
	import '$lib/components/kurosearch/layout-common/fonts.css';
	import '$lib/components/kurosearch/layout-common/reset.css';
	import '$lib/components/kurosearch/layout-common/scrollbar.css';
	import '$lib/components/kurosearch/layout-common/theme.css';

	// Side Effects
	import '$lib/logic/firebase/firebase';

	// Imports
	import { browser } from '$app/environment';
	import theme from '$lib/store/theme-store';
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	const { children }: Props = $props();

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
		(() => {
			const [accent, theme] = (localStorage.getItem('kurosearch:theme') ?? 'crimson dark').split(
				' '
			);
			document.documentElement.dataset.theme = theme;
			document.documentElement.dataset.accent = accent;
		})();
	</script>
</svelte:head>

{@render children()}

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

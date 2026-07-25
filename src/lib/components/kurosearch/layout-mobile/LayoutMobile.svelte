<script lang="ts">
	import { page } from '$app/state';
	import TermsOfUseDialog from '$lib/components/kurosearch/dialog-terms-of-use/CookieMessage.svelte';
	import FooterMobile from '$lib/components/kurosearch/footer/FooterMobile.svelte';
	import MobileHeader from '$lib/components/kurosearch/header/MobileHeader.svelte';
	import wideLayoutEnabled from '$lib/store/wide-layout-enabled-store';
	import type { Snippet } from 'svelte';
	import LayoutCommon from '../layout-common/LayoutCommon.svelte';

	interface Props {
		children: Snippet;
	}
	const { children }: Props = $props();
</script>

<LayoutCommon>
	<TermsOfUseDialog />

	<!-- <News /> -->

	<MobileHeader />

	<main class:extra-wide={$wideLayoutEnabled && page.url.pathname === '/'}>
		{@render children()}
	</main>

	<FooterMobile />
</LayoutCommon>

<style>
	main {
		width: 100%;
		flex-grow: 1;
		max-width: var(--body-width);
	}

	main.extra-wide {
		max-width: 90vw;
	}
</style>

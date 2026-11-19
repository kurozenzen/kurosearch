<script>
	import { browser } from '$app/environment';
	import FeatureSupportInfo from '$lib/components/kurosearch/feature-support-info/FeatureSupportInfo.svelte';
	import PageGeneric from '$lib/components/pure/page-generic/PageGeneric.svelte';
	import TextButton from '$lib/components/pure/button-text/TextButton.svelte';
	import { apiUrl, cycleApiUrl } from '$lib/logic/api-client/url';
	import {
		supportsAspectRatio,
		supportsFullscreen,
		supportsGap,
		supportsLocalStorage,
		supportsObjectFit,
		supportsSessionStorage
	} from '$lib/logic/feature-support';
	import H3 from '$lib/components/pure/heading/H3.svelte';

	let currentApi = $state(apiUrl());

	const nextApi = () => {
		cycleApiUrl();
		currentApi = apiUrl();
	};
</script>

<svelte:head>
	<title>kurosearch - Debug</title>
	<meta name="description" content="Debugging tools for kurosearch." />
</svelte:head>

<PageGeneric title="Debug">
	<section>
		<H3 title="Supported Features" />
		<FeatureSupportInfo
			supported={browser && 'pushState' in window.history}
			title="URL Sharing"
			description="Share the current search by copying the url from the address bar."
		/>
		<FeatureSupportInfo
			supported={supportsLocalStorage && supportsSessionStorage}
			title="Data Saving"
			description="Supports saving data between session. This will not work in incognito mode."
		/>
		<FeatureSupportInfo
			supported={supportsFullscreen}
			title="Fullscreen"
			description="Supports borderless fullscreen display for images and videos."
		/>
		<H3 title="Supported Design Features" />
		<FeatureSupportInfo
			supported={supportsGap}
			title="CSS - Gap"
			description="Technical Detail. Useful for debugging layout issues."
		/>
		<FeatureSupportInfo
			supported={supportsAspectRatio}
			title="CSS - Aspect Ration"
			description="Technical Detail. Useful for debugging layout issues."
		/>
		<FeatureSupportInfo
			supported={supportsObjectFit}
			title="CSS - Object Fit"
			description="Technical Detail. Useful for debugging layout issues."
		/>
	</section>
	<section>
		<H3 title="API Server" />
		<p>
			Cycle through API servers.<br />
			Currently using API {currentApi}.
		</p>
		<TextButton onclick={nextApi} class="mixin-accent" title="Next API server">Next</TextButton>
	</section>
</PageGeneric>

<style>
	section {
		display: flex;
		flex-direction: column;
		gap: var(--grid-gap);
		align-items: flex-start;
	}
</style>

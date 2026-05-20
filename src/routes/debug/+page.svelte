<script>
	import { browser } from '$app/environment';
	import FeatureSupportInfo from '$lib/components/kurosearch/feature-support-info/FeatureSupportInfo.svelte';
	import Heading1 from '$lib/components/pure/heading/Heading1.svelte';
	import Heading3 from '$lib/components/pure/heading/Heading3.svelte';
	import PageGeneric from '$lib/components/pure/page-generic/PageGeneric.svelte';
	import TextButton from '$lib/components/pure/text-button/TextButton.svelte';
	import { apiUrl, cycleApiUrl } from '$lib/logic/api-client/url';
	import {
		supportsAspectRatio,
		supportsFullscreen,
		supportsGap,
		supportsLocalStorage,
		supportsObjectFit,
		supportsSessionStorage
	} from '$lib/logic/feature-support';

	let currentApi = $state(apiUrl());

	const nextApi = () => {
		cycleApiUrl();
		currentApi = apiUrl();
	};
</script>

<svelte:head>
	<title>kurosearch - Debugger</title>
	<meta name="description" content="Debugging tools for kurosearch." />
</svelte:head>

<PageGeneric title="Debug">
	<section>
		<Heading3>Supported Features</Heading3>
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
		<Heading3>Supported Design Features</Heading3>
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
		<Heading3>API Server</Heading3>
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

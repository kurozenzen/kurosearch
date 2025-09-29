<script lang="ts">
	import { version } from '$app/environment';
	import { resolve } from '$app/paths';
	import Heading1 from '$lib/components/pure/heading/Heading1.svelte';
	import Heading3 from '$lib/components/pure/heading/Heading3.svelte';
	import IconLink from '$lib/components/pure/icon-link/IconLink.svelte';
	import TextButton from '$lib/components/pure/button/TextButton.svelte';
	import { onMount } from 'svelte';
	import { APP_NAME } from '$lib/logic/app-config';
	import { LATEST_RELEASE_URL } from '$lib/logic/api-client/url';
	import { LATEST_KUROSEARCH_VERSION } from '$lib/logic/version-utils';

	let message = $state('Sync with server');

	let latestCommitPromise: Promise<string> | string = $state('checking...');

	let isLatest: boolean = $state(false);

	let data: { containerVersion: string } = $props();

	const forceUpdate = async () => {
		message = 'Updating...';
		if ('serviceWorker' in navigator) {
			const registrations = await navigator.serviceWorker.getRegistrations();
			await Promise.all(registrations.map((r) => r.update()));
		}
		window.location.reload();
		message = 'Done';
	};
	onMount(() => {
		latestCommitPromise = LATEST_KUROSEARCH_VERSION();
	});
</script>

<svelte:head>
	<title>{APP_NAME} - About</title>
	<meta name="description" content="Further information about the website can be found here." />
	<link rel="preload" href={LATEST_RELEASE_URL} as="fetch" crossorigin="anonymous" />
</svelte:head>

<article>
	<Heading1>About</Heading1>
	<Heading3>Version</Heading3>
	<section class="info">
		<div>
			<img src="/favicon.svg" alt="kuroseach logo" />
			<h2>kurosearch</h2>
		</div>
		<div class="details">
			<div class="detailed">
				<p>Version:</p>
				<p>{version}</p>
			</div>
			<div class="detailed">
				<p>Server version:</p>
				<p>{data.containerVersion ?? 'Unavailable'}</p>
			</div>
			<div class="detailed">
				{#await latestCommitPromise}
					<p>Newest:</p>
					<p>checking...</p>
				{:then latestVersion}
					<p>Newest:</p>
					<p>{latestVersion}</p>
				{/await}
			</div>
		</div>
	</section>
	{#if !isLatest}
		<section class="update">
			<TextButton title="Force an update of the app" onclick={forceUpdate}>{message}</TextButton>
		</section>
	{/if}
	<Heading3>More Info</Heading3>
	<section class="more">
		<IconLink title="Debug Information" className="codicon codicon-link" href={resolve('/debug')}>
			<p>Debug Information</p>
		</IconLink>
		<IconLink
			title="Rule34.xxx URL Comparison"
			className="codicon codicon-link"
			href={resolve('/query')}
		>
			<p>Rule34.xxx URL Comparison</p>
		</IconLink>
	</section>
</article>

<style lang="scss">
	// Reusable SCSS helpers
	$gap: var(--grid-gap);

	%card {
		padding: $gap;
		background-color: var(--background-1);
		border-radius: var(--border-radius);
		width: 100%;
	}

	@mixin center-contents {
		display: flex;
		justify-content: center;
	}

	@mixin two-col-pair {
		display: grid;
		grid-template-columns: 1fr 1fr;
		border-bottom: 1px dotted white;

		> :last-child {
			text-align: right;
		}
	}

	article {
		padding-inline: $gap;
	}

	.info {
		@extend %card;

		display: grid;
		grid-template-columns: 1fr 3fr;
		grid-template-rows: auto auto;
		justify-content: center;

		img {
			width: 60px;
			height: 60px;
			grid-row: span 2;
		}

		h2 {
			color: var(--text-highlight);
			align-self: flex-end;
		}

		.details {
			.detailed {
				@include two-col-pair;
			}
		}
	}

	.update {
		@include center-contents;
		padding-block: $gap;
	}

	.more {
		display: flex;
		flex-direction: column;
	}

	p {
		white-space: nowrap;
	}
</style>

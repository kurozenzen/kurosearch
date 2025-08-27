<script lang="ts">
	import { version } from '$app/environment';
	import { resolve } from '$app/paths';
	import Heading1 from '$lib/components/pure/heading/Heading1.svelte';
	import Heading3 from '$lib/components/pure/heading/Heading3.svelte';
	import IconLink from '$lib/components/pure/icon-link/IconLink.svelte';
	import TextButton from '$lib/components/pure/text-button/TextButton.svelte';

	let message = $state('Update');

	const getLatestCommit = async () => {
		const response = await fetch('https://api.github.com/repos/kurozenzen/kurosearch/commits/main');
		if (response.ok) {
			return response.json();
		}
		return '???????';
	};

	const forceUpdate = async () => {
		message = 'Updating...';
		if ('serviceWorker' in navigator) {
			const registrations = await navigator.serviceWorker.getRegistrations();
			await Promise.all(registrations.map((r) => r.update()));
		}
		window.location.reload();
		message = 'Done';
	};
</script>

<svelte:head>
	<title>kurosearch - About</title>
	<meta name="description" content="Further information about the website can be found here." />
</svelte:head>

<div>
	<Heading1>About</Heading1>
	<Heading3>Version</Heading3>
	<section class="info">
		<img src="/favicon.svg" alt="kuroseach logo" />
		<h2>kurosearch</h2>
		<span>
			Version: {version}{#await getLatestCommit() then commit}
				, Newest is: {commit?.sha?.substring(0, 7)}
			{/await}
		</span>
	</section>
	<section class="update">
		<TextButton title="Force an update of the app" onclick={forceUpdate}>{message}</TextButton>
	</section>
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
</div>

<style>
	div {
		padding-inline: var(--grid-gap);
	}

	.info {
		display: grid;
		grid-template-columns: auto auto;
		grid-template-rows: auto auto;
		justify-content: center;
		padding: var(--grid-gap);
		background-color: var(--background-1);
		border-radius: var(--border-radius);
	}

	.update {
		display: flex;
		justify-content: center;
		padding-block: var(--grid-gap);
	}

	.more {
		display: flex;
		flex-direction: column;
	}
	h2 {
		color: var(--text-highlight);
		align-self: flex-end;
	}

	img {
		width: 60px;
		height: 60px;
		grid-row: span 2;
	}

	p {
		white-space: nowrap;
	}
</style>

<script lang="ts" module>
	import { version } from '$app/environment';
	import TextButton from '#lib/components/pure/button-text/TextButton.svelte';

	const getLatestCommit = async () => {
		const response = await fetch('https://api.github.com/repos/kurozenzen/kurosearch/commits/main');
		if (response.ok) {
			return response.json();
		}
		return '???????';
	};

	const removeServiceWorkers = async () => {
		if ('serviceWorker' in navigator) {
			const registrations = await navigator.serviceWorker.getRegistrations();
			return Promise.all(registrations.map((r) => r.unregister()));
		}
	};
</script>

<script lang="ts">
	let message = $state('Update');

	const forceUpdate = async () => {
		message = 'Updating...';
		await removeServiceWorkers();
		window.location.reload();
		message = 'Done';
	};
</script>

<div class="info">
	<img src="/favicon.svg" alt="kuroseach logo" />
	<h2>kurosearch</h2>
	<span>
		Version: {version}
		{#await getLatestCommit() then commit}
			, Newest is: {commit?.sha?.substring(0, 7)}
		{:catch}
			, Newest is unknown
		{/await}
	</span>
</div>
<TextButton title="Force an update of the app" onclick={forceUpdate} class="mixin-accent">
	{message}
</TextButton>

<style>
	.info {
		display: grid;
		grid-template-columns: auto auto;
		grid-template-rows: auto auto;
		justify-content: center;
		padding: var(--grid-gap);
		background-color: var(--background-1);
		border-radius: var(--border-radius);
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
</style>

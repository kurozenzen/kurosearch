<script lang="ts">
	export let error: Error;

	let title = error.message === 'Failed to fetch' ? 'Connection Error' : 'Application Error';
	let icon =
		error.message === 'Failed to fetch'
			? 'codicon codicon-debug-disconnect'
			: 'codicon codicon-error';
	let message =
		error.message === 'Failed to fetch'
			? 'Failed to connect to the server. Make sure you have a stable internet connection.'
			: error.message;
</script>

<div class="error">
	<div class="icon">
		<i class={icon} />
	</div>
	<div>
		<h3>{title}</h3>
		<span>{message}</span>
	</div>
</div>

<style>
	.error {
		display: flex;
		align-items: center;
		max-width: 400px;
		margin: auto;
		margin-block: 4rem;
		gap: 2rem;
		padding: var(--grid-gap);
		border-radius: var(--border-radius);
		background-color: var(--background-1);
	}

	.icon {
		display: grid;
		place-items: center;
		width: 64px;
		height: 64px;
		flex-shrink: 0;
		border: 2px solid var(--background-2);
		border-radius: var(--border-radius);
	}

	i {
		font-size: 32px;
		color: var(--accent);
	}

	h3 {
		padding-block-end: var(--small-gap);
	}
</style>

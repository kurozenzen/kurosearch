<script lang="ts">
	import { resolve } from '$app/paths';

	interface NiceError {
		title: string;
		message: string;
		icon: string;
	}

	interface Props {
		error: Error;
	}

	const resolveError = (error: Error): NiceError => {
		if (error.message === 'Failed to fetch') {
			return {
				title: 'Connection Error',
				message: 'Failed to connect to the server',
				icon: 'codicon codicon-debug-disconnect'
			};
		} else if (error.message.includes('JSON')) {
			return {
				title: 'Data Error',
				message: 'Received malformed data from the server',
				icon: 'codicon codicon-error'
			};
		} else {
			return {
				title: 'Application Error',
				message: error.message,
				icon: 'codicon codicon-error'
			};
		}
	};

	let { error }: Props = $props();

	let { title, icon, message } = $derived(resolveError(error));
</script>

<div class="error">
	<div class="icon">
		<i class={icon}></i>
	</div>
	<div>
		<h3>{title}</h3>
		<p>{message}</p>
		<p>
			Use the <a href={resolve('/troubleshoot')}>Troubleshooting Page</a> to get more details
		</p>
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
	div p {
		margin-top: 4px;
	}

	i {
		font-size: 32px;
		color: var(--accent);
	}

	h3 {
		padding-block-end: var(--small-gap);
	}
</style>

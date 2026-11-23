<script lang="ts" module>
	import { resolve } from '$app/paths';
	import TextButton from '#lib/components/pure/button-text/TextButton.svelte';
	import { ApiError } from '#lib/logic/api-client/tags/ApiError';
	import { apiUrl, cycleApiUrl } from '#lib/logic/api-client/url';

	interface NiceError {
		title: string;
		message: string;
		icon: string;
	}

	interface Props {
		error: Error;
	}

	const resolveError = (error: Error): NiceError => {
		if (error instanceof ApiError) {
			if (error.name === 'fetch-error') {
				return {
					title: 'Connection Error',
					message: 'Failed to connect to the server',
					icon: 'codicon codicon-debug-disconnect'
				};
			}
			if (error.name === 'parse-error') {
				return {
					title: 'Data Error',
					message: 'Received malformed data from the server',
					icon: 'codicon codicon-error'
				};
			}
		}
		return {
			title: 'Application Error',
			message: error.message,
			icon: 'codicon codicon-error'
		};
	};
</script>

<script lang="ts">
	let { error }: Props = $props();
	
	let { title, icon, message } = $derived(resolveError(error));
</script>

{#if title === 'Connection Error'}
	<div class="error">
		<div class="icon">
			<i class={icon}></i>
		</div>
		<div>
			<h3>{title}</h3>
			<p>{message}</p>
			<p>Currently connected to: {apiUrl()}</p>
			<TextButton
				id="btn-next-api"
				title="Switch to next server"
				class="mixin-accent"
				onclick={cycleApiUrl}
			>
				Switch Server
			</TextButton>

			<p>
				Use the <a href={resolve('/troubleshoot')}>Troubleshooting Page</a> to get more details
			</p>
		</div>
	</div>
{:else}
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
{/if}

<style>
	.error {
		display: flex;
		align-items: center;
		max-width: 400px;
		margin: auto;
		margin-block: var(--huge-gap);
		gap: 2rem;
		padding: var(--grid-gap);
		border-radius: var(--border-radius-small);
		background-color: var(--background-1);
	}

	.icon {
		display: grid;
		place-items: center;
		width: 64px;
		height: 64px;
		flex-shrink: 0;
		border: 2px solid var(--background-2);
		border-radius: var(--border-radius-small);
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

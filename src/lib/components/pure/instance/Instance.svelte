<script lang="ts">
	import CodiconTextLink from '$lib/components/pure/icon-link/CodiconTextLink.svelte';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	type InstanceConfiguration = flur34.InstanceConfiguration;

	const { name, url, country, description, status, source_url, details }: InstanceConfiguration =
		$props();
	let expanded = $state(false);

	const toggleDetails = () => {
		expanded = !expanded;
	};

	const epochToDate = (epoch: number): Date => {
		const ms = epoch < 1_000_000_000_000 ? epoch * 1000 : epoch;
		return new Date(ms);
	};

	const formatUnixDateTime = (
		epoch?: number,
		opts: Intl.DateTimeFormatOptions = {
			year: 'numeric',
			month: 'short',
			day: '2-digit',
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit'
		}
	): string => {
		if (!epoch) return 'N/A';
		const date = epochToDate(epoch);
		if (Number.isNaN(date.getTime())) return 'N/A';
		return new Intl.DateTimeFormat('en-GB', opts).format(date);
	};

	const onKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
			event.preventDefault(); // prevent scroll on Space
			toggleDetails();
		}
	};
</script>

<tbody class="instance-group">
	<tr
		class="overview"
		role="button"
		tabindex="0"
		onclick={toggleDetails}
		onkeyup={onKeyDown}
		aria-expanded={expanded}
	>
		<td>
			<CodiconTextLink
				title="{name} url"
				href={url}
				icon="codicon codicon-link-external"
				label={name}
				target="_blank"
			/>
		</td>
		<td>{country}</td>
		<td>{description}</td>
		<td>{status}</td>
		<td>
			<CodiconTextLink
				title="source"
				icon="codicon codicon-source-control"
				href={source_url}
				label="source"
				target="_blank"
			/>
		</td>
	</tr>
	{#if expanded}
		<tr class="details" aria-hidden={!expanded}>
			<td colspan="5">
				<div
					class="details-animator"
					in:slide={{ duration: 200, easing: quintOut }}
					out:slide={{ duration: 200, easing: quintOut }}
				>
					<section class="details-content">
						<div>
							<p>Last check:</p>
							<p>{formatUnixDateTime(details.last_check)}</p>
						</div>
						<div>
							<p>Uptime:</p>
							<p>{details.uptime}%</p>
						</div>
						<div>
							<p>Version:</p>
							<p>{details.version}</p>
						</div>
					</section>
				</div>
			</td>
		</tr>
	{/if}
</tbody>

<style lang="scss">
	.instance-group {
		--row-bg: transparent;
		--row-mix: 70%;

		transition:
			background-color 200ms ease-in-out,
			color 250ms ease-in-out;
		background-color: color-mix(in srgb, var(--row-bg) var(--row-mix), transparent);

		&:nth-child(even) {
			--row-bg: var(--background-2);
		}

		&:nth-child(odd) {
			--row-bg: var(--background-1);
		}

		&:hover {
			--row-mix: 80%;
			color: var(--text-highlight);
		}

		td:first-child,
		td:last-child {
			padding-block: 0.5rem;
			padding-inline: 1rem;
		}
	}

	.details-content {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 1rem;

		div {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
		}
	}

	.details-animator {
		display: block;
		overflow: clip;
		transform-origin: top;
	}
</style>

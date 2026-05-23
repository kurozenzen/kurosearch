<script lang="ts">
	import { StoreKey } from '$lib/store/store-keys';

	interface Props {
		jsonText: string;
		fileName?: string;
		onclose?: () => void;
	}

	let { jsonText, fileName = 'kurosearch.config.json', onclose }: Props = $props();

	const parsedData = $derived.by(() => {
		try {
			return JSON.parse(jsonText) as Record<string, unknown>;
		} catch {
			return undefined;
		}
	});

	const supertagCount = $derived.by(() => {
		const data = parsedData;
		if (!data) {
			return 0;
		}

		const supertags = data[StoreKey.Supertags] ?? data.supertags;
		if (Array.isArray(supertags)) {
			return supertags.length;
		}

		if (
			typeof supertags === 'object' &&
			supertags !== null &&
			Array.isArray((supertags as { items?: unknown[] }).items)
		) {
			return (supertags as { items: unknown[] }).items.length;
		}

		return 0;
	});

	const favouriteCount = $derived.by(() => {
		const data = parsedData;
		if (!data) {
			return 0;
		}

		const favourites = data[StoreKey.Favourites] ?? data.favourites;
		return Array.isArray(favourites) ? favourites.length : 0;
	});

	const downloadJson = () => {
		const blob = new Blob([jsonText], { type: 'application/json' });
		const href = URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.href = href;
		link.download = fileName;
		link.click();
		URL.revokeObjectURL(href);
	};
</script>

<section class="viewer" aria-label="Settings JSON viewer">
	<header class="viewer-header">
		<div class="meta">
			<strong class="file-name">{fileName}</strong>
			<div class="counts" aria-label="Counts">
				<span>Supertags: {supertagCount}</span>
				<span>Favourites: {favouriteCount}</span>
			</div>
		</div>
		<div class="actions">
			<button
				type="button"
				class="codicon codicon-download"
				title="Download JSON file"
				aria-label="Download JSON file"
				onclick={downloadJson}
			></button>
			<button
				type="button"
				class="codicon codicon-close"
				title="Close viewer"
				aria-label="Close viewer"
				onclick={() => onclose?.()}
			></button>
		</div>
	</header>

	<div class="viewer-content">
		<pre><code>{jsonText}</code></pre>
	</div>
</section>

<style>
	.viewer {
		height: 50vh;
		min-height: 240px;
		resize: vertical;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		margin-block-start: var(--grid-gap);
		border-radius: var(--small-gap);
		background: var(--background-1);
	}

	.viewer-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: var(--grid-gap);
		padding: var(--small-gap) var(--grid-gap);
		border-bottom: 1px solid var(--background-2);
		flex-wrap: wrap;
	}

	.meta {
		display: flex;
		flex-direction: column;
		gap: var(--tiny-gap);
		align-items: flex-start;
		flex-wrap: wrap;
	}

	.counts {
		display: flex;
		gap: var(--grid-gap);
		align-items: center;
		font-size: var(--text-size-small);
	}

	.file-name {
		font-weight: 700;
	}

	.actions {
		display: flex;
		gap: var(--small-gap);
	}

	.actions button {
		height: var(--line-height);
		width: var(--line-height);
		padding: 0;
		border-radius: var(--border-radius);
		background: var(--background-2);
		color: var(--text);
		display: grid;
		place-items: center;
		font-size: 1rem;
	}

	.viewer-content {
		flex: 1;
		overflow: auto;
		padding: var(--grid-gap);
	}

	pre {
		margin: 0;
	}

	code {
		font-family: monospace;
		white-space: pre;
	}
</style>

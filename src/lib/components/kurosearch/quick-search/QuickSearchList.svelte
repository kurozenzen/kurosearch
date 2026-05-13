<script lang="ts">
	import IconButton from '$lib/components/pure/button-icon/IconButton.svelte';

	let { name, children } = $props();

	let open = $state(false);
</script>

<div class="group" class:open>
	<div class="header">
		<h2>{name}</h2>
		<IconButton onclick={() => (open = !open)} class="details-button">
			<i class="codicon codicon-chevron-right"></i>
		</IconButton>
	</div>

	<div class="tags">
		{@render children()}
	</div>
</div>

<style>
	h2 {
		font-size: 1.5rem;
	}

	.group {
		display: flex;
		flex-direction: column;
		gap: var(--small-gap);
		max-width: 100%;
	}

	.header {
		display: flex;
		align-items: center;
		gap: var(--grid-gap);
		height: var(--line-height);
		padding-inline: var(--grid-gap);
	}

	.tags {
		display: flex;
		flex-wrap: no-wrap;
		gap: var(--grid-gap);
		overflow-x: auto;
		padding-bottom: var(--small-gap);
		padding-inline: var(--grid-gap);
	}

	.open .tags {
		flex-wrap: wrap;
		overflow-x: unset;
	}

	i {
		transition: all var(--default-transition-behaviour);
	}

	.open i {
		transform: rotate(90deg);
	}
</style>

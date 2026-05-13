<script lang="ts">
	let { name, children } = $props();
</script>

<div>
	<h2>{name}</h2>
	{@render children()}
</div>

<style>
	h2 {
		font-size: 1.5rem;
	}

	div {
		display: flex;
		flex-direction: column;
		gap: var(--small-gap);
		max-width: 100%;
	}
</style>

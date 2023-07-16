<script>
	import { version } from '$app/environment';
	import { base } from '$app/paths';
	import Heading1 from '$lib/components/pure/heading/Heading1.svelte';
</script>

<svelte:head>
	<title>kurosearch - About</title>
</svelte:head>

<div>
	<Heading1>About</Heading1>
	<section>
		<img src="{base}/favicon.svg" alt="kuroseach logo" />
		<h2>kurosearch</h2>
		<span>version: {version}</span>
	</section>
</div>

<style>
	div {
		padding-inline: var(--grid-gap);
	}

	section {
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
		grid-row: span 2;
	}
	p {
		grid-column: span 2;
		line-height: 1.5;
	}
</style>

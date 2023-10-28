<script lang="ts">
	import Heading3 from '../heading/Heading3.svelte';

	export let title: string;
	export let description: string;
</script>

<div>
	<Heading3>{title}</Heading3>
	<p>{description}</p>
	<slot />
</div>

<style>
	p {
		margin-block-end: var(--grid-gap);
	}
</style>

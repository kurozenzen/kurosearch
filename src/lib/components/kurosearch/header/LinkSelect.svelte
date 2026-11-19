<script>
	import { resolve } from '$app/paths';
	import IconLink from '$lib/components/pure/icon-link/IconLink.svelte';
</script>

<IconLink title="Select" href={resolve('/select')}>
	<i class="codicon codicon-search-sparkle"></i>
</IconLink>

<style>
	@media not (prefers-reduced-motion) {
		i {
			transition: transform 0.5s ease-out;
		}

		:global(:hover) > i {
			transform: rotateY(180deg);
		}
	}
</style>

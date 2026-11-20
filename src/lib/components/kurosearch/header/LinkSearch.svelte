<script lang="ts" module>
	import { resolve } from '$app/paths';
	import IconLink from '$lib/components/pure/icon-link/IconLink.svelte';
</script>

<IconLink title="Search" href={resolve('/')}>
	<i class="codicon codicon-search"></i>
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

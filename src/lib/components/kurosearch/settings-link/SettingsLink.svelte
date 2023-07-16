<script lang="ts">
	import { base } from '$app/paths';
	import IconLink from '$lib/components/pure/icon-link/IconLink.svelte';
</script>

<IconLink title="Settings" href="{base}/preferences" className="gear">
	<i class="codicon codicon-settings-gear" />
</IconLink>

<style>
	i {
		height: 16px;
	}

	@media not (prefers-reduced-motion) {
		i {
			transition: transform 0.5s ease-out;
		}

		:global(.gear:hover i) {
			transform: rotate(180deg);
		}
	}
</style>

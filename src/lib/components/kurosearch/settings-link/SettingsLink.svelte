<script lang="ts">
	import { resolve } from '$app/paths';
	import IconLink from '$lib/components/pure/icon-link/IconLink.svelte';
</script>

<IconLink title="Settings" href={resolve('/preferences')} className="gear">
	<i class="codicon codicon-settings-gear"></i>
</IconLink>

<style lang="scss">
	i {
		height: 16px;
	}

	@media not (prefers-reduced-motion) {
		i {
			transition: transform 0.5s ease-out;
		}
	}
</style>

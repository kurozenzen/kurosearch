<script lang="ts">
	import IconLink from './IconLink.svelte';

	export let title: string;
	export let href: string;
	export let icon: string;
	export let newtab = false;
</script>

<IconLink {title} {href} {newtab}>
	<i class={icon} />
</IconLink>

<style>
	i {
		height: 16px;
	}
</style>

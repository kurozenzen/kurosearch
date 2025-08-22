<script lang="ts">
	interface Props {
		url: string;
	}

	let { url }: Props = $props();
</script>

<a href={url} target="_newtab"><i class="codicon codicon-file"></i> File</a>

<style>
	a {
		color: var(--text-link);
		font-size: var(--text-size);
		text-decoration: none;
		white-space: nowrap;
		display: inline-flex;
		gap: var(--tiny-gap);
		align-items: center;
	}
</style>

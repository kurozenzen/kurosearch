<script lang="ts">
	interface Props {
		url: string;
	}

	let { url }: Props = $props();
</script>

<a href={url} target="_newtab"><i class="mixin-icon-text codicon codicon-file"></i> File</a>

<style>
	a {
		color: var(--text-link);
		font-size: var(--text-size);
		text-decoration: none;
	}
</style>

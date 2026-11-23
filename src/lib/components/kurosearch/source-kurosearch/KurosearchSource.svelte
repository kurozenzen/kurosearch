<script lang="ts">
	import { resolve } from '$app/paths';

	interface Props {
		id: number;
	}

	let { id }: Props = $props();

	let url = $derived(`${resolve('/post')}?id=${id}`);
</script>

<a href={url} target="_newtab" class="mixin-icon-text codicon codicon-link-external">Open</a>

<style>
	a {
		color: var(--text-link);
		font-size: var(--text-size);
		text-decoration: none;
	}

	a::before {
		font-size: var(--text-size-large);
	}
</style>

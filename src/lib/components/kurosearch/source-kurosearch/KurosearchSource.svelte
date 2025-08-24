<script lang="ts">
	import { resolve } from '$app/paths';

	interface Props {
		id: number;
	}

	let { id }: Props = $props();

	let url = $derived(`${resolve('/post')}?id=${id}`);
</script>

<a href={url} target="_newtab" class="codicon codicon-link-external">Open</a>

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

	a::before {
		font-size: 16px;
	}
</style>

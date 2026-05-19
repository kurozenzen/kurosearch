<script lang="ts">
	import type { Snippet } from 'svelte';
	import LayoutCommon from '../layout-common/LayoutCommon.svelte';
	import './body.css';

	interface Props {
		children: Snippet;
	}
	const { children }: Props = $props();
</script>

<LayoutCommon>
	{@render children()}
</LayoutCommon>

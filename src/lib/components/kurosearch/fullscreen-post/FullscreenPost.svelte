<script lang="ts">
	import Fullscreen from '$lib/components/pure/fullscreen/Fullscreen.svelte';
	import { createEventDispatcher } from 'svelte';
	import SingleColumnPost from '../post/SingleColumnPost.svelte';

	const dispatch = createEventDispatcher();

	export let post: kurosearch.Post;
</script>

<Fullscreen on:close>
	<article>
		<div>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<i class="codicon codicon-close" on:click={() => dispatch('close')} />
		</div>
		<SingleColumnPost {post} open />
	</article>
</Fullscreen>

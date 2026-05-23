<script lang="ts">
	import { browser } from '$app/environment';
	import { resolve } from '$app/paths';
	import IconLink from '$lib/components/pure/icon-link/IconLink.svelte';
	import { getAuth } from 'firebase/auth';
	import { onMount } from 'svelte';

	interface Props {
		src?: string;
	}

	let { src }: Props = $props();
	let authPhotoSrc: string | undefined = $state(undefined);

	const displaySrc = $derived(src ?? authPhotoSrc);

	onMount(() => {
		if (!browser) {
			return;
		}

		authPhotoSrc = getAuth().currentUser?.photoURL ?? undefined;

		const unsubscribe = getAuth().onAuthStateChanged((user) => {
			authPhotoSrc = user?.photoURL ?? undefined;
		});

		return () => unsubscribe();
	});
</script>

<IconLink title="Account" href={resolve('/account')}>
	{#if displaySrc}
		<img class="profile-picture" src={displaySrc} alt="Account" />
	{:else}
		<i class="codicon codicon-account"></i>
	{/if}
</IconLink>

<style>
	img,
	i {
		width: 16px;
		height: 16px;
		border-radius: 8px;
	}
</style>

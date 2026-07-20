<script lang="ts">
	import dataSaverStore, { checkImgBandwith } from '$lib/store/data-saver-store';
	import type { HTMLImgAttributes } from 'svelte/elements';

	let props: HTMLImgAttributes = $props();

	let isHeavy = $derived(checkImgBandwith(Number(props.width), Number(props.height)));
	let clicked = $state(false);

	let { src, onclick } = $derived(
		$dataSaverStore && isHeavy && !clicked
			? {
					src: undefined,
					onclick: (e: MouseEvent) => {
						e.preventDefault();
						e.stopPropagation();
						clicked = true;
					}
				}
			: { src: props.src, onclick: props.onclick }
	);
</script>

<img {...props} {src} {onclick} />

<style>
	img {
		background-color: #000;
	}
</style>

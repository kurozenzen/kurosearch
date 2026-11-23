<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';
	import { callbackobserver, resolveSrc } from './observer';

	let { src, srcset, width, height, ...props }: HTMLImgAttributes = $props();
	let isIntersecting = $state(false);
</script>

<img
	src={resolveSrc(isIntersecting, src)}
	srcset={resolveSrc(isIntersecting, srcset)}
	{width}
	{height}
	style:aspect-ratio="{width} / {height}"
	{@attach callbackobserver((entry) => {
		isIntersecting = entry.isIntersecting;
	})}
	{...props}
/>

<style>
	img {
		display: block;
		width: 100%;
		height: auto;
	}
</style>

<script lang="ts">
	import type { HTMLVideoAttributes } from 'svelte/elements';
	import { callbackobserver, resolveSrc } from './observer';

	let { src, width, height, ...props }: HTMLVideoAttributes = $props();
	let isIntersecting = $state(false);
</script>

<video
	src={resolveSrc(isIntersecting, src)}
	{width}
	{height}
	style:aspect-ratio="{width} / {height}"
	{@attach callbackobserver((entry) => {
		isIntersecting = entry.isIntersecting;
	})}
	{...props}
>
</video>

<style>
	video {
		display: block;
		width: 100%;
		height: auto;
	}
</style>

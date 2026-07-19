<script lang="ts">
	import { observer } from '$lib/logic/attachments/observer';

	import results from '$lib/store/results-store';
	import FullscreenMedia from './FullscreenMedia.svelte';

	interface Props {
		offset: number;
		step: number;
		index: number;
		onended: () => void;
		startAt?: number;
		ondetails: () => void;
		onVisible: (index: number) => void;
	}

	let { offset, step, index, startAt, onended, ondetails, onVisible }: Props = $props();

	let thisIndex = $derived(Math.round((index - offset) / step) * step + offset);
	let actualStartAt = $derived(thisIndex == index ? startAt : undefined);

	const intersectionObserver = new IntersectionObserver(
		(entries) =>
			entries.filter((entry) => entry.isIntersecting).forEach((entry) => onVisible(thisIndex)),
		{
			root: null,
			rootMargin: '0px',
			threshold: 1
		}
	);
</script>

{#if thisIndex >= 0 && thisIndex < $results.posts.length}
	{@const post = $results.posts[thisIndex]}
	<!-- <p style="left:calc({offset} * 33vw);" class:active={thisIndex === index}>
		[DEBUG {offset}]<br />IDX: {index}<br />DISP: {thisIndex}
	</p> -->
	<div {@attach observer(intersectionObserver)} style="--post-index:{thisIndex};">
		<FullscreenMedia {post} {onended} startAt={actualStartAt} {ondetails} />
	</div>
{/if}

<style>
	div {
		--post-index: default 0;
		--post-offset: calc(var(--post-index) * 100lvh);
		transform: translateY(var(--post-offset));
		position: absolute;
		left: 0;

		width: 100vw;
		height: 100vh;

		scroll-snap-align: start;
		scroll-snap-stop: always;

		display: grid;
		grid-template-columns: 100vw 100vw;

		will-change: transform;

		&::-webkit-scrollbar {
			width: 0px;
			height: 0px;
		}
	}

	/* p {
		position: sticky;
		top: 0;
		width: 30vw;
	}

	.active {
		font-weight: bold;
		color: yellow;
	} */
</style>

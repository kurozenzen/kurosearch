<script lang="ts">
	import QuickSearchGroup from './QuickSearchGroup.svelte';

	interface Props {
		setTags: (tags: kurosearch.SearchableTag[]) => void;
	}

	let { setTags }: Props = $props();

	const onchange = (tags: kurosearch.SearchableTag[]) => (event: Event) => {
		if (event?.target instanceof HTMLInputElement && event.target.checked) {
			setTags(tags);
		}
	};
</script>

<QuickSearchGroup name="Media">
	<label for="media-all">
		<span>ALL</span>
		<input type="radio" id="media-all" name="media" checked onchange={onchange([])} />
		All
	</label>
	<label for="media-video">
		<span>VID</span>
		<input
			type="radio"
			id="media-video"
			name="media"
			onchange={onchange([{ name: 'video', modifier: '+' }])}
		/>
		Video
	</label>
	<label for="media-image">
		<span>IMG</span>
		<input
			type="radio"
			id="media-image"
			name="media"
			onchange={onchange([{ name: 'animated', modifier: '-' }])}
		/>
		Image
	</label>
	<label for="media-gif">
		<span>GIF</span>
		<input
			type="radio"
			id="media-gif"
			name="media"
			onchange={onchange([{ name: 'animated_gif', modifier: '+' }])}
		/>
		GIF
	</label>
	<label for="media-comic">
		<span>COM</span>
		<input
			type="radio"
			id="media-comic"
			name="media"
			onchange={onchange([{ name: 'comic', modifier: '+' }])}
		/>
		Comic
	</label>
</QuickSearchGroup>

<style>
	label {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: var(--small-gap);
		gap: var(--small-gap);
		border-radius: var(--border-radius);
		color: var(--text);
		border: 2px solid var(--background-2);
		background-color: var(--background-1);
		font-size: var(--text-size-h3);
	}

	label:has(input:checked) {
		color: var(--accent);
		border-color: var(--accent);

		> span {
			background-color: var(--accent);
			border-color: var(--accent);
		}
	}

	input {
		display: none;
	}

	@media (hover: hover) {
		label:hover {
			background-color: var(--background-1);
			border-color: var(--background-2);
		}
	}

	span {
		width: 64px;
		height: 64px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--text);
		color: var(--background-1);
		border-radius: var(--border-radius);
	}
</style>

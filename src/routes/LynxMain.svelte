<script lang="ts">
	import { base } from '$app/paths';
</script>

<div>
	<a href="https://www.twitch.tv/helheim_lynx" target="_blank" title="Check out Lynxy!">
		<img
			id="happy"
			src="{base}/assets/lynxy-chibi.webp"
			alt="Helheim Lynx"
			width="1231"
			height="864"
		/>
	</a>
</div>

<style>
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		contain: strict;
		height: 200px;
		padding-inline: var(--small-gap);
	}

	a {
		display: contents;
	}

	img {
		object-fit: contain;
		max-height: 100%;
		max-width: 100%;
	}
</style>

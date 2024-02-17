<script lang="ts">
	import { base } from '$app/paths';
</script>

<div>
	<a href="https://www.twitch.tv/helheim_lynx">
		<img id="happy" src="{base}/assets/lynxy-chibi.webp" alt="Helheim Lynx" />
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

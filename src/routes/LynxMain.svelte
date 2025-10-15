<script lang="ts">
	import lynxChibiSrc from '$lib/assets/lynxy-chibi.webp';

	let details = $state(false);
</script>

<div>
	<button type="button" onclick={() => (details = !details)}>
		<img id="happy" src={lynxChibiSrc} alt="Helheim Lynx" width="1231" height="864" />
	</button>
	{#if details}
		<a
			href="https://www.twitch.tv/helheim_lynx"
			target="_blank"
			title="Check out Lynxy!"
			class="codicon codicon-link-external"
		>
			Check out Lynx on Twitch!
		</a>
	{/if}
</div>

<style lang="scss">
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 200px;
		contain: strict;
		padding-inline: var(--small-gap);
	}

	button {
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
		display: block;
	}

	a {
		color: var(--accent);
		background: var(--background-0);
		padding: var(--grid-gap);
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		border-radius: var(--border-radius);
		display: flex;
		gap: var(--small-gap);
		border: solid 2px currentColor;
	}

	img {
		display: block;
		object-fit: contain;
		height: min(100%, 150px);
		width: min(100%, 214px);
		aspect-ratio: 1231 / 864;
	}
</style>

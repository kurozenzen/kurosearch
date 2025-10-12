<script lang="ts">
	import lynxChibiSrc from '$lib/assets/lynxy-chibi.webp';

	let details = false;
</script>

<div>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<img
		id="happy"
		src={lynxChibiSrc}
		alt="Helheim Lynx"
		width="1231"
		height="864"
		on:click={() => (details = !details)}
	/>
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

<style>
	div {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		max-height: 200px;
		padding-inline: var(--small-gap);
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
		box-shadow: var(--default-shadow);
	}

	img {
		display: block;
		object-fit: contain;
		max-height: 150px;
		max-width: 214px;
		aspect-ratio: 1231 / 864;
		flex-grow: 1;
	}
</style>

<script lang="ts">
	import lynxChibiSrc from '$lib/assets/lynxy-chibi.webp';
	import lynxChibiHalloweenSrc from '$lib/assets/lynxy-chibi-halloween.webp';
	import lynxChibiChristmasSrc from '$lib/assets/lynxy-chibi-christmas.webp';
	import { onMount } from 'svelte';

	const computeSrc = () => {
		const month = new Date().getMonth();
		switch (month) {
			case 9:
				return lynxChibiHalloweenSrc;
			case 11:
				return lynxChibiChristmasSrc;
			default:
				return lynxChibiSrc;
		}
	};

	let src = $state(computeSrc());
	let details = $state(false);

	onMount(() => {
		src = computeSrc();
	});
</script>

<div>
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
	<img
		id="happy"
		{src}
		alt="Helheim Lynx"
		width="1231"
		height="864"
		onclick={() => (details = !details)}
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
		margin-block-end: -20px;
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

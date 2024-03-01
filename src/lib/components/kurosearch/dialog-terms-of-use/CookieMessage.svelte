<script lang="ts">
	import TextButton from '$lib/components/pure/text-button/TextButton.svelte';
	import cookiesAccepted from '$lib/store/cookies-accepted-store';
	import LynxMain from '../../../../routes/LynxMain.svelte';

	const accept = () => {
		$cookiesAccepted = true;
		document.documentElement.dataset.cookies = 'true';
	};

	const leave = () => {
		history.back();
	};
</script>

<svelte:head>
	<script lang="ts">
		const cookies = localStorage.getItem('kurosearch:cookies-accepted') ?? 'false';
		document.documentElement.dataset.cookies = cookies;
	</script>
</svelte:head>

<div id="cookie-dialog" class="backdrop">
	<section>
		<LynxMain />
		<h1>kurosearch</h1>
		<h2>Terms of Use</h2>
		<span />
		<h3>Mature Content</h3>
		<p>
			This website contains mature content. By using this website you confirm that you are at
			legally allowed to view such content.
		</p>
		<span />
		<h3>Use of Cookies</h3>
		<p>Additinally, this website uses cookies to provide functionality.</p>
		<div class="row">
			<TextButton title="Accept terms of use" on:click={accept}>Accept</TextButton>
			<TextButton title="Leave website" type="secondary" on:click={leave}>Leave</TextButton>
		</div>
	</section>
</div>

<style>
	section {
		display: flex;
		flex-direction: column;
		background-color: var(--background-0);
		gap: var(--grid-gap);
		padding: var(--grid-gap);
		max-width: 500px;
		border-radius: var(--border-radius-large);
	}

	h1 {
		font-family: 'Zen Kaku Gothic New', sans-serif;
		font-size: 72px;
		color: var(--accent);
		margin-block: -0.25em;
	}

	@media (max-width: 600px) {
		h1 {
			font-size: 12vw;
		}
	}

	span {
		background-color: var(--background-1);
		height: 2px;
	}

	h1,
	h2,
	h3,
	p {
		text-align: center;
	}

	:global(:root[data-cookies='false'] .backdrop) {
		display: flex;
	}

	.backdrop {
		z-index: var(--z-dialog);
		position: fixed;
		display: none;
		justify-content: center;
		align-items: center;
		width: 100vw;
		height: 100vh;
		backdrop-filter: blur(10px);
		overflow: hidden;
	}

	@media not (min-width: 600px) {
		.backdrop {
			background-color: var(--background-0);
		}
	}

	@media (min-width: 600px) {
		section {
			border: solid 2px crimson;
			box-shadow: 0 0 100px 100px black;
		}
	}

	.row {
		align-self: center;
		display: flex;
		gap: var(--grid-gap);
	}
</style>

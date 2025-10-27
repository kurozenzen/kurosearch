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
		<div class="scroll">
			<LynxMain />
			<h2>kurosearch</h2>
			<h3>Terms of Use</h3>
			<span></span>
			<h4>Mature Content</h4>
			<p>
				This website contains mature content. By using this website you confirm that you are at
				legally allowed to view such content.
			</p>
			<span></span>
			<h4>Cookies</h4>
			<p>This website uses cookies.</p>
		</div>
		<div class="row">
			<TextButton title="Accept terms of use" onclick={accept}>Accept</TextButton>
			<TextButton title="Leave website" type="secondary" onclick={leave}>Leave</TextButton>
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
		max-height: 99vh;
		border-radius: var(--border-radius-large);
	}

	h2 {
		font-family: 'Zen Kaku Gothic New', sans-serif;
		font-size: 72px;
		color: var(--accent);
		margin-block: -1rem 0;
	}

	h3 {
		font-size: 24px;
	}

	@media (max-width: 600px) {
		h2 {
			font-size: 12vw;
		}
	}

	span {
		background-color: var(--background-1);
		height: 2px;
	}

	h2,
	h3,
	h4,
	p {
		text-align: center;
	}

	h4 {
		font-size: 18px;
		font-weight: bold;
	}

	:global(:root[data-cookies='false'] .backdrop) {
		display: flex;
	}

	:global(:root[data-cookies='false'] body) {
		overflow: hidden;
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

	.scroll {
		overflow-y: auto;
		display: flex;
		flex-direction: column;
		gap: var(--grid-gap);
	}
</style>

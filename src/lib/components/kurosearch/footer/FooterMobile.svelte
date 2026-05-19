<script>
	import { resolve } from '$app/paths';
	import CodiconTextLink from '$lib/components/pure/icon-link/CodiconTextLink.svelte';
	import Copyright from './Copyright.svelte';
</script>

<footer>
	<section>
		<CodiconTextLink
			title="Source Code"
			href="https://github.com/kurozenzen/kurosearch"
			icon="codicon codicon-github"
			label="Github"
			target="_blank"
		/>

		<Copyright />

		<CodiconTextLink
			title="About"
			href={resolve('/about')}
			icon="codicon codicon-info"
			label="About"
		/>
	</section>
	<p>
		I do not own the rights to Helheim Lynx and this site is in no way endorsed by, affiliated with,
		or in any other way connected to them.
	</p>
</footer>

<style>
	footer {
		padding: var(--grid-gap);
	}

	section {
		display: flex;
		gap: 8px;
		color: var(--text-muted);
		justify-content: space-between;
	}

	footer {
		width: 100%;
		max-width: calc(var(--body-width) + 2 * var(--grid-gap));
	}

	footer {
		display: flex;
		flex-direction: column;
		gap: var(--grid-gap);
	}

	p {
		font-size: var(--text-size-small);
		text-align: center;
		color: var(--text-muted);
	}
</style>

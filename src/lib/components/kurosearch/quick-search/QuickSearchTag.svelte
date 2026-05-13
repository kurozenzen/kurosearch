<script lang="ts">
	let { name, icon, onclick } = $props();
</script>

<button {onclick} style="--icon: url({icon})">
	<span>{name}</span>
</button>

<style>
	button {
		position: relative;
		background-image: var(--icon);
		background-size: cover;
		width: 8rem;
		min-width: 8rem;
		max-width: 8rem;
		height: 12rem;
		display: flex;
		align-items: end;
		padding: var(--small-gap);
		gap: var(--small-gap);
		border-radius: var(--border-radius);
		color: white;
		border: 2px solid var(--background-2);
		background-color: var(--background-1);
		transition: all var(--default-transition-behaviour);
	}

	button::before {
		content: '';
		position: absolute;
		background: linear-gradient(5deg, var(--accent) 10%, #ff000000 40%);
		opacity: 0.9;
		height: 100%;
		width: 100%;
		bottom: 0;
		left: 0;
		mix-blend-mode: multiply;
		transition: all var(--default-transition-behaviour);
	}

	@media (hover: hover) {
		button:hover {
			border-color: var(--accent);
		}
	}

	span {
		font-size: var(--text-size-h3);
		z-index: 1;
	}
</style>

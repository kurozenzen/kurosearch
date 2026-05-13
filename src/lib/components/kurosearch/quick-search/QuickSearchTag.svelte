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
		justify-content: center;
		padding: var(--small-gap);
		gap: var(--small-gap);
		border-radius: var(--border-radius);
		color: white;
		border: 2px solid var(--background-2);
		background-color: var(--background-1);
		transition: all var(--default-transition-behaviour);
	}

	@property --gradient-color {
		syntax: '<color>';
		initial-value: var(--background-2);
		inherits: false;
	}

	button::before {
		--gradient-color: var(--background-2);
		content: '';
		position: absolute;
		background: linear-gradient(5deg, var(--gradient-color) 10%, #ff000000 40%);
		height: 100%;
		width: 100%;
		bottom: 0;
		left: 0;
		mix-blend-mode: multiply;
		transition: all var(--default-transition-behaviour), --gradient-color var(--default-transition-behaviour);
	}

	@media (hover: hover) {
		button:hover {
			border-color: var(--accent);
		}

		button:hover::before {
			height: 150%;
			--gradient-color: var(--accent);
		}
	}

	span {
		font-size: var(text-size-large);
		z-index: 1;
	}
</style>

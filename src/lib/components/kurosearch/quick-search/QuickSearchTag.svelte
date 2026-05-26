<script lang="ts">
	let { name, icon, onclick, oncontextmenu, checked } = $props();
</script>

<svelte:head>
	<link rel="preload" as="image" href={icon} />
</svelte:head>

<button {onclick} {oncontextmenu} style="--icon: url({icon})" class:checked>
	{#if checked}
		<i class="codicon codicon-pass"></i>
	{/if}
	<span>{name}</span>
</button>

<style>
	button {
		--icon: url('');
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
		border: 0px solid var(--background-2);
		background-color: var(--background-1);
		transition: all var(--default-transition-behaviour);
	}

	@property --gradient-color {
		syntax: '<color>';
		initial-value: transparent;
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
		transition: all var(--default-transition-behaviour);
	}

	span {
		font-size: var(--text-size-large);
		z-index: 1;
	}

	i {
		position: absolute;
		top: var(--small-gap);
		left: var(--small-gap);
		z-index: 1;
		color: var(--accent);
		background-color: var(--accent);
		border-radius: 50%;
		color: var(--accent-contrast);
		padding: 0.1rem;
	}

	button.checked {
		border-width: 4px;
	}

	button:active {
		border-color: var(--accent);
		border-width: 2px;
		opacity: 0.8;
	}

	@media (hover: hover) {
		button:hover {
			border-color: var(--accent);
			border-width: 2px;
		}

		button:hover::before {
			height: 150%;
			--gradient-color: var(--accent);
		}
	}
</style>

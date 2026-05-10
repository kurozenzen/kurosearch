<script lang="ts">
	let { name, icon, onclick } = $props();
</script>

<button {onclick}>
	<img src={icon} alt={name} />
	<span>{name}</span>
</button>

<style>
	button {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: var(--small-gap);
		gap: var(--small-gap);
		border-radius: var(--border-radius);
		color: var(--text);
		border: 2px solid var(--background-2);
		background-color: var(--background-1);
	}

	@media (hover: hover) {
		button:hover {
			background-color: var(--background-1);
			border-color: var(--background-2);
		}
	}

	img {
		width: 128px;
		height: 128px;
		background-color: var(--background-2);
		border-radius: var(--border-radius);
	}
	span {
		font-size: var(--text-size-h3);
	}
</style>

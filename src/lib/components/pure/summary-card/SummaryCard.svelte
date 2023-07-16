<script lang="ts">
	export let id: string;
	export let icon: string;
	export let title: string;
	export let description: string;
</script>

<a class="card" href="#{id}">
	<div class="icon">
		<i class="codicon codicon-{icon}" />
	</div>
	<div class="text">
		<h3>{title}</h3>
		<span>{description}</span>
	</div>
</a>

<style>
	.card {
		padding: 1.5rem;
		border: 2px solid var(--background-1);
		border-radius: var(--border-radius);
		display: flex;
		gap: 1.5rem;
		transition: all var(--default-transition-behaviour);
		color: var(--text);
	}

	@media (hover: hover) {
		.card:hover {
			background-color: var(--background-1);
			border-color: var(--background-2);
		}

		.card:hover .icon {
			border-color: var(--background-2);
		}
	}

	.icon {
		width: 64px;
		height: 64px;
		flex-shrink: 0;
		display: grid;
		place-items: center;
		border: 2px solid var(--background-1);
		border-radius: var(--border-radius);
		transition: border-color var(--default-transition-behaviour);
	}

	i {
		font-size: 32px;
		height: 32px;
		color: var(--accent);
	}

	h3 {
		color: var(--text-highlight);
		font-weight: bold;
		font-size: 18px;
		margin-bottom: 0.5rem;
	}
</style>

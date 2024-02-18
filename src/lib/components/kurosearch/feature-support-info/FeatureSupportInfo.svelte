<script lang="ts">
	export let supported: boolean;
	export let title: string;
	export let description: string;

	$: icon = supported ? 'codicon codicon-pass' : 'codicon codicon-error';
</script>

<div>
	<i class={icon} />
	<b>{title}</b>
	<p>{description}</p>
</div>

<style>
	div {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: var(--small-gap);
	}

	i {
		grid-row: span 2;
		align-items: center;
	}

	.codicon-pass {
		color: green;
	}

	.codicon-error {
		color: orange;
	}
</style>

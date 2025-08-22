<script lang="ts">
	interface Props {
		supported: boolean;
		title: string;
		description: string;
	}

	let { supported, title, description }: Props = $props();

	let icon = $derived(supported ? 'codicon codicon-pass' : 'codicon codicon-error');
</script>

<div>
	<i class={icon}></i>
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

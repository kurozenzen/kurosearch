<script lang="ts">
	import IconButton from '../button-icon/IconButton.svelte';

	interface Props {
		id?: string;
		options: Record<string, string>;
		value: string;
	}

	let { id, options, value = $bindable() }: Props = $props();

	let index = $derived(Object.keys(options).indexOf(value));
	let entries = $derived(Object.entries(options));
	let text = $derived(entries[index][1]);

	const rotate = () => {
		index = (index + 1) % entries.length;
		value = entries[index][0];
	};
</script>

<IconButton {id} onclick={rotate} variant="with-background">{text}</IconButton>

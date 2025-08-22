<script lang="ts">
	import IconButton from '../button-icon/IconButton.svelte';

	interface Props {
		id?: string;
		options: Record<string, string>;
		value: string;
		'aria-label'?: string;
	}

	let { id, options, value = $bindable(), ...rest }: Props = $props();

	let index = $derived(Object.keys(options).indexOf(value));
	let entries = $derived(Object.entries(options));
	let icon = $derived(entries[index][1]);

	const rotate = () => {
		index = (index + 1) % entries.length;
		value = entries[index][0];
	};
</script>

<IconButton
	{id}
	class={icon}
	onclick={rotate}
	aria-label={rest['aria-label']}
	variant="with-background"
/>

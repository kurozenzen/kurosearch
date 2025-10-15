<script lang="ts">
	import IconButton from '$lib/components/pure/button/IconButton.svelte';

	interface Props {
		id?: string;
		options: Record<string, string>;
		value: string;
		'aria-label'?: string;
	}

	let { id, options, value = $bindable(), ...rest }: Props = $props();

	let index = $derived(Object.keys(options).indexOf(value));
	let entries = $derived(Object.entries(options));
	let text = $derived(entries[index][1]);

	const rotate = () => {
		index = (index + 1) % entries.length;
		value = entries[index][0];
	};

	let ariaLabel = $derived(rest['aria-label'] ? `${rest['aria-label']}: ${text}` : `Select option: ${text}`);
</script>

<IconButton
	{id}
	onclick={rotate}
	variant="with-background"
	aria-label={ariaLabel}
	title={ariaLabel}
>
	{text}
</IconButton>

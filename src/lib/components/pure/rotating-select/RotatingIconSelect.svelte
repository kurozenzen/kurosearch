<script lang="ts">
	import type { ClassValue } from 'svelte/elements';
	import IconButton from '../button-icon/IconButton.svelte';
	import type { InputProps } from '../types';

	interface Props extends InputProps {
		options: Record<string, string>;
		value: string;
		class?: ClassValue;
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
	class={['mixin-primary', rest.class]}
	onclick={rotate}
	aria-label={rest['aria-label']}
>
	<i class={icon}></i>
</IconButton>

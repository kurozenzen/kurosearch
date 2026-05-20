<script lang="ts">
	import RotatingIconSelect from '$lib/components/pure/rotating-select/RotatingIconSelect.svelte';
	import { MODIFIERS_ICONS } from '$lib/logic/tag-modifier-data';

	interface Props {
		modifier: kurosearch.TagModifier;
		class?: string;
	}

	let { modifier = $bindable(), ...rest }: Props = $props();
</script>

<RotatingIconSelect
	id="select-modifier"
	bind:value={modifier}
	options={MODIFIERS_ICONS}
	aria-label="TagModifier Selector. Current value {modifier}."
	class={rest.class}
/>

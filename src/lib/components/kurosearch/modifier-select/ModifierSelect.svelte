<script lang="ts">
	import { MODIFIERS_ICONS } from '$lib/logic/tag-modifier-data';
	import RotatingIconSelect from '$lib/components/pure/rotating-select/RotatingIconSelect.svelte';

	export let modifier: kurosearch.TagModifier;
</script>

<RotatingIconSelect bind:value={modifier} options={MODIFIERS_ICONS} />

<script lang="ts">
	import RotatingIconSelect from '$lib/components/pure/rotating-select/RotatingIconSelect.svelte';
	import { MODIFIERS_ICONS } from '$lib/logic/tag-modifier-data';

	export let modifier: kurosearch.TagModifier;
</script>

<RotatingIconSelect bind:value={modifier} options={MODIFIERS_ICONS} />

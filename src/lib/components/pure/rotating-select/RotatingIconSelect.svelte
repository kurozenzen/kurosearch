<script lang="ts">
	import IconButton from '../button-icon/IconButton.svelte';

	export let options: Record<string, string>;
	export let value: string;
	export let id: string | undefined = undefined;

	$: index = Object.keys(options).indexOf(value);
	$: entries = Object.entries(options);
	$: icon = entries[index][1];

	const rotate = () => {
		index = (index + 1) % entries.length;
		value = entries[index][0];
	};
</script>

<IconButton {id} class={icon} on:click={rotate} aria-label={$$props['aria-label']} />

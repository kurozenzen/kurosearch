<script lang="ts">
	import IconButton from '../button-icon/IconButton.svelte';

	export let options: Record<string, string>;
	export let value: string;

	$: index = Object.keys(options).indexOf(value);
	$: entries = Object.entries(options);
	$: text = entries[index][1];

	const rotate = () => {
		index = (index + 1) % entries.length;
		value = entries[index][0];
	};
</script>

<IconButton on:click={rotate}>{text}</IconButton>

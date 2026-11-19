<script lang="ts">
	import Heading from './Heading.svelte';

	interface Props {
		title: string;
	}

	let props: Props = $props();
</script>

<Heading element="h3" {...props} />

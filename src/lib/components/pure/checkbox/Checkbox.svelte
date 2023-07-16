<script lang="ts">
	export let checked: boolean;
	export let id: string;
</script>

<label for={id}>
	<input type="checkbox" {id} bind:checked />
	<slot />
</label>

<style>
	label {
		display: flex;
		align-items: center;
		gap: var(--grid-gap);
	}
</style>

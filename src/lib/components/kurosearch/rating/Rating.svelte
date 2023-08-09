<script lang="ts">
	export let value: kurosearch.Rating;
</script>

<span title="Rated {value}.">{value.charAt(0).toUpperCase()}</span>

<style>
	span {
		color: var(--text);
		font-size: 12px;
		font-weight: bold;
		border: solid 1px var(--text);
		padding: 1px;
		width: 18px;
		flex-shrink: 0;
		text-align: center;
		border-radius: 10px;
		box-sizing: border-box;
	}
</style>

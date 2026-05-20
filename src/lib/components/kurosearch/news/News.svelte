<script>
	import { resolve } from '$app/paths';
</script>

<div class="news">
	<i class="codicon codicon-megaphone" style="font-size: 32px; margin-right: 8px;"></i>
	<p>
		<a href={resolve('/select')}>kurosearch.com/select</a> is almost complete!<br />Only images are
		missing now. Please submit some.
	</p>
</div>

<style>
	div {
		display: flex;
		align-items: center;
		width: 100%;
		background: var(--background-1);
		gap: var(--small-gap);
		padding: var(--grid-gap);
	}

	i {
		font-size: 32px;
	}

	p {
		text-align: left;
		font-size: var(--text-size-medium);
		color: var(--text);
	}
</style>

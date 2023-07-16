<h1><slot /></h1>

<style>
	h1 {
		color: var(--text-highlight);
		font-size: var(--text-size-h1);
		padding-block: 4rem;
	}

	@media (max-width: 420px) {
		h1 {
			font-size: 12.6vw;
		}
	}
</style>

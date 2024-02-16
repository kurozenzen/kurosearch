<script lang="ts">
	const now = new Date();
	const getTitle = (date: Date) => {
		const dayMonth = `${date.getDate()}-${date.getMonth()}`;
		if (dayMonth === '24-12' || dayMonth === '25-12') {
			return 'kur🎅search';
		}

		return 'kurosearch';
	};

	const getClass = (date: Date) => {
		if (date.getMonth() === 5) {
			return 'pride';
		}

		return 'default';
	};

	const title = getTitle(now);
	const cssClass = getClass(now);
</script>

<h1 class={cssClass}>{@html title}</h1>

<style>
	h1 {
		font-family: 'Zen Kaku Gothic New', sans-serif;
		font-size: 72px;
		text-align: center;
		color: var(--accent);
		user-select: none;
		line-height: 72px;
	}

	@media (max-width: 600px) {
		h1 {
			font-size: 12vw;
			line-height: 12vw;
		}
	}

	.pride {
		background: linear-gradient(
			#60d0fa 30%,
			#60d0fa 42%,
			#f5aab9 42%,
			#f5aab9 54%,
			#fff 54%,
			#fff 66%,
			#f5aab9 66%,
			#f5aab9 78%,
			#60d0fa 78%,
			#60d0fa 90%
		);
		background-size: 100% 80%;
		background-position: bottom;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>

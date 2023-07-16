<script lang="ts">
	const now = new Date();
	const getTitle = (date: Date) => {
		const dayMonth = `${date.getDate()}-${date.getMonth()}`;
		if (dayMonth === '24-12' || dayMonth === '25-12') {
			return 'kur<span class="title-emoji">🎅</span>search';
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

	@media (max-width: 400px) {
		h1 {
			font-size: 18vw;
			line-height: 18vw;
		}
	}

	:global(.title-emoji) {
		font-size: 48px;
		padding: unset;
	}

	.pride {
		background: linear-gradient(
			#60d0fa 0%,
			#60d0fa 20%,
			#f5aab9 20%,
			#f5aab9 40%,
			#fff 40%,
			#fff 60%,
			#f5aab9 60%,
			#f5aab9 80%,
			#60d0fa 80%,
			#60d0fa 100%
		);
		background-size: 100% 80%;
		background-position: bottom;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>

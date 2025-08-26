export const videoObserver = new IntersectionObserver(
	(entries) => {
		for (const entry of entries) {
			if (entry.target) {
				const target = entry.target as HTMLVideoElement;

				if (entry.isIntersecting && target.autoplay && target.paused) {
					target.play();
				}

				if (!entry.isIntersecting && !target.paused) {
					target.pause();
				}
			}
		}
	},
	{ rootMargin: '-1px', threshold: 0.001 }
);

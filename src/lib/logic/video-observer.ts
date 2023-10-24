import { browser } from '$app/environment';

export const videoObserver = browser
	? new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.target) {
						console.log('checking', entry.intersectionRatio);
						const target = entry.target as HTMLVideoElement;
						if (entry.isIntersecting && target.autoplay && target.paused) {
							target.play();
						}

						if (!entry.isIntersecting && !target.paused) {
							console.log('pausing');
							target.pause();
						}
					}
				}
			},
			{ rootMargin: '-1px', threshold: 0.001 }
	  )
	: null;

import { browser } from '$app/environment';

const rootMargin = '1250px';

export const postObserver = browser
	? new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					const newSrc = entry.isIntersecting ? entry.target.getAttribute('data-src') ?? '' : '';
					entry?.target?.setAttribute('src', newSrc);
				}
			},
			{ rootMargin }
	  )
	: null;

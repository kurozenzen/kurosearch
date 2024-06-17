import { browser } from '$app/environment';

const rootMargin = '1250px';

export const postObserver = browser
	? new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				const lowSrc = entry.target.getAttribute('data-src-lowres') ?? '';
				const highSrc = entry.target.getAttribute('data-src-hires') ?? '';

				if (entry.isIntersecting) {
					entry?.target?.setAttribute('src', lowSrc);
					const fullImage = new Image();
					fullImage.src = highSrc;
					fullImage.onload = () => {
						entry.target.setAttribute('src', fullImage.src);
					}
				}
			}
		},
		{ rootMargin }
	)
	: null;

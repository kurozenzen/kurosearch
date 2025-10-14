import { browser } from '$app/environment';

const observer = browser
	? new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						const dataSrc = entry.target.getAttribute('data-src') ?? '';
						entry?.target?.setAttribute('src', dataSrc);
					}
					// Removed unload behavior - keep GIFs loaded for better UX and less bandwidth waste
				}
			},
			{ rootMargin: '1250px' }
		)
	: null;

export const observeGif = (node: HTMLElement) => {
	observer?.observe(node);

	return {
		destroy() {
			observer?.unobserve(node);
		}
	};
};

import { browser } from '$app/environment';

const rootMargin = '1250px';

export const postObserver = browser
	? new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				//check if post is visible
				if (entry.isIntersecting) {
					//fetch source urls saved in the image data attributes
					const lowSrc = entry.target.getAttribute('data-src-lowres') ?? '';
					const highSrc = entry.target.getAttribute('data-src-hires') ?? '';

					//set post.preview_url to image sources or sources.static to gifs
					entry?.target?.setAttribute('src', lowSrc);

					//data-src-hires only exists on static images so skip the rest of the function on gifs
					if (highSrc === '') return;
					//create new non-visible image and swap the sources once loaded
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

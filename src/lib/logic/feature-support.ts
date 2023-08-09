import { browser } from '$app/environment';

export const supportsUrlSharing = () => browser && 'pushState' in window.history;
export const supportsFlexGap = (() => {
	if (!browser) return false;

	// create flex container with row-gap set
	var flex = document.createElement('div');
	flex.style.display = 'flex';
	flex.style.flexDirection = 'column';
	flex.style.rowGap = '1px';

	// create two, elements inside it
	flex.appendChild(document.createElement('div'));
	flex.appendChild(document.createElement('div'));

	// append to the DOM (needed to obtain scrollHeight)
	document.body.appendChild(flex);
	var isSupported = flex.scrollHeight === 1; // flex container should be 1px high from the row-gap
	//@ts-expect-error
	flex.parentNode.removeChild(flex);

	return isSupported;
})();

export const supportsGap = browser && 'gap' in document.body.style;
export const supportsAspectRatio = browser && 'aspect-ratio' in document.body.style;
export const supportsObjectFit = browser && 'object-fit' in document.body.style;
export const supportsFullscreen = browser && document.fullscreenEnabled;
export const supportsLocalStorage = browser && Boolean(localStorage);
export const supportsSessionStorage = browser && Boolean(sessionStorage);

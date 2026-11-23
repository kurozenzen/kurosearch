import type { Attachment } from 'svelte/attachments';

export const clearsrc: Attachment = (node) => () => {
	if (node instanceof HTMLVideoElement) {
		if (!node.paused) {
			node.pause();
		}
		node.src = '';
		node.load();
	}

	if (node instanceof HTMLImageElement) {
		node.removeAttribute('src')
		node.removeAttribute('srcset')
	}
};

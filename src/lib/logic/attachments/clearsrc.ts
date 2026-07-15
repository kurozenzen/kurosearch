import type { Attachment } from 'svelte/attachments';

export const clearsrc: Attachment = (node) => () => {
	if (node instanceof HTMLVideoElement) {
		node.src = '';
		node.load();
	}

	if (node instanceof HTMLImageElement) {
		node.src = '';
	}
};

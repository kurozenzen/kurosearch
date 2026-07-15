import type { Attachment } from 'svelte/attachments';

export const fullscreenelement: Attachment = (node) => {
	if (node instanceof HTMLElement) {
		node.focus();
	}
	node.requestFullscreen().catch(() => {
		// Ignore
	});

	return () => {
		if (document.fullscreenElement === node) {
			document.exitFullscreen().catch(() => {
				// Ignore
			});
		}
	};
};

import type { Attachment } from 'svelte/attachments';
import { on } from 'svelte/events';

export const fullscreenelement =
	(onclose?: () => void): Attachment =>
	(node) => {
		if (node instanceof HTMLElement && 'requestFullscreen' in node) {
			node.focus();
			node.requestFullscreen().catch(() => {});
			return on(node, 'fullscreenchange', () => {
				if (!document.fullscreenElement) {
					onclose?.();
				}
			});
		} else {
			return () => {};
		}
	};

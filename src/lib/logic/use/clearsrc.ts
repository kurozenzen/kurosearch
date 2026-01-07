import { browser } from '$app/environment';
import type { Attachment } from 'svelte/attachments';

export const clearsrc: Attachment = (node) => {
	if (browser) {
		return () => {
			const video = node as HTMLVideoElement;
			video.src = '';
			video.load();
            console.log('Cleared video src to free memory');
		};
	}
};

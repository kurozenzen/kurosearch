import type { Attachment } from 'svelte/attachments';

export const observer =
	(observer: IntersectionObserver): Attachment =>
	(node) => {
		observer.observe(node);
		return () => observer.disconnect();
	};

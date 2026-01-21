import { browser } from '$app/environment';
import type { Attachment } from 'svelte/attachments';

const listeners = new Map<Element, (isIntersecting: boolean) => void>();

let observer: IntersectionObserver;
if (browser) {
	observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				const onchange = listeners.get(entry.target);
				onchange?.(entry.isIntersecting);
			}
		},
		{ rootMargin: '0px' }
	);
}

export const screenintersection = (onchange: (isIntersecting: boolean) => void): Attachment => {
	return (node) => {
		if (browser) {
			listeners.set(node, onchange);
			observer.observe(node);
			return () => {
				observer.unobserve(node);
			};
		}
	};
};

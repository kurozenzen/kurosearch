import { browser } from '$app/environment';
import type { Attachment } from 'svelte/attachments';

const listeners = new Map<Element, (isIntersecting: boolean) => void>();

let observers = new Map<number, IntersectionObserver>();

export const screenintersection = (
	threshold: number,
	onchange: (isIntersecting: boolean) => void
): Attachment => {
	const observer = observers.getOrInsertComputed(
		threshold,
		(threshold) =>
			new IntersectionObserver(
				(entries) => {
					for (const entry of entries) {
						const onchange = listeners.get(entry.target);
						onchange?.(entry.isIntersecting);
					}
				},
				{ rootMargin: '0px', threshold }
			)
	);

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

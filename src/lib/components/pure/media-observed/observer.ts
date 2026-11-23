import { browser } from '$app/environment';
import type { Attachment } from 'svelte/attachments';

type Callback = (entry: IntersectionObserverEntry) => void;
const callbacks = new WeakMap<Element, Callback>();

const callbackObserver = browser
	? new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					callbacks.get(entry.target)?.(entry);
				}
			},
			{ rootMargin: '50% 0px', threshold: 0 }
		)
	: (null as unknown as IntersectionObserver);

export const callbackobserver =
	(callback: Callback): Attachment =>
	(node) => {
		callbacks.set(node, callback);
		callbackObserver.observe(node);
		return () => {
			callbackObserver.unobserve(node);
			callbacks.delete(node);
		};
	};

export const resolveSrc = (isIntersecting: boolean, src: string | undefined | null) =>
	isIntersecting || src === undefined || src === null ? src : '//:0';

import { postObserver } from '$lib/logic/post-observer';

export const postobserve = (node: HTMLElement) => {
	postObserver?.observe(node);

	return {
		destroy() {
			postObserver?.unobserve(node);
		}
	};
};

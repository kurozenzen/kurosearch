import { browser } from '$app/environment';

export interface Parameters {
	hash: string;
	onPopState: () => void;
}

export const onpopstate = (_node: HTMLElement, onPopState: () => void) => {
	if (browser) {
		window.addEventListener('popstate', onPopState);

		return {
			destroy() {
				window.removeEventListener('popstate', onPopState);
			}
		};
	}
};

export const addHistory = (state: string) => {
	window.history.pushState(state, '', null);
};

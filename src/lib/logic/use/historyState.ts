export interface Parameters {
	hash: string;
	onPopState: () => void;
}

export const historyState = (_node: HTMLElement, params: Parameters) => {
	window.history.pushState(params.hash, '', `./#${params.hash}`);
	window.addEventListener('popstate', params.onPopState);

	return {
		destroy() {
			window.removeEventListener('popstate', params.onPopState);
		}
	};
};

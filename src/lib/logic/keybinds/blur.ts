import { keybindBlur } from './keyboard-utils';

export const blurOnEsc = (event: KeyboardEvent) => {
	if (keybindBlur(event) && event.target instanceof HTMLInputElement) {
		event.target.blur();
	}
};

export const blurOnEnter = (event: KeyboardEvent) => {
	if (event.key === 'Enter' && event.target instanceof HTMLInputElement) {
		event.target.blur();
	}
};

export const isSpace = (event: KeyboardEvent) => event?.key === ' ';
export const isEnter = (event: KeyboardEvent) => event?.key === 'Enter';
export const clickOnEnter = (event: KeyboardEvent) => {
	if (isEnter(event)) {
		// @ts-expect-error - EventTarget doesn't have click?
		event.target?.click?.();
	}
};

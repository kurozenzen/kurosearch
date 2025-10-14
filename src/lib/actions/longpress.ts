import TinyGesture from 'tinygesture';

export function longpress(node: HTMLElement, callback?: () => void) {
	let gesture = new TinyGesture(node);
	let longPressTriggered = false;
	let resetTimeout: ReturnType<typeof setTimeout>;

	const handleClick = (e: MouseEvent) => {
		// Prevent click from firing after a long press
		if (longPressTriggered) {
			e.preventDefault();
			e.stopPropagation();
			e.stopImmediatePropagation();
			// Reset after handling the click
			longPressTriggered = false;
		}
	};

	const handleMouseUp = (e: MouseEvent) => {
		// Prevent mouseup from propagating after a long press
		if (longPressTriggered) {
			e.preventDefault();
			e.stopPropagation();
			e.stopImmediatePropagation();
		}
	};

	const handleTouchEnd = (e: TouchEvent) => {
		// Prevent touchend from propagating after a long press
		if (longPressTriggered) {
			e.preventDefault();
			e.stopPropagation();
			e.stopImmediatePropagation();
			// Schedule reset after click event has had chance to fire
			clearTimeout(resetTimeout);
			resetTimeout = setTimeout(() => {
				longPressTriggered = false;
			}, 400);
		}
	};

	const setup = (cb?: () => void) => {
		if (cb) {
			gesture = new TinyGesture(node, {
				longPressTime: 300
			});
			gesture.on('longpress', () => {
				longPressTriggered = true;
				cb();
				// Don't reset here - wait until touchend/click
			});
			// Use capture phase to intercept events before they reach the component handlers
			node.addEventListener('click', handleClick, { capture: true });
			node.addEventListener('mouseup', handleMouseUp, { capture: true });
			node.addEventListener('touchend', handleTouchEnd, { capture: true, passive: false });
		}
	};

	const teardown = () => {
		if (gesture) {
			gesture.destroy();
		}
		clearTimeout(resetTimeout);
		node.removeEventListener('click', handleClick, { capture: true } as any);
		node.removeEventListener('mouseup', handleMouseUp, { capture: true } as any);
		node.removeEventListener('touchend', handleTouchEnd, { capture: true } as any);
	};

	setup(callback);

	return {
		update(newCallback?: () => void) {
			teardown();
			setup(newCallback);
		},
		destroy: teardown
	};
}

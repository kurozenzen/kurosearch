import TinyGesture from 'tinygesture';

export function longpress(node: HTMLElement, callback?: () => void) {
	let gesture = new TinyGesture(node);
	let longPressTriggered = false;

	const handleClick = (e: MouseEvent) => {
		// Prevent click from firing after a long press
		if (longPressTriggered) {
			e.preventDefault();
			e.stopPropagation();
			e.stopImmediatePropagation();
			longPressTriggered = false;
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
			});
			node.addEventListener('click', handleClick, true);
		}
	};

	const teardown = () => {
		if (gesture) {
			gesture.destroy();
		}
		node.removeEventListener('click', handleClick, true);
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

import TinyGesture from 'tinygesture';

export function longpress(node: HTMLElement, callback?: () => void) {
	let gesture = new TinyGesture(node);

	const setup = (cb?: () => void) => {
		if (cb) {
			gesture = new TinyGesture(node);
			gesture.on('longpress', cb);
		}
	};

	const teardown = () => {
		if (gesture) {
			gesture.destroy();
		}
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
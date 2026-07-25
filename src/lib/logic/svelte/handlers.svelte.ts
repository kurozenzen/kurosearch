export const broadcast =
	(...functions: Array<() => void>) =>
	() =>
		functions.forEach((f) => f());

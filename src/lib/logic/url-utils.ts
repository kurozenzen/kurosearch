export const isValidUrl = (value: string) => {
	try {
		new URL(value);
		return true;
	} catch {
		return false;
	}
};

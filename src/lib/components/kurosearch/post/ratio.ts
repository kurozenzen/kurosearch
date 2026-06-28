export const calculateAspectRatio = (width: number | undefined, height: number | undefined) => {
	if (width && height) {
		return width / height;
	}

	return 1;
};

export const calculateAspectRatioCss = (width: number, height: number) => {
	if (width && height) {
		return `${width} / ${height}`;
	}

	return '1 / 1';
};

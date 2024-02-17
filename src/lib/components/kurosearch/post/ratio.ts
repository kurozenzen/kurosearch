export const calculateAspectRatio = (width: number, height: number) => {
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

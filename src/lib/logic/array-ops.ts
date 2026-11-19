
export const findIndexByName = <T extends { name: string; }>(array: T[], name: string): number => array.findIndex((x) => x.name === name);

export const findItemByName = <T extends { name: string; }>(
	array: T[],
	name: string
): T | undefined => array.find((x) => x.name === name);

export const addOrReplace = <T extends { name: string; }>(array: T[], item: T) => {
	const i = findIndexByName(array, item.name);
	if (i === -1) {
		array.push({ ...item });
	} else {
		array[i] = { ...item };
	}
};

export const removeByName = (array: Array<{ name: string; }>, name: string) => {
	const i = findIndexByName(array, name);
	if (i >= 0 && i < array.length) {
		array.splice(i, 1);
	}
};

export const setByName = <T extends { name: string; }>(array: T[], item: T, name: string) => {
	const i = findIndexByName(array, name);
	if (i === -1) {
		throw new Error('Failed to update Supertag');
	} else {
		array[i] = { ...item };
	}
};

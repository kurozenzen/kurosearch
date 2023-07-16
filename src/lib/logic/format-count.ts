const formatter = Intl.NumberFormat('en', { notation: 'compact' });

export const formatCount = (value: unknown) =>
	typeof value === 'number' ? formatter.format(value) : '-';

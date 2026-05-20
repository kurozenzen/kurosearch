const formatter = Intl.NumberFormat('en', { notation: 'compact' });

export const formatCount = (value: unknown) =>
	typeof value === 'number' ? formatter.format(value) : '-';

export const formatExactCount = (value: unknown) =>
	typeof value === 'number' ? value.toLocaleString('en') : '-';

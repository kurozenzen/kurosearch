const ONE_MINUTE = 60_000;

export const formatCreatedAt = (createdAt: number | string) => {
	if (!isValidDate(createdAt)) {
		throw new TypeError('Invalid createdAt passed to formatCreatedAt');
	}

	const then = new Date(createdAt).getTime() / ONE_MINUTE;
	const now = new Date().getTime() / ONE_MINUTE;

	const minutesAgo = now - then;
	if (minutesAgo < 1) return 'Just now';
	if (minutesAgo < 60) return getAgoString(minutesAgo, 'minute');

	const hoursAgo = minutesAgo / 60;
	if (hoursAgo < 24) return getAgoString(hoursAgo, 'hour');

	const daysAgo = hoursAgo / 24;
	if (daysAgo < 7) return getAgoString(daysAgo, 'day');
	if (daysAgo < 30.5) return getAgoString(daysAgo / 7, 'week');
	if (daysAgo < 365.25) return getAgoString(daysAgo / 30.5, 'month');

	const yearsAgo = daysAgo / 365.25;
	return getAgoString(yearsAgo, 'year');
};

const isValidDate = (value: unknown) => {
	return (
		(typeof value === 'number' || typeof value === 'string') &&
		new Date(value).toString() !== 'Invalid Date'
	);
};

const getAgoString = (amount: number, singular: string) => {
	const fixedAmount = amount.toFixed();
	return `${fixedAmount} ${singular}${fixedAmount === '1' ? '' : 's'} ago`;
};

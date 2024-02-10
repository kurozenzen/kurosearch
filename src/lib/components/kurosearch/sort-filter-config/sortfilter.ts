import { formatCount } from '$lib/logic/format-count';

export const LABELS_SORT: Record<
	kurosearch.SortProperty,
	Record<kurosearch.SortDirection, string>
> = Object.freeze({
	id: {
		asc: 'Oldest',
		desc: 'Newest'
	},
	score: {
		asc: 'Worst',
		desc: 'Best'
	},
	updated: {
		asc: 'Inactive',
		desc: 'Active'
	},
	random: {
		asc: 'Random',
		desc: 'Random'
	}
});

export const LABELS_SCORE_COMPARATOR = Object.freeze({ '>=': '≥', '<=': '≤' });

export const LABELS_RATING = Object.freeze({
	all: 'All',
	safe: 'Safe',
	questionable: 'Questionable',
	explicit: 'Explicit'
});
export const LABELS_SORT_PROPERTY = Object.freeze({
	id: 'Uploaded',
	score: 'Score',
	updated: 'Updated',
	random: 'Random'
});
export const LABELS_SORT_DIRECTION = Object.freeze({
	desc: 'codicon codicon-arrow-down',
	asc: 'codicon codicon-arrow-up'
});

export const getScoreLabel = (score: number, comparator: kurosearch.ScoreComparator) =>
	score === 0 && comparator === '>='
		? undefined
		: `Score ${LABELS_SCORE_COMPARATOR[comparator]} ${formatCount(score)}`;

export const getRatingLabel = (rating: kurosearch.Rating) =>
	rating === 'all' ? undefined : LABELS_RATING[rating];

export const getFilterLabel = (
	rating: kurosearch.Rating,
	scoreValue: number,
	scoreComparator: kurosearch.ScoreComparator
) => {
	let ratingLabel = getRatingLabel(rating);
	let scoreLabel = getScoreLabel(scoreValue, scoreComparator);

	return [ratingLabel, scoreLabel].filter((x) => x !== undefined).join(',') || 'All';
};

export const getSortLabel = (
	property: kurosearch.SortProperty,
	direction: kurosearch.SortDirection
) => LABELS_SORT[property][direction];

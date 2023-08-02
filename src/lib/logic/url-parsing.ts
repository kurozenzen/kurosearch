import { browser } from '$app/environment';
import type { SortFilter } from '$lib/store/sort-filter-store';

export const getSearchParams = () => {
	if (!browser) {
		return {};
	}

	const url = new URL(location.href);
	const tags = getUrlTags(url);
	const sort = getUrlSort(url);
	const filter = getUrlFilter(url);

	return { tags, sort, filter };
};

export const getSearchUrl = (tags: kurosearch.ModifiedTag[], sortFilter: SortFilter) => {
	const url = new URL(location.protocol + '//' + location.host + location.pathname);

	if (tags.length > 0) {
		const tagString = tags.map((t) => t.name).join(';');
		url.searchParams.append('tags', tagString);
	}

	if (sortFilter.sortProperty !== 'id' || sortFilter.sortDirection !== 'desc') {
		const sortString = sortFilter.sortProperty + ':' + sortFilter.sortDirection;
		url.searchParams.append('sort', sortString);
	}

	if (
		sortFilter.rating !== 'all' ||
		sortFilter.scoreComparator !== '>=' ||
		sortFilter.scoreValue !== 0
	) {
		const parts = [];
		if (sortFilter.rating !== 'all') {
			const ratingString = 'rating:' + sortFilter.rating;
			parts.push(ratingString);
		}
		if (sortFilter.scoreComparator !== '>=' || sortFilter.scoreValue !== 0) {
			const scoreString = 'score' + sortFilter.scoreComparator + sortFilter.scoreValue;
			parts.push(scoreString);
		}
		const filterString = parts.join(';');

		url.searchParams.append('filter', filterString);
	}
	return url.toString();
};

const getUrlTags = (url: URL) => {
	if (!url.searchParams.has('tags')) {
		return undefined;
	}

	const tagString = url.searchParams.get('tags') ?? '';
	const tags = tagString.split(';');
	if (!Array.isArray(tags) || tags.length === 0) {
		return undefined;
	}

	return tags;
};

const getUrlSort = (url: URL) => {
	try {
		if (!url.searchParams.has('sort')) {
			return undefined;
		}

		const sortString = url.searchParams.get('sort') ?? '';
		const [property, direction] = sortString.split(':');
		return {
			property: property as kurosearch.SortProperty,
			direction: direction as kurosearch.SortDirection
		};
	} catch {
		console.warn('Invalid sort provided in url');
		return undefined;
	}
};
const getUrlFilter = (url: URL) => {
	try {
		if (!url.searchParams.has('filter')) {
			return undefined;
		}

		const filterString = url.searchParams.get('filter') ?? '';
		const parts = filterString.split(';');

		let filter: Partial<SortFilter> = {};
		parts.forEach((part) => {
			if (part.startsWith('rating:')) {
				const [, rating] = part.split(':');
				if (rating !== 'all') {
					filter.rating = rating as kurosearch.Rating;
				}
			}
			if (part.startsWith('score')) {
				const match = part.match(/score(.*)(\d+)/);
				if (match) {
					const [, comparator, score] = match;
					filter.scoreComparator = comparator as kurosearch.ScoreComparator;

					const scoreNumber = Number(score);
					if (scoreNumber) {
						filter.scoreValue = scoreNumber;
					}
				}
			}
		});

		return filter;
	} catch {
		console.warn('Invalid sort provided in url');
		return undefined;
	}
};

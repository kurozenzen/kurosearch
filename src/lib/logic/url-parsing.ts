import { browser } from '$app/environment';
import type { FilterStoreData } from '$lib/store/filter-store';
import type { SortStoreData } from '$lib/store/sort-store';
import { parseShareTags, serializeShareTags } from './share-utils';

type URLSettings = {
	tags: kurosearch.SearchableTag[];
	sort: SortStoreData;
	filter: Partial<FilterStoreData>;
};

export const parseUrlSettings = (searchParams: URLSearchParams): Partial<URLSettings> => ({
	tags: parseShareTags(searchParams.get('tags') ?? ''),
	sort: parseUrlSort(searchParams),
	filter: parseUrlFilter(searchParams)
});

export const serializeUrlSettings = (urlSettings: Partial<URLSettings>): URLSearchParams => {
	const searchParams = new URLSearchParams();
	const { tags, sort, filter } = urlSettings;

	if (tags && tags.length > 0) {
		searchParams.append('tags', serializeShareTags(tags));
	}

	if (sort && (sort.property !== 'id' || sort?.direction !== 'desc')) {
		searchParams.append('sort', serializeUrlSort(sort));
	}

	if (
		filter &&
		(filter.rating !== 'all' || filter.scoreComparator !== '>=' || filter.scoreValue !== 0)
	) {
		searchParams.append('filter', serializeUrlFilter(filter));
	}

	return searchParams;
};

const serializeUrlSort = (sort: SortStoreData) => sort.property + ':' + sort.direction;
const serializeUrlFilter = (filter: Partial<FilterStoreData>) => {
	const parts = [];
	if (filter.rating !== 'all') {
		const ratingString = 'rating:' + filter.rating;
		parts.push(ratingString);
	}
	if (filter.scoreComparator !== '>=' || filter.scoreValue !== 0) {
		const scoreString = 'score' + filter.scoreComparator + filter.scoreValue;
		parts.push(scoreString);
	}
	return parts.join(';');
};

const parseUrlTags = (searchParams: URLSearchParams) => {
	if (!searchParams.has('tags')) {
		return [];
	}

	const tagString = searchParams.get('tags') ?? '';
	const tags = tagString.split(';');
	if (!Array.isArray(tags) || tags.length === 0) {
		return [];
	}

	return tags;
};

const parseUrlSort = (searchParams: URLSearchParams) => {
	try {
		if (!searchParams.has('sort')) {
			return undefined;
		}

		const sortString = searchParams.get('sort') ?? '';
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

const parseUrlFilter = (searchParams: URLSearchParams) => {
	try {
		if (!searchParams.has('filter')) {
			return undefined;
		}

		const filterString = searchParams.get('filter') ?? '';
		const parts = filterString.split(';');

		let filter: Partial<FilterStoreData> = {};
		parts.forEach((part) => {
			if (part.startsWith('rating:')) {
				const [, rating] = part.split(':');
				if (rating !== 'all') {
					filter.rating = rating as kurosearch.Rating;
				}
			}
			if (part.startsWith('score')) {
				const match = part.match(/score(..)(\d+)/);
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

export const getShareUrl = (
	tags: kurosearch.ModifiedTag[],
	sort: SortStoreData,
	filter: FilterStoreData
) => {
	if (!browser) {
		return '';
	}

	const url = new URL(location.protocol + '//' + location.host + '/share');
	const searchParams = serializeUrlSettings({
		tags,
		sort,
		filter
	});
	searchParams.forEach((value, key) => {
		url.searchParams.set(key, value);
	});

	return url;
};

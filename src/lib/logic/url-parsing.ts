import { browser } from '$app/environment';
import { type FilterData, type SortData } from '$lib/store';
import {
	parseShareTags,
	serializeShareTags,
	serializeShareSupertags,
	parseShareSupertags
} from './share-utils';

type URLSettings = {
	tags: kurosearch.SearchableTag[];
	supertags: kurosearch.Supertag[];
	sort: SortData;
	filter: Partial<FilterData>;
};

export const parseUrlSettings = (searchParams: URLSearchParams): Partial<URLSettings> => ({
	tags: parseShareTags(searchParams.get('tags') ?? ''),
	supertags: parseShareSupertags(searchParams.get('supertags') ?? ''),
	sort: parseUrlSort(searchParams),
	filter: parseUrlFilter(searchParams)
});

export const serializeUrlSettings = (urlSettings: Partial<URLSettings>): URLSearchParams => {
	const searchParams = new URLSearchParams();
	const { tags, supertags, sort, filter } = urlSettings;

	if (tags && tags.length > 0) {
		searchParams.append('tags', serializeShareTags(tags));
	}

	if (supertags && supertags.length) {
		searchParams.append('supertags', serializeShareSupertags(supertags));
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

const serializeUrlSort = (sort: SortData) => sort.property + ':' + sort.direction;
const serializeUrlFilter = (filter: Partial<FilterData>) => {
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

		let filter: Partial<FilterData> = {};
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
	supertags: kurosearch.Supertag[],
	sort: SortData,
	filter: FilterData
) => {
	if (!browser) {
		return '';
	}

	const url = new URL(location.protocol + '//' + location.host + '/share');
	const searchParams = serializeUrlSettings({
		tags,
		supertags,
		sort,
		filter
	});
	searchParams.forEach((value, key) => {
		url.searchParams.set(key, value);
	});

	return url;
};

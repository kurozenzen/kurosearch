import { getPage, getCount } from './api-client/ApiClient';
import { getPostsUrl } from './api-client/posts/posts';
import { BLOCKING_GROUP_TAGS } from './blocking-group-data';

class SearchBuilder {
	pid: number;
	tags: kurosearch.ActiveTag[];
	supertags: kurosearch.Supertag[];
	blockedContent: kurosearch.BlockingGroup[];
	sortProperty: kurosearch.SortProperty;
	sortDirection: kurosearch.SortDirection;
	scoreValue: number;
	rating: kurosearch.Rating;
	scoreComparator: kurosearch.ScoreComparator;

	// cached for performance
	tagString: string | undefined;

	constructor() {
		this.pid = 0;
		this.tags = [];
		this.supertags = [];
		this.blockedContent = [];
		this.sortProperty = 'id';
		this.sortDirection = 'desc';
		this.scoreValue = 0;
		this.rating = 'all';
		this.scoreComparator = '>=';
	}

	withPid(pid: number) {
		this.pid = pid;
		return this;
	}

	withTags(tags: kurosearch.ActiveTag[]) {
		this.tags = tags;
		return this;
	}

	withSupertags(supertags: kurosearch.Supertag[]) {
		this.supertags = supertags;
		return this;
	}

	withSortProperty(sortProperty: kurosearch.SortProperty) {
		this.sortProperty = sortProperty;
		return this;
	}

	withSortDirection(sortDirection: kurosearch.SortDirection) {
		this.sortDirection = sortDirection;
		return this;
	}

	withScoreValue(scoreValue: number) {
		this.scoreValue = scoreValue;
		return this;
	}

	withScoreComparator(scoreComparator: kurosearch.ScoreComparator) {
		this.scoreComparator = scoreComparator;
		return this;
	}

	withRating(rating: kurosearch.Rating) {
		this.rating = rating;
		return this;
	}

	withBlockedContent(blockedContent: Record<kurosearch.BlockingGroup, boolean>) {
		this.blockedContent = Object.entries(blockedContent)
			.filter(([_, value]) => value)
			.map(([key, _]) => key as kurosearch.BlockingGroup);
		return this;
	}

	async getPageAndCount() {
		this.tagString = serializeAllTags(
			this.tags,
			this.sortProperty,
			this.sortDirection,
			this.scoreValue,
			this.rating,
			this.scoreComparator,
			this.blockedContent,
			this.supertags
		);
		return Promise.all([this.getPage(), this.getCount()]);
	}

	async getPage() {
		this.tagString ||= serializeAllTags(
			this.tags,
			this.sortProperty,
			this.sortDirection,
			this.scoreValue,
			this.rating,
			this.scoreComparator,
			this.blockedContent,
			this.supertags
		);
		return getPage(this.pid, this.tagString);
	}

	async getCount() {
		this.tagString ||= serializeAllTags(
			this.tags,
			this.sortProperty,
			this.sortDirection,
			this.scoreValue,
			this.rating,
			this.scoreComparator,
			this.blockedContent,
			this.supertags
		);
		return getCount(this.tagString);
	}

	getQuery() {
		this.tagString ||= serializeAllTags(
			this.tags,
			this.sortProperty,
			this.sortDirection,
			this.scoreValue,
			this.rating,
			this.scoreComparator,
			this.blockedContent,
			this.supertags
		);
		return getPostsUrl(0, this.tagString);
	}
}

export const createSearch = () => {
	return new SearchBuilder();
};

const serializeAllTags = (
	tags: kurosearch.ActiveTag[],
	sortProperty: kurosearch.SortProperty,
	sortDirection: kurosearch.SortDirection,
	scoreValue: number,
	rating: kurosearch.Rating,
	scoreComparator: kurosearch.ScoreComparator,
	blockedContent: kurosearch.BlockingGroup[],
	supertags: kurosearch.Supertag[]
) => {
	const parts = [`score:${scoreComparator}${scoreValue}`, `sort:${sortProperty}:${sortDirection}`];

	if (rating !== 'all') {
		parts.push(`rating:${rating}`);
	}

	if (tags.length > 0) {
		const activeTagString = serializeSearchableTags(
			tags.map(({ name, modifier }) => ({ name, modifier }))
		);
		parts.push(activeTagString);
	}

	if (supertags.length > 0) {
		const supertagString = supertags
			.map((supertag) => serializeSearchableTags(supertag.tags))
			.join('+');
		parts.push(supertagString);
	}

	if (blockedContent.length > 0) {
		const blockedTags: kurosearch.SearchableTag[] = blockedContent
			.flatMap((groupName) => BLOCKING_GROUP_TAGS[groupName])
			.map((name) => ({ modifier: '-', name }));
		const blockedString = serializeSearchableTags(blockedTags);

		parts.push(blockedString);
	}

	const result = parts.join('+');

	return result;
};

const serializeSearchableTags = (tags: kurosearch.SearchableTag[]) => {
	const tagsByModifier = partitionTagsByModifier(tags);
	let parts = [...serializeTags([...tagsByModifier['+'], ...tagsByModifier['-']])];

	if (tagsByModifier['~'].length > 0) {
		parts.push(`( ${serializeTags(tagsByModifier['~']).join(' ~ ')} )`);
	}

	return parts.join('+');
};

const partitionTagsByModifier = (tags: kurosearch.SearchableTag[]) => {
	const partitions: Record<kurosearch.TagModifier, kurosearch.SearchableTag[]> = {
		'+': [],
		'-': [],
		'~': []
	};

	tags.forEach((t) => partitions[t.modifier].push(t));

	return partitions;
};

const serializeModifier = (value: kurosearch.TagModifier) => {
	return value === '-' ? '-' : '';
};

const serializeSearchableTag = (tag: kurosearch.SearchableTag) => {
	return `${serializeModifier(tag.modifier)}${encodeURIComponent(tag.name.replaceAll(' ', '_'))}`;
};

const serializeTags = (tags: kurosearch.SearchableTag[]) => tags.map(serializeSearchableTag);

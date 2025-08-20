import { getPage, getCount, getPostsUrl } from './api-client/ApiClient';
import { serializeSearch } from './tag-serialization';

export class SearchBuilder {
	pid: number;
	tags: kurosearch.ModifiedTag[];
	supertags: kurosearch.Supertag[];
	blockedContent: kurosearch.BlockingGroup[];
	sortProperty: kurosearch.SortProperty;
	sortDirection: kurosearch.SortDirection;
	scoreValue: number;
	rating: kurosearch.Rating;
	scoreComparator: kurosearch.ScoreComparator;

	// cached for performance
	tagString: string | undefined;

	// user
	apiKey: string;
	userId: string;

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
		this.apiKey = '';
		this.userId = '';
	}

	withPid(pid: number) {
		this.pid = pid;
		return this;
	}

	withTags(tags: kurosearch.ModifiedTag[]) {
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

	withApiKey(apiKey: string) {
		this.apiKey = apiKey || '';
		return this;
	}

	withUserId(userId: string) {
		this.userId = userId || '';
		return this;
	}

	async getPageAndCount() {
		this.tagString = serializeSearch(
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
		this.tagString ||= serializeSearch(
			this.tags,
			this.sortProperty,
			this.sortDirection,
			this.scoreValue,
			this.rating,
			this.scoreComparator,
			this.blockedContent,
			this.supertags
		);
		return getPage(this.pid, this.tagString, this.apiKey, this.userId);
	}

	async getCount() {
		this.tagString ||= serializeSearch(
			this.tags,
			this.sortProperty,
			this.sortDirection,
			this.scoreValue,
			this.rating,
			this.scoreComparator,
			this.blockedContent,
			this.supertags
		);
		return getCount(this.tagString, this.apiKey, this.userId);
	}

	getQuery() {
		this.tagString ||= serializeSearch(
			this.tags,
			this.sortProperty,
			this.sortDirection,
			this.scoreValue,
			this.rating,
			this.scoreComparator,
			this.blockedContent,
			this.supertags
		);
		return getPostsUrl(0, this.tagString, this.apiKey, this.userId);
	}
}

<script lang="ts">
	import { browser } from '$app/environment';
	import activeTagsStore from '$lib/store/active-tags-store';
	import sortStore from '$lib/store/sort-store';
	import filterStore from '$lib/store/filter-store';
	import { parseUrlSettings } from '$lib/logic/url-parsing';
	import { SearchBuilder } from '$lib/logic/search-builder';
	import activeSupertags from '$lib/store/active-supertags-store';
	import activeTags from '$lib/store/active-tags-store';
	import blockedContent from '$lib/store/blocked-content-store';
	import filter from '$lib/store/filter-store';
	import results from '$lib/store/results-store';
	import sort from '$lib/store/sort-store';

	const applyUrlSearchParamsToStore = async () => {
		if (!browser) {
			return;
		}

		activeTagsStore.reset();
		sortStore.reset();
		filterStore.reset();

		let result = false;
		const { tags, sort, filter } = parseUrlSettings(new URL(location.href).searchParams);
		if (tags && tags.length > 0) {
			await Promise.all(
				tags.map(async (tag) => await activeTagsStore.addByName(tag.name, tag.modifier))
			);
			result = true;
		}

		if (sort) {
			sortStore.update(sort);
			result = true;
		}

		if (filter) {
			filterStore.update(filter);
			result = true;
		}

		return result;
	};

	const getFirstPage = async () => {
		if (browser) {
			try {
				results.reset();
				const [page, count] = await new SearchBuilder()
					.withPid(0)
					.withTags($activeTags)
					.withBlockedContent($blockedContent)
					.withSortProperty($sort.property)
					.withSortDirection($sort.direction)
					.withScoreValue($filter.scoreValue)
					.withScoreComparator($filter.scoreComparator)
					.withRating($filter.rating)
					.withSupertags($activeSupertags)
					.getPageAndCount();
				results.addPage(page, count);
			} catch (e) {
				console.warn(e);
			}
		}
	};

	const goToSearch = () => {
		if (browser) {
			location.href = '/';
		}
	};

	applyUrlSearchParamsToStore()
		.then(() => getFirstPage())
		.then(() => goToSearch());
</script>

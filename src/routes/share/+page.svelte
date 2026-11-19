<script lang="ts">
	import { browser } from '$app/environment';
	import { parseUrlSettings } from '$lib/logic/url-parsing';
	import {
		activeSupertags as activeSupertagsState,
		activeTags,
		activeTags as activeTagsState,
		addPage,
		createTagFromName,
		filter as filterState,
		results,
		sort as sortState,
	} from '$lib/store';
	import { addOrReplace } from '$lib/logic/array-ops';
	import { createDefaultSearch } from '$lib/logic/search.svelte';

	const applyUrlSearchParamsToStore = async () => {
		if (!browser) {
			return;
		}

		activeTagsState.reset();
		activeSupertagsState.reset();
		filterState.reset();
		sortState.reset();

		let result = false;
		const { tags, sort, filter } = parseUrlSettings(new URL(location.href).searchParams);
		if (tags && tags.length > 0) {
			await Promise.all(
				tags.map(async (tag) =>
					addOrReplace(activeTags.value, await createTagFromName(tag.name, tag.modifier))
				)
			);
			result = true;
		}

		if (sort) {
			Object.assign(sortState, sort);
			result = true;
		}

		if (filter) {
			Object.assign(filterState, filter);
			result = true;
		}

		return result;
	};

	const getFirstPage = async () => {
		if (browser) {
			try {
				results.reset();
				const [page, count] = await createDefaultSearch().getPageAndCount();
				addPage(results.value, page, count);
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

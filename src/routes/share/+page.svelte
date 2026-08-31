<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import activeTagsStore from '$lib/store/active-tags-store';
	import sortStore from '$lib/store/sort-store';
	import filterStore from '$lib/store/filter-store';
	import { parseUrlSettings } from '$lib/logic/url-parsing';
	import results from '$lib/store/results-store';

	const applyUrlSearchParamsToStore = () => {
		if (!browser) {
			return false;
		}

		activeTagsStore.reset();
		sortStore.reset();
		filterStore.reset();

		let result = false;
		const { tags, sort, filter } = parseUrlSettings(new URL(location.href).searchParams);
		if (tags && tags.length > 0) {
			tags.forEach((tag) => {
				activeTagsStore.addOrReplace({
					name: tag.name,
					modifier: tag.modifier,
					count: 0,
					type: 'tag'
				});
			});
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

	const goToSearch = () => {
		if (browser) {
			goto('/');
		}
	};

	if (browser) {
		applyUrlSearchParamsToStore();
		results.reset();
		goToSearch();
	}
</script>

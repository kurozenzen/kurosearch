<script lang="ts" module>
	const getRoutes = () => {
		const modules = import.meta.glob('/src/routes/**/+page.svelte');
		const routes = Object.keys(modules).map((filePath) => {
			let route = filePath.replace('/src/routes', '').replace('/+page.svelte', '');
			route = route.replace(/\/\([^)]+\)/g, '');

			return route === '' ? '/' : route;
		});

		return routes;
	};

	const ROUTES = getRoutes();
</script>

<script lang="ts">
	import PageGeneric from '#lib/components/pure/page-generic/PageGeneric.svelte';
	import Version from '#lib/components/kurosearch/about-version/Version.svelte';
	import SectionH3 from '#lib/components/kurosearch/section-docs/SectionH3.svelte';
</script>

<svelte:head>
	<title>kurosearch - About</title>
	<meta name="description" content="Further information about the website can be found here." />
</svelte:head>

<PageGeneric title="About">
	<SectionH3 title="Version">
		<Version />
	</SectionH3>

	<SectionH3 title="Routes">
		<ul>
			{#each ROUTES as route}
				<li>
					<a href={route}>
						{route}
					</a>
				</li>
			{/each}
		</ul>
	</SectionH3>
</PageGeneric>

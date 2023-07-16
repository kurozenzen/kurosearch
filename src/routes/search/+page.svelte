<script lang="ts">
	import { browser } from '$app/environment';
	import { base } from '$app/paths';

	if (browser) {
		location.href = `${base}/`;
	}
</script>

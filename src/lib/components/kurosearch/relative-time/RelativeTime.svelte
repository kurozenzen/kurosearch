<script lang="ts">
	import { formatCreatedAt } from '#lib/logic/format-relative-time';

	interface Props {
		value: number | string;
	}

	let { value }: Props = $props();
</script>

<time datetime={new Date(value).toISOString()} class="mixin-icon-text codicon codicon-calendar">
	{formatCreatedAt(value)}
</time>

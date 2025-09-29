<script lang="ts">
	import { browser } from '$app/environment';
	import { onDestroy, onMount } from 'svelte';
	import IconButton from '../IconButton.svelte';
	import type { IconButtonProps } from '$lib/components/pure/button/IconButton.svelte';

	export interface ScrollUpButtonProps extends IconButtonProps {}

	let {
		variant = 'primary',
		icon = 'arrow-up',
		'aria-label': ariaLabel = 'back to top',
		class: className = '',
		...rest
	}: ScrollUpButtonProps = $props();

	let previousY = $state(0);
	let visible = $state(false);

	const listener = () => {
		const currentY = window.scrollY;
		visible = currentY < previousY && currentY > 0;
		previousY = currentY;
	};

	onMount(() => {
		if (browser) document.addEventListener('scroll', listener, { passive: true });
	});

	onDestroy(() => {
		if (browser) document.removeEventListener('scroll', listener);
	});

	let scrollUpClass = $derived(() => {
		let classes = ['scroll-up-button'];
		if (visible) classes.push('visible');
		if (className) {
			const classValue = Array.isArray(className) ? className.join(' ') : String(className);
			classes.push(classValue);
		}
		return classes.join(' ');
	});
</script>

<IconButton
	{icon}
	{variant}
	aria-label={ariaLabel}
	class={scrollUpClass()}
	onclick={() => window.scrollTo(0, 0)}
	{...rest}
/>

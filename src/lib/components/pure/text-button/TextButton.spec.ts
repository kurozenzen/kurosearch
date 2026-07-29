import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/svelte';
import { createRawSnippet } from 'svelte';
import TextButton from '$lib/components/pure/text-button/TextButton.svelte';

const textSnippet = createRawSnippet(() => ({
	render: () => `<span>Button text</span>`,
	setup: () => {}
}));

describe('TextButton', () => {
	const TITLE = 'Test Title';

	it('renders props correctly', () => {
		render(TextButton, {
			title: TITLE,
			onclick: vi.fn(),
			class: 'mixin-accent',
			children: textSnippet
		});

		const button: HTMLButtonElement = screen.getByRole('button');
		expect(button).toBeDefined();
		expect(button.title).toBe(TITLE);
	});

	it('is clickable', async () => {
		const click = vi.fn();
		render(TextButton, {
			title: TITLE,
			onclick: click,
			class: 'mixin-accent',
			children: textSnippet
		});

		const button: HTMLButtonElement = screen.getByRole('button');
		await fireEvent.click(button);
		expect(click).toHaveBeenCalledOnce();
	});

	it('can be disabled', async () => {
		render(TextButton, {
			title: TITLE,
			disabled: true,
			onclick: vi.fn(),
			class: 'mixin-accent',
			children: textSnippet
		});

		const button: HTMLButtonElement = screen.getByRole('button');
		expect(button.disabled).toBe(true);
	});
});

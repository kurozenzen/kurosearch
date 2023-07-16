import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/svelte';
import TextButton from '$lib/components/pure/text-button/TextButton.svelte';

describe('TextButton', () => {
	const TITLE = 'Test Title';

	it('renders props correctly', () => {
		render(TextButton, { title: TITLE });

		const button: HTMLButtonElement = screen.getByRole('button');
		expect(button).toBeDefined();
		expect(button.textContent).toBe('');
		expect(button.title).toBe(TITLE);
	});

	it('is clickable', async () => {
		const click = vi.fn();
		const { component } = render(TextButton, { title: TITLE });
		component.$on(`click`, click);

		const button: HTMLButtonElement = screen.getByRole('button');
		await fireEvent.click(button);
		expect(click).toHaveBeenCalledOnce();
	});

	it('can be disabled', async () => {
		render(TextButton, { title: TITLE, disabled: true });

		const button: HTMLButtonElement = screen.getByRole('button');
		expect(button.disabled).toBe(true);
	});
});

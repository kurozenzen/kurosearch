import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/svelte';
import Checkbox from './Checkbox.svelte';

describe('Checkbox', () => {
	it('renders props correctly', () => {
		render(Checkbox, { checked: true, id: 'test-checkbox' });

		const checkbox: HTMLInputElement = screen.getByRole('checkbox');
		expect(checkbox).toBeDefined();
		expect(checkbox.checked).toBe(true);
	});

	it('is clickable', async () => {
		const change = vi.fn();
		const { component } = render(Checkbox, { checked: true, id: 'test-checkbox' });
		component.$on(`change`, change);

		const checkbox: HTMLInputElement = screen.getByRole('checkbox');
		await fireEvent.click(checkbox);
		expect(checkbox.checked).toBe(false);
	});
});

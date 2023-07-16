import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/svelte';
import RotatingIconSelect from './RotatingIconSelect.svelte';

describe('RotatingIconSelect', () => {
	it('rotates', async () => {
		render(RotatingIconSelect, {
			options: {
				one: 'codicon codicon-tag',
				two: 'codicon codicon-person',
				three: 'codicon codicon-search'
			},
			value: 'one'
		});

		const button: HTMLButtonElement = screen.getByRole('button');
		expect(button).toBeDefined();
		expect(button.className).toMatch(/codicon codicon-tag/);
		await fireEvent.click(button);
		expect(button.className).toMatch(/codicon codicon-person/);
		await fireEvent.click(button);
		expect(button.className).toMatch(/codicon codicon-search/);
		await fireEvent.click(button);
		expect(button.className).toMatch(/codicon codicon-tag/);
	});
});

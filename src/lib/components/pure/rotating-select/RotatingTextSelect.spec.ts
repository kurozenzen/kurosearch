import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/svelte';
import RotatingTextSelect from './RotatingTextSelect.svelte';

describe('RotatingTextSelect', () => {
	it('rotates', async () => {
		render(RotatingTextSelect, {
			options: {
				one: 'ONE',
				two: 'TWO',
				three: 'THREE'
			},
			value: 'one'
		});

		const button: HTMLButtonElement = screen.getByRole('button');
		expect(button).toBeDefined();
		expect(button.textContent).toBe('ONE');
		await fireEvent.click(button);
		expect(button.textContent).toBe('TWO');
		await fireEvent.click(button);
		expect(button.textContent).toBe('THREE');
		await fireEvent.click(button);
		expect(button.textContent).toBe('ONE');
	});
});

import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/svelte';
import RotatingTextSelect from '$lib/components/pure/rotating-select/RotatingTextSelect.svelte';

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
		expect(button.textContent?.trim()).toBe('ONE');
		await fireEvent.click(button);
		expect(button.textContent?.trim()).toBe('TWO');
		await fireEvent.click(button);
		expect(button.textContent?.trim()).toBe('THREE');
		await fireEvent.click(button);
		expect(button.textContent?.trim()).toBe('ONE');
	});
});

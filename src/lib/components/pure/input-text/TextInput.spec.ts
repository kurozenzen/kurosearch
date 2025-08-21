import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import TextInput from './TextInput.svelte';

describe('TextInput', () => {
	const PLACEHOLDER = 'Placeholder';
	const VALUE = 'Value';
	it('renders props correctly', () => {
		render(TextInput, { placeholder: PLACEHOLDER, value: VALUE });

		const textbox: HTMLInputElement = screen.getByRole('textbox');
		expect(textbox).toBeDefined();
		expect(textbox.placeholder).toBe(PLACEHOLDER);
		expect(textbox.value).toBe(VALUE);
		expect(textbox.autocomplete).toBe('off');
	});
});

import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/svelte';
import DetailedTag from './DetailedTag.svelte';

describe('DetailedTag', () => {
	it('renders correctly without icon', () => {
		render(DetailedTag, { tag: { name: 'my_tag', count: 10, modifier: '+', type: 'ambiguous' } });

		const tag: HTMLButtonElement = screen.getByRole('button');
		expect(tag).toBeDefined();
		expect(tag.textContent).toBe('my tag (10)');
		expect(tag.className).toMatch(/no-icon/);
	});

	it('renders correctly with icon', () => {
		render(DetailedTag, { tag: { name: 'my_tag', count: 10, modifier: '+', type: 'supertag' } });

		const tag: HTMLButtonElement = screen.getByRole('button');
		expect(tag).toBeDefined();
		expect(tag.textContent).toBe('my tag (10)');
		expect(tag.className).toMatch(/codicon-star-full/);
	});

	it('renders correctly when active', () => {
		render(DetailedTag, {
			tag: { name: 'my_tag', count: 10, modifier: '+', type: 'ambiguous' },
			active: true
		});

		const tag: HTMLButtonElement = screen.getByRole('button');
		expect(tag).toBeDefined();
		expect(tag.textContent).toBe('my tag (10)');
		expect(tag.className).toMatch(/active/);
	});

	it('is clickable', async () => {
		const click = vi.fn();
		const contextMenu = vi.fn();
		const { component } = render(DetailedTag, {
			tag: { name: 'my_tag', count: 10, modifier: '+', type: 'ambiguous' }
		});
		component.$on(`click`, click);
		component.$on(`contextmenu`, contextMenu);

		const tag: HTMLButtonElement = screen.getByRole('button');
		await fireEvent.click(tag);
		expect(click).toHaveBeenCalled();
		await fireEvent.contextMenu(tag);
		expect(contextMenu).toHaveBeenCalled();
	});
});

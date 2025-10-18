import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/svelte';
import InstancesPage from '$routes/instances/+page.svelte';

vi.mock('$env/dynamic/public', () => ({
	env: {
		PUBLIC_APP_NAME: 'flur34',
		PUBLIC_SOURCE_CODE_URL: 'https://github.com/flur34/flur34',
		PUBLIC_DISCORD_URL: 'https://discord.gg/AxUnC7n9ZP',
		PUBLIC_SPONSOR_URL: 'https://ko-fi.com/flurbudurbur'
	}
}));

// Provide a minimal Web Animations API shim for jsdom
if (!(Element.prototype as any).animate) {
	Object.defineProperty(Element.prototype, 'animate', {
		value: () => ({
			onfinish: null,
			cancel: vi.fn(),
			addEventListener: vi.fn(),
			removeEventListener: vi.fn()
		}),
		configurable: true
	});
}

// Mock the raw TOML import from project root
vi.mock('/instances.toml?raw', () => ({
	default: `
[[instance]]
name = "Alpha"
url = "https://alpha.example"
country = "AA"
description = "alpha instance"
source = "https://github.com/example/alpha"
[instance.details]
version = "1.2.3"
last_check = 1700000000 # seconds, should become ms
uptime = 99

[[instance]]
name = "Beta"
url = "https://beta.example"
country = "BB"
description = "beta instance"
# no details -> defaults: version N/A, last_check 0 -> N/A, uptime 0
`
}));

describe('routes/instances +page', () => {
	it('renders instances parsed from TOML and shows defaults for missing details', async () => {
		const { container } = render(InstancesPage);

		// Heading is present
		expect(screen.getByText('Public instances')).toBeTruthy();

		// Two instance groups rendered (from two entries)
		const groups = container.querySelectorAll('tbody.instance-group');
		expect(groups.length).toBe(2);

		// Expand the second (missing details) and assert defaults shown
		const secondRow = groups[1].querySelector('tr[role="button"]');
		await fireEvent.click(secondRow!);
		expect(await screen.findByText('Version:')).toBeTruthy();
		const naEls = await screen.findAllByText('N/A');
		expect(naEls.length).toBeGreaterThan(0); // version fallback present
		expect(await screen.findByText('0%')).toBeTruthy(); // uptime fallback

		// Expand the first and assert provided version appears
		const firstRow = groups[0].querySelector('tr[role="button"]');
		await fireEvent.click(firstRow!);
		expect(await screen.findAllByText('Version:')).toBeTruthy();
		expect(screen.getByText('1.2.3')).toBeTruthy();
	});
});

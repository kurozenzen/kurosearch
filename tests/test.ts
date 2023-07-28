import { expect, test } from '@playwright/test';

// const indexPage = 'https://kurosearch.com';
const indexPage = '/';

test('index page has expected title', async ({ page }) => {
	await page.goto(indexPage);
	await expect(page).toHaveTitle('kurosearch');
});

test('index page has expected links in header and footer', async ({ page }) => {
	await page.goto(indexPage);

	await expect(page.getByTitle('Sponsor')).toHaveAttribute('href', 'https://ko-fi.com/kurozenzen');
	await expect(page.getByTitle('Discord Server')).toHaveAttribute(
		'href',
		'https://discord.gg/yyJFG5PVBZ'
	);
	await expect(page.getByTitle('Documentation')).toHaveAttribute('href', '/help');
	await expect(page.getByTitle('Search', { exact: true })).toHaveAttribute('href', '/');
	await expect(page.getByTitle('Settings')).toHaveAttribute('href', '/preferences');
	await expect(page.getByTitle('Account')).toHaveAttribute('href', '/account');
	await expect(page.getByTitle('Source Code')).toHaveAttribute(
		'href',
		'https://github.com/kurozenzen/kurosearch'
	);
	await expect(page.getByTitle('About')).toHaveAttribute('href', '/about');
});

// test('adding tag works', async ({ page }) => {
// 	await page.goto(indexPage);

// 	const modifier = page.getByTestId('select-modifier');
// 	const searchbar = page.getByTestId('searchbar');

// 	expect(searchbar.innerText).toBe('');
// });

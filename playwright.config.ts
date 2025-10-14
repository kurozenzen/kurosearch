import { defineConfig, devices } from '@playwright/test';

// @ts-ignore
export default defineConfig({
	webServer: {
		command: 'pnpm run dev',
		port: 5173,
		timeout: 120 * 1000,
		reuseExistingServer: !process.env.CI
	},
	testDir: 'tests/integration',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/,
	use: {
		headless: true,
		viewport: { width: 1280, height: 720 }
	},
	projects: [
		{
			name: 'chromium',
			use: {
				...devices['Desktop Chrome'],
				launchOptions: {
					args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
				}
			}
		},
		{
			name: 'firefox',
			use: { ...devices['Desktop Firefox'] }
		},
		{
			name: 'webkit',
			use: { ...devices['Desktop Safari'] }
		}
	],
	timeout: 60 * 1000,
	expect: {
		timeout: 30 * 1000
	}
});

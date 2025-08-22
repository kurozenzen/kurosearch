import { sequence } from '@sveltejs/kit/hooks';
import { handleErrorWithSentry, sentryHandle } from '@sentry/sveltekit';
import * as Sentry from '@sentry/sveltekit';

Sentry.init({
	dsn: 'https://21b348fd524f0146bb18944e30d77b3d@o955708.ingest.us.sentry.io/4509889578270720',
	tracesSampleRate: 1.0,
	enableLogs: true
});

export const handle = sequence(sentryHandle());
export const handleError = handleErrorWithSentry();

import { handleErrorWithSentry } from '@sentry/sveltekit';
import * as Sentry from '@sentry/sveltekit';
import type { ClientInit } from '@sveltejs/kit';
import { initIdb } from '$lib/indexeddb/idb';
import '$lib/logic/firebase/firebase';

Sentry.init({
	dsn: 'https://21b348fd524f0146bb18944e30d77b3d@o955708.ingest.us.sentry.io/4509889578270720',
	tracesSampleRate: 0.1,
	enableLogs: true
});

export const handleError = handleErrorWithSentry();

export const init: ClientInit = async () => {
	await initIdb();
};

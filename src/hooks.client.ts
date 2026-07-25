import { handleErrorWithSentry } from '@sentry/sveltekit';
import * as Sentry from '@sentry/sveltekit';
import type { ClientInit } from '@sveltejs/kit';
import { initIdb } from '$lib/indexeddb/idb';
import '$lib/logic/firebase/firebase';

Sentry.init({
	dsn: 'https://21b348fd524f0146bb18944e30d77b3d@o955708.ingest.us.sentry.io/4509889578270720',
	tracesSampleRate: 0.1,
	enableLogs: true,
	beforeSendTransaction(event) {
		if (event.contexts?.trace?.op === 'n_plus_one_api_calls') {
			return null; // Discards the transaction event entirely
		}
		return event;
	}
});

export const handleError = handleErrorWithSentry();

export const init: ClientInit = async () => {
	console.log(
		'%ckurosearch\n%cHi, if you are reading this because you are debugging or reverse-engineering, feel free to send me a DM on Discord :)',
		'color:crimson;font-size:32px;',
		'color:unset;font-size:auto;'
	);

	await initIdb();
};

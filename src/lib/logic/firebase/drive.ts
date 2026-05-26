import { browser } from '$app/environment';
import { getAuth } from 'firebase/auth';

const DRIVE_DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest';
const GAPI_SCRIPT_SRC = 'https://apis.google.com/js/api.js';
const GOOGLE_IDENTITY_SCRIPT_SRC = 'https://accounts.google.com/gsi/client';

let setupPromise: Promise<void> | undefined;
let gapiScriptPromise: Promise<void> | undefined;
let googleIdentityScriptPromise: Promise<void> | undefined;

declare global {
	interface Window {
		gapi?: any;
		google?: any;
	}
}

const hasGoogleProvider = () => {
	const user = getAuth().currentUser;
	return user?.providerData.some((provider) => provider.providerId === 'google.com') ?? false;
};

const loadGapiScript = async () => {
	if (!browser) {
		return;
	}

	if (window.gapi) {
		return;
	}

	if (!gapiScriptPromise) {
		gapiScriptPromise = new Promise<void>((resolve, reject) => {
			const script = document.createElement('script');
			script.src = GAPI_SCRIPT_SRC;
			script.async = true;
			script.defer = true;
			script.addEventListener('load', () => resolve());
			script.addEventListener('error', () => reject(new Error('Failed to load Google API script')));
			document.head.appendChild(script);
		});
	}

	await gapiScriptPromise;
};

const loadGoogleIdentityScript = async () => {
	if (!browser) {
		return;
	}

	if (window.google?.accounts?.oauth2) {
		return;
	}

	if (!googleIdentityScriptPromise) {
		googleIdentityScriptPromise = new Promise<void>((resolve, reject) => {
			const script = document.createElement('script');
			script.src = GOOGLE_IDENTITY_SCRIPT_SRC;
			script.async = true;
			script.defer = true;
			script.addEventListener('load', () => resolve());
			script.addEventListener('error', () => reject(new Error('Failed to load Google Identity Services script')));
			document.head.appendChild(script);
		});
	}

	await googleIdentityScriptPromise;
};

export const getGapi = async () => {
	if (!browser) {
		throw new Error('Google API is only available in the browser.');
	}

	await loadGapiScript();

	if (!window.gapi) {
		throw new Error('Google API client was not found after loading script.');
	}

	return window.gapi;
};

export const getGoogleAccounts = async () => {
	if (!browser) {
		throw new Error('Google Identity Services is only available in the browser.');
	}

	await loadGoogleIdentityScript();

	if (!window.google?.accounts?.oauth2) {
		throw new Error('Google Identity Services was not found after loading script.');
	}

	return window.google.accounts;
};

export const setupGoogleDriveAtPageLoad = async () => {
	if (!browser || !getAuth().currentUser || !hasGoogleProvider()) {
		return;
	}

	if (!setupPromise) {
		setupPromise = (async () => {
			const gapi = await getGapi();

			await new Promise<void>((resolve, reject) => {
				gapi.load('client', {
					callback: () => resolve(),
					onerror: () => reject(new Error('Failed to load Google API client')),
					timeout: 5000,
					ontimeout: () => reject(new Error('Timed out loading Google API client'))
				});
			});

			await gapi.client.init({ discoveryDocs: [DRIVE_DISCOVERY_DOC] });
		})();

		setupPromise.catch((error) => {
			setupPromise = undefined;
			console.warn('Failed to initialize Google Drive client:', error);
		});
	}

	await setupPromise;
};
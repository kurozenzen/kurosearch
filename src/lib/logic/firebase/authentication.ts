import { browser } from '$app/environment';
import { getGoogleAccounts } from '$lib/logic/firebase/drive';
import {
	GoogleAuthProvider,
	type UserCredential,
	browserLocalPersistence,
	getAuth,
	setPersistence,
	signInWithPopup,
	signOut as signOutFirebase
} from 'firebase/auth';

const GOOGLE_ACCESS_TOKEN_KEY = 'kurosearch:google-drive-access-token';
const GOOGLE_DRIVE_SCOPE = 'https://www.googleapis.com/auth/drive.appdata';

interface EnsureGoogleAccessTokenOptions {
	allowInteractivePrompt?: boolean;
	allowSilentPrompt?: boolean;
}

let googleAuthProvider = new GoogleAuthProvider();
googleAuthProvider.addScope(GOOGLE_DRIVE_SCOPE);
googleAuthProvider.setCustomParameters({
	include_granted_scopes: 'true'
});

let googleAccessToken: string | undefined;

const getGoogleClientId = () => import.meta.env.GOOGLE_CLIENT_ID?.trim();

const readStoredGoogleAccessToken = () => {
	if (!browser) {
		return undefined;
	}

	return sessionStorage.getItem(GOOGLE_ACCESS_TOKEN_KEY) ?? undefined;
};

const writeStoredGoogleAccessToken = (token: string | undefined) => {
	if (!browser) {
		return;
	}

	if (!token) {
		sessionStorage.removeItem(GOOGLE_ACCESS_TOKEN_KEY);
		return;
	}

	sessionStorage.setItem(GOOGLE_ACCESS_TOKEN_KEY, token);
};

const setGoogleAccessTokenFromCredential = (credential: UserCredential) => {
	const googleCredential = GoogleAuthProvider.credentialFromResult(credential);
	if (googleCredential?.accessToken) {
		googleAccessToken = googleCredential.accessToken;
		writeStoredGoogleAccessToken(googleAccessToken);
	}
};

const requestGoogleAccessTokenWithGIS = async (prompt: '' | 'consent') => {
	if (!browser) {
		return undefined;
	}

	const clientId = getGoogleClientId();
	if (!clientId) {
		return undefined;
	}

	const googleAccounts = await getGoogleAccounts();

	return new Promise<string | undefined>((resolve, reject) => {
		const tokenClient = googleAccounts.oauth2.initTokenClient({
			client_id: clientId,
			scope: GOOGLE_DRIVE_SCOPE,
			callback: (response: { access_token?: string; error?: string }) => {
				if (response.error) {
					resolve(undefined);
					return;
				}

				googleAccessToken = response.access_token;
				writeStoredGoogleAccessToken(googleAccessToken);
				resolve(googleAccessToken);
			},
			error_callback: () => {
				if (prompt === '') {
					resolve(undefined);
					return;
				}

				reject(new Error('Failed to get Google Drive access token.'));
			}
		});

		tokenClient.requestAccessToken({ prompt });
	});
};

void setPersistence(getAuth(), browserLocalPersistence).catch((error) => {
	console.warn('Failed to set Firebase auth persistence:', error);
});

export const signIn = async () => {
	const credential = await signInWithPopup(getAuth(), googleAuthProvider);
	setGoogleAccessTokenFromCredential(credential);
	if (!googleAccessToken) {
		await requestGoogleAccessTokenWithGIS('consent');
	}
	return credential;
};

export const ensureGoogleAccessToken = async ({
	allowInteractivePrompt = false,
	allowSilentPrompt = false
}: EnsureGoogleAccessTokenOptions = {}) => {
	if (googleAccessToken) {
		return googleAccessToken;
	}

	const storedToken = readStoredGoogleAccessToken();
	if (storedToken) {
		googleAccessToken = storedToken;
		return googleAccessToken;
	}

	if (allowSilentPrompt) {
		const silentToken = await requestGoogleAccessTokenWithGIS('');
		if (silentToken) {
			return silentToken;
		}
	}

	if (!allowInteractivePrompt) {
		return undefined;
	}

	const credential = await signInWithPopup(getAuth(), googleAuthProvider);
	setGoogleAccessTokenFromCredential(credential);

	if (!googleAccessToken) {
		await requestGoogleAccessTokenWithGIS('consent');
	}

	if (!googleAccessToken) {
		throw new Error('Unable to get Google Drive access token.');
	}

	return googleAccessToken;
};

export const signOut = async () => {
	googleAccessToken = undefined;
	writeStoredGoogleAccessToken(undefined);
	return signOutFirebase(getAuth());
};
export const loggedIn = () => getAuth().currentUser !== null;

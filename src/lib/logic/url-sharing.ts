import { browser } from '$app/environment';

export const supportsUrlSharing = () => browser && 'pushState' in window.history;

import { writable } from 'svelte/store';

/**
 * Store to track whether images should be blurred based on URL parameter.
 * Controlled by the presence of ?blur in the URL.
 */
export const blurEnabled = writable<boolean>(false);

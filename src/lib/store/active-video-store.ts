import { writable } from 'svelte/store';

const { subscribe, update } = writable<HTMLVideoElement | undefined>(undefined);

export const videoStore = {
	subscribe,
	play(video: HTMLVideoElement) {
		update((current) => {
			if (current && current !== video) {
				current.pause();
			}
			return video;
		});
		return video.play();
	},
	stop() {
		update((current) => {
			current?.pause();
			return undefined;
		});
	}
};

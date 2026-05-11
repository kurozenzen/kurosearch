import { clamp } from '$lib/logic/math';
import { writable } from 'svelte/store';

export interface VideoContext {
	playingVideo: HTMLVideoElement | undefined;
	targetVideo: HTMLVideoElement | undefined;
}

export const SKIP_TIME = 10;

const { subscribe, update } = writable<VideoContext>({
	playingVideo: undefined,
	targetVideo: undefined
});

export const videoStore = {
	subscribe,
	/**
	 * Retargets the store to a specific video element without changing play state.
	 */
	target(video: HTMLVideoElement | undefined) {
		update((current) => {
			console.log('target video', video?.src);
			if (current.targetVideo !== video) {
				current.targetVideo = video;
			}
			return current;
		});
	},

	/**
	 * Plays the targeted video element, pausing any currently active video.
	 */
	play() {
		update((current) => {
			current.playingVideo?.pause();
			current.playingVideo = current.targetVideo;
			try {
				current.playingVideo?.play().catch(() => {});
			} catch (_) {
				// ignored
			}
			console.log('play video', current.playingVideo?.src);
			return current;
		});
	},
	/**
	 * Pauses the currently active video. Video remains active.
	 */
	pause() {
		update((current) => {
			console.log('pausing video', current.playingVideo?.src);
			current.playingVideo?.pause();
			current.playingVideo = undefined;
			return current;
		});
	},
	/**
	 * Toggles play/pause on the currently  video.
	 */
	toggle() {
		let toggled = false;
		update((current) => {
			if (current.targetVideo) {
				if (current.playingVideo !== current.targetVideo) {
					current.playingVideo?.pause();
				}
				if (current.targetVideo.paused) {
					current.playingVideo = current.targetVideo;
					try {
						current.playingVideo?.play().catch(() => {});
					} catch (_) {
						// ignored
					}
				} else {
					current.playingVideo?.pause();
					current.playingVideo = undefined;
				}

				toggled = true;
			}
			return current;
		});
		return toggled;
	},
	skip(seconds: number) {
		let skipped = false;
		update((current) => {
			let video = current.targetVideo;
			if (video) {
				video.currentTime = clamp(video.currentTime + seconds, 0, video.duration);
				skipped = true;
			}
			return current;
		});
		return skipped;
	}
};

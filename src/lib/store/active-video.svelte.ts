import { clamp } from '$lib/logic/math';
import { writable } from 'svelte/store';

export interface VideoContext {
	playingVideo: HTMLVideoElement | undefined;
	targetVideo: HTMLVideoElement | undefined;
}

export enum SkipDirection {
	Forward = 1,
	Backward = -1
}

export const SKIP_TIME = 10;

const attemptPlay = async (video: HTMLVideoElement | undefined) => {
	try {
		await video?.play();
	} catch (_) {
		// ignored
	}
};

export const videoState = $state<VideoContext>({
	playingVideo: undefined,
	targetVideo: undefined
});

export const targetVideo = (video: HTMLVideoElement | undefined) => {
	videoState.targetVideo = video;
};

export const playVideo = async (video?: HTMLVideoElement) => {
	if (video) {
		videoState.targetVideo = video;
	}

	if (videoState.playingVideo === videoState.targetVideo) {
		if (videoState.playingVideo?.paused) {
			attemptPlay(videoState.playingVideo);
		}
	} else {
		videoState.playingVideo?.pause();
		videoState.playingVideo = videoState.targetVideo;
		attemptPlay(videoState.playingVideo);
	}
};

export const pauseVideo = () => {
	videoState.playingVideo?.pause();
	videoState.playingVideo = undefined;
};

export const toggleVideo = (video?: HTMLVideoElement): boolean => {
	if (video) {
		videoState.targetVideo = video;
	}

	if (videoState.targetVideo === videoState.playingVideo) {
		if (videoState.playingVideo?.paused) {
			attemptPlay(videoState.playingVideo);
		} else {
			videoState.playingVideo?.pause();
			videoState.playingVideo = undefined;
		}
	} else {
		videoState.playingVideo?.pause();
		videoState.playingVideo = videoState.targetVideo;
		attemptPlay(videoState.playingVideo);
	}

	return videoState.targetVideo !== undefined;
};

export const skipVideo = (video: HTMLVideoElement | undefined, direction: SkipDirection): boolean => {
	if (video) {
		videoState.targetVideo = video;
	}

	if (videoState.targetVideo) {
		const seconds = SKIP_TIME * direction;
		videoState.targetVideo.currentTime = clamp(
			videoState.targetVideo.currentTime + seconds,
			0,
			videoState.targetVideo.duration
		);
		return true;
	}

	return false;
};

import { clamp } from '$lib/logic/math';

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
		if (video?.paused) {
			await video?.play();
		}
	} catch (_) {
		// ignored
	}
};

const attemptPause = (video: HTMLVideoElement | undefined) => {
	if (!video?.paused) {
		video?.pause();
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
		await attemptPlay(videoState.playingVideo);
	} else {
		attemptPause(videoState.playingVideo);
		videoState.playingVideo = videoState.targetVideo;
		await attemptPlay(videoState.playingVideo);
	}
};

export const pauseVideo = () => {
	attemptPause(videoState.playingVideo);
	videoState.playingVideo = undefined;
};

export const toggleVideo = async (video?: HTMLVideoElement): Promise<boolean> => {
	if (video) {
		videoState.targetVideo = video;
	}

	if (videoState.targetVideo === videoState.playingVideo) {
		if (videoState.playingVideo?.paused) {
			await attemptPlay(videoState.playingVideo);
		} else {
			attemptPause(videoState.playingVideo);
			videoState.playingVideo = undefined;
		}
	} else {
		attemptPause(videoState.playingVideo);
		videoState.playingVideo = videoState.targetVideo;
		await attemptPlay(videoState.playingVideo);
	}

	return videoState.targetVideo !== undefined;
};

export const skipVideo = (
	video: HTMLVideoElement | undefined,
	direction: SkipDirection
): boolean => {
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

export const toggleMute = () => {
	if (videoState.playingVideo) {
		videoState.playingVideo.muted = !videoState.playingVideo.muted;
	}
};

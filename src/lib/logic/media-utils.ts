export const isGif = (url: string) => url.endsWith('.gif');
export const getGifSources = (full: string, sample: string, preview: string) =>
	isGif(sample) ? { static: preview, animated: sample } : { static: sample, animated: full };

export const isVideo = (url: string) => url.endsWith('.mp4') || url.endsWith('.webm');
export const getVideoSources = (full: string, sample: string, preview: string) =>
	isVideo(sample) ? { static: preview, animated: sample } : { static: sample, animated: full };

export const isLoop = (tags: kurosearch.Tag[]) => tags.some((t) => t.name === 'loop');

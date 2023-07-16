export const isGif = (url: string) => url.endsWith('.gif');
export const getSources = (full: string, sample: string, preview: string) =>
	isGif(sample) ? { static: preview, animated: sample } : { static: sample, animated: full };

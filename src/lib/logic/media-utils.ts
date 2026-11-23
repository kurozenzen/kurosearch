export const isGif = (url: string) => url.endsWith('.gif');
export const getGifSources = (full: string, sample: string, preview: string) =>
	isGif(sample) ? { static: preview, animated: sample } : { static: sample, animated: full };

export const isVideo = (url: string) => url.endsWith('.mp4') || url.endsWith('.webm');
export const getVideoSources = (full: string, sample: string, preview: string) =>
	isVideo(sample) ? { static: preview, animated: sample } : { static: sample, animated: full };

export const isLoop = (tags: kurosearch.Tag[]) => tags.some((t) => t.name === 'loop');

export const isAnimated = (url: string) => isGif(url) || isVideo(url);

export const getExtension = (url: string) => {
	const parts = url.split('.');
	return parts.length > 1 ? parts[parts.length - 1].toLowerCase() : '';
};

export const isImage = (src: string) =>
	src.endsWith('.jpg') || src.endsWith('.jpeg') || src.endsWith('.png') || src.endsWith('.webp');

export const isComic = (ratio: number) => ratio < 0.4;

const ENFORCE_DATA_SAVING =
	typeof navigator !== 'undefined' &&
	// @ts-expect-error - Network Information API is not in all TS DOM libs
	(navigator?.connection?.saveData || navigator?.connection?.effectiveType?.includes('2g'));

const MAX_THUMBNAIL_SIZE = 250;
export const calculateSrcSet = (post: kurosearch.Post, aspectRatio: number, saveData: boolean) => {
	if (post.file_url === post.sample_url) {
		return `${post.file_url} ${post.width}w, ${post.preview_url} ${Math.floor(MAX_THUMBNAIL_SIZE * aspectRatio)}w`;
	}

	if (ENFORCE_DATA_SAVING || saveData) {
		return `${post.sample_url} ${post.sample_width}w, ${post.preview_url} ${Math.floor(MAX_THUMBNAIL_SIZE * aspectRatio)}w`;
	}

	return `${post.file_url} ${post.width}w, ${post.sample_url} ${post.sample_width}w, ${post.preview_url} ${Math.floor(MAX_THUMBNAIL_SIZE * aspectRatio)}w`;
};

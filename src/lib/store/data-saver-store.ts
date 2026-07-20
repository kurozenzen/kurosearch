import { isComic } from '$lib/logic/media-utils';
import { createBoolStore } from './generic/bool-store';
import { StoreKey } from './store-keys';

export default createBoolStore(StoreKey.DataSaver, false);

export const DATA_SAVER_THRESHOLD = 1_000_000;

export const estimateWeight = (width: number, height: number): number => (width * height) / 2;

export const checkImgBandwith = (width: number, height: number): boolean => isComic(width / height);

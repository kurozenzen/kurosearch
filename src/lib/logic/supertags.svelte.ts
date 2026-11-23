import { activeSupertags, activeTags, supertags } from '#lib/store';
import { addOrReplace } from './array-ops';

export const createNewSupertagFromActiveTags = (supertag: kurosearch.Supertag) => {
	activeTags.reset();
	addOrReplace(supertags.value, supertag);
	addOrReplace(activeSupertags.value, supertag);
};

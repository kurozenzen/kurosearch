import { createBoolStore } from './generic/bool-store';
import { StoreKey } from './store-keys';

export default createBoolStore(StoreKey.WideLayoutEnabled, false);

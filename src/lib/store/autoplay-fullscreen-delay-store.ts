import { createNumberStore } from './generic/number-store';
import { StoreKey } from './store-keys';

export default createNumberStore(StoreKey.AutoplayFullscreenDelay, 10);

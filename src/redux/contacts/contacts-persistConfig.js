import storage from 'redux-persist/lib/storage';
import * as CONSTANTS from 'constants';

export const contactsPersistConfig = {
  key: CONSTANTS.CONTACTS_lS_KEY,
  storage,
  blacklist: ['filter'],
};

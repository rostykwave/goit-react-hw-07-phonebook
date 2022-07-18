import { configureStore } from '@reduxjs/toolkit';
import { middleware } from 'redux/storeConfig/middleware';
import { persistStore, persistReducer } from 'redux-persist';
import { contactsPersistConfig } from 'redux/contacts/contacts-persistConfig';
import contactsReducer from './contacts/contacts-reducer';

const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, contactsReducer),
    // contacts: {
    //   items: [],
    //   filter: '',
    // },
  },
  middleware,
});

const persistor = persistStore(store);

export { store, persistor };

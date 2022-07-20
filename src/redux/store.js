import { configureStore } from '@reduxjs/toolkit';
import { middleware } from 'redux/storeConfig/middleware';
import contactsReducer from './contacts/contacts-reducer';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware,
});

export { store };

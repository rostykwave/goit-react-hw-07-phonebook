import { combineReducers } from 'redux';
// import { contactsActions } from './contacts-actions';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
} from 'redux/contacts/contacts-actions';
import { fetchContacts } from 'redux/contacts/contacts-operations';

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  // [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  // [actions.addContact]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});
const error = createReducer(null, {
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,
  [addContactError]: (_, action) => action.payload,
  [addContactRequest]: () => null,
  [deleteContactError]: (_, action) => action.payload,
  [deleteContactRequest]: () => null,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});

// const items = createReducer([], {
//   [contactsActions.addContact]: (state, { payload }) => {
//     if (state.find(contact => contact.name === payload.name)) {
//       alert(`${payload.name} is already in contacts`);
//       return;
//     }
//     return [...state, payload];
//   },
//   // [contactsActions.addContact]: (state, { payload }) => [...state, payload],
//   [contactsActions.deleteContact]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
// });

// const filter = createReducer('', {
//   [contactsActions.changeFilter]: (_, { payload }) => payload,
// });

// export default combineReducers({
//   items,
//   filter,
// });

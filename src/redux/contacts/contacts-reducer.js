import { combineReducers } from 'redux';
import { contactsActions } from './contacts-actions';
import { createReducer } from '@reduxjs/toolkit';

const items = createReducer([], {
  [contactsActions.addContact]: (state, { payload }) => {
    if (state.find(contact => contact.name === payload.name)) {
      alert(`${payload.name} is already in contacts`);
      return;
    }
    return [...state, payload];
  },
  // [contactsActions.addContact]: (state, { payload }) => [...state, payload],
  [contactsActions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [contactsActions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});

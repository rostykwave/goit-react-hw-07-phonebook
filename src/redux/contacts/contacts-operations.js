import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from 'redux/contacts/contacts-actions';

axios.defaults.baseURL = 'https://62c6dc952b03e73a58d905e0.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = contact => dispatch => {
  dispatch(addContactRequest());
  //   dispatch({ type: 'todos/addContactRequest' });

  axios
    .post('/contacts', contact)
    .then(
      ({ data }) => dispatch(addContactSuccess(data))
      //   dispatch({ type: 'todos/addContactSuccess', payload: data })
    )
    .catch(error => dispatch(addContactError(error)));
  // .catch(error => dispatch({ type: 'todos/addContactError', payload: error }));
};

export const deleteContact = contactId => dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch(error => dispatch(deleteContactError(error)));
};

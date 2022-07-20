// import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const addContactRequest = createAction('todos/addContactRequest');
export const addContactSuccess = createAction('todos/addContactSuccess');
export const addContactError = createAction('todos/addContactError');
// const addContact = createAction('contacts/add', ({ name, number }) => ({
//   payload: {
//     id: nanoid(),
//     name,
//     number,
//   },
// }));

export const deleteContactRequest = createAction('todos/deleteContactRequest');
export const deleteContactSuccess = createAction('todos/deleteContactSuccess');
export const deleteContactError = createAction('todos/deleteContactError');
// const deleteContact = createAction('contacts/delete');
export const changeFilter = createAction('contacts/changeFilter');

// export const contactsActions = { addContact, deleteContact, changeFilter };

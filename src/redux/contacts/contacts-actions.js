import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const createContact = createAction(
  'contacts/create', 
  (name, number) => {
  return {
    payload: {
        id: uuidv4(),
        name,
        number,
      }
  }
});

export const setContacts = createAction('contacts/set');

export const deleteContact = createAction('contacts/delete');

export const filterChange = createAction('contacts/filter');

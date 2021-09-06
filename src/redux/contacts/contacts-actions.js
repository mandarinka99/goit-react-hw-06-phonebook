import { v4 as uuidv4 } from 'uuid';
import types from './contacts-types';

export const setContacts = contacts => ({
  type: types.SET,
  payload: contacts,
})

export const createContact = (name, number) => ({
  type: types.CREATE,
  payload: {
    id: uuidv4(),
    name,
    number
  }
})

export const deleteContact = contactId => ({
  type: types.DELETE,
  payload: contactId
})

export const filterChange = value => ({
  type: types.FILTER,
  payload: value
});

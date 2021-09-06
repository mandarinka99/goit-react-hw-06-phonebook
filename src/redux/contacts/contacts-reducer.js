import { combineReducers } from "redux";
import { createReducer } from '@reduxjs/toolkit';
import {createContact, setContacts, deleteContact, filterChange} from './contacts-actions';


const items = createReducer([], {
  [createContact]: (state, {payload}) => [...state, payload],
  [setContacts]: (_, {payload}) => [...payload],
  [deleteContact]: (state, {payload}) => state.filter(contact => contact.id !== payload)
})

const filter = createReducer('', {
  [filterChange]: (_, {payload}) => payload,
})

export default combineReducers({
  items,
  filter,
});

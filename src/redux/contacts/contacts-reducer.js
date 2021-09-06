import { combineReducers } from "redux";
import types from "./contacts-types";

const items = (state = [], { type, payload }) => {
  switch (type) {
    case types.CREATE:
      return [...state, payload];
    case types.SET:
      return [...payload];
    case types.DELETE: 
      return state.filter(contact => contact.id !== payload);
    default:
      return state;
  }
};

const filter = (state = "", { type, payload }) => {
  switch (type) {
    case types.FILTER:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});

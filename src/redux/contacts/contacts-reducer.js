import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  FETCHCONTACTREQUEST,
  FETCHCONTACTERROR,
  FETCHCONTACTSUCCESS,
  ADDCONTACTREQUEST,
  ADDCONTACTSUCCESS,
  ADDCONTACTERROR,
  DELETECONTACTREQUEST,
  DELETECONTACTSUCCESS,
  DELETECONTACTERROR,
  FILTERCHANGE,
} from "./contacts-actions";

const items = createReducer([], {
  [FETCHCONTACTSUCCESS]: (_, { payload }) => {
    return payload;
  },
  [FETCHCONTACTERROR]: (_, { payload }) => {
    console.log(payload);
  },
  [ADDCONTACTSUCCESS]: (state, { payload }) => {
    return [...state, payload];
  },
  [ADDCONTACTERROR]: (_, { payload }) => {
    console.log(payload);
  },
  [DELETECONTACTSUCCESS]: (state, { payload }) => {
    return state.filter((el) => el.id !== payload);
  },
});

const filter = createReducer("", {
  [FILTERCHANGE.type]: (state, { payload }) => payload,
});

const loading = createReducer("", {
  [ADDCONTACTREQUEST]: () => true,
  [ADDCONTACTSUCCESS]: () => false,
  [ADDCONTACTERROR]: () => false,
  [FETCHCONTACTREQUEST]: () => true,
  [FETCHCONTACTSUCCESS]: () => false,
  [FETCHCONTACTERROR]: () => false,
  [DELETECONTACTREQUEST]: () => true,
  [DELETECONTACTSUCCESS]: () => false,
  [DELETECONTACTERROR]: () => false,
});

export const contacts = combineReducers({
  items,
  filter,
  loading,
});

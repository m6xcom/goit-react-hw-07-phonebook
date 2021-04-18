import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  REGISTERUSERSUCCESS,
  REGISTERUSERERROR,
  LOGINUSERSUCCESS,
  LOGINUSERERROR,
  LOGOUTUSERSUCCESS,
  LOGOUTUSERERROR,
  GETCURUSERSUCCESS,
  GETCURUSERERROR,
} from "./user-actions";

const userInitialState = { name: null, email: null };

const user = createReducer(userInitialState, {
  [REGISTERUSERSUCCESS]: (_, { payload }) => payload.user,
  [LOGINUSERSUCCESS]: (_, { payload }) => payload.user,
  [LOGOUTUSERSUCCESS]: () => userInitialState,
  [GETCURUSERSUCCESS]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [REGISTERUSERSUCCESS]: (_, { payload }) => payload.token,
  [LOGINUSERSUCCESS]: (_, { payload }) => payload.token,
  [LOGOUTUSERSUCCESS]: () => null,
});

const error = createReducer(null, {
  [REGISTERUSERERROR]: (_, { payload }) => payload,
  [LOGINUSERERROR]: (_, { payload }) => payload,
  [LOGOUTUSERERROR]: (_, { payload }) => payload,
  [GETCURUSERERROR]: (_, { payload }) => payload,
});

const isAuthenticated = createReducer(null, {
  [REGISTERUSERSUCCESS]: () => true,
  [REGISTERUSERERROR]: () => false,
  [LOGINUSERSUCCESS]: () => true,
  [LOGINUSERERROR]: () => false,
  [LOGOUTUSERSUCCESS]: () => false,
  [LOGOUTUSERERROR]: () => true,
  [GETCURUSERSUCCESS]: () => true,
  [GETCURUSERERROR]: () => false,
});

export const auth = combineReducers({ user, token, isAuthenticated, error });

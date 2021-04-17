import { createAction } from "@reduxjs/toolkit";

export const REGISTERUSERREQUEST = createAction("auth/registerUserRequest");
export const REGISTERUSERSUCCESS = createAction("auth/registerUserSuccess");
export const REGISTERUSERERROR = createAction("auth/registerUserError");

export const LOGINUSERREQUEST = createAction("auth/loginUserRequest");
export const LOGINUSERSUCCESS = createAction("auth/loginUserSuccess");
export const LOGINUSERERROR = createAction("auth/loginUserError");

export const LOGOUTUSERREQUEST = createAction("auth/logoutUserRequest");
export const LOGOUTUSERSUCCESS = createAction("auth/logoutUserSuccess");
export const LOGOUTUSERERROR = createAction("auth/logoutUserError");

export const GETCURUSERREQUEST = createAction("auth/getCurrentUserRequest");
export const GETCURUSERSUCCESS = createAction("auth/getCurrentUserSuccess");
export const GETCURUSERERROR = createAction("auth/getCurrentUserError");

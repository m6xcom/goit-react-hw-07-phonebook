import { createAction } from "@reduxjs/toolkit";

export const ADDCONTACTREQUEST = createAction("contacts/addContactRequest");

export const ADDCONTACTSUCCESS = createAction("contacts/addContactSuccess");

export const ADDCONTACTERROR = createAction("contacts/addContactError");

export const FETCHCONTACTREQUEST = createAction("contacts/fetchContactRequest");

export const FETCHCONTACTSUCCESS = createAction("contacts/fetchContactSuccess");

export const FETCHCONTACTERROR = createAction("contacts/fetchContactError");

export const DELETECONTACTREQUEST = createAction(
  "contacts/deleteContactRequest"
);

export const DELETECONTACTSUCCESS = createAction(
  "contacts/deleteContactSuccess"
);

export const DELETECONTACTERROR = createAction("contacts/deleteContactError");

export const FILTERCHANGE = createAction("contacts/filterChange");

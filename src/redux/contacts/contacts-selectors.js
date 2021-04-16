import { createSelector } from "@reduxjs/toolkit";

export const getFilter = (state) => state.contacts.filter;

export const getContacts = (state) => state.contacts.items;

export const getFilteredContacts = createSelector(
  [getFilter, getContacts],
  (filter, contacts) =>
    contacts.filter((el) => el.name.toLowerCase().includes(filter))
);

import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.value;
export const selectFilter = state => state.filter;

export const filteredContacts = createSelector(
  [selectFilter, selectContacts],
  (filter, contacts) => {
    return contacts?.filter(el =>
      el?.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

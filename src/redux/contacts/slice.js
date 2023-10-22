import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const slice = createSlice({
  name: 'contacts',
  initialState: { value: [], isLoading: false, error: null },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.value = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        if (action.payload !== 'canceled') {
          alert(`Emerged some problems. Try to reload the page!`);
        }
      })
      .addCase(addContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        if (!state.value?.some(el => el.name === action.payload?.name)) {
          state.value.push(action.payload);
        }
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        if (action.payload !== 'canceled') {
          alert(`Emerged some problems. Try to reload the page!`);
        }
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.value = state.value.filter(el => el.id !== action.payload.id);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        if (action.payload !== 'canceled') {
          alert(`Emerged some problems. Try to reload the page!`);
        }
      });
  },
});

export const contactsReducer = slice.reducer;

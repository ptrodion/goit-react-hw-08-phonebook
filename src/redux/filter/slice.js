import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContacts(_, action) {
      return action.payload;
    },
  },
});

export const { filterContacts } = slice.actions;
export const filterReducer = slice.reducer;

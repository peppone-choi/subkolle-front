import { createSlice } from '@reduxjs/toolkit/react';

const initialState = {
  id: '',
  modalOpen: false,
};

const eventModalItemSlice = createSlice({
  name: 'eventModalItem',
  initialState,
  reducers: {
    setEventModalItem(state, action) {
      state.id = action.payload;
    },
    resetEventModalItem(state) {
      state.id = '';
    },
    modalOpen(state) {
      document.body.style.overflowY = 'hidden';
      state.modalOpen = true;
    },
    modalClose(state) {
      document.body.style.overflowY = 'auto';
      state.modalOpen = false;
    },
  },
});

export const { setEventModalItem, resetEventModalItem, modalOpen, modalClose } = eventModalItemSlice.actions;
export default eventModalItemSlice.reducer;

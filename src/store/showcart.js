import { createSlice } from "@reduxjs/toolkit";

const initialCartButtonState = { showCart: false, notification: null };

const showCartSlice = createSlice({
  name: "showcart",
  initialState: initialCartButtonState,
  reducers: {
    showCart(state) {
      state.showCart = !state.showCart;
    },
    showNotification(state, action) {
      state.notification = {
        title: action.payload.title,
        status: action.payload.status,
        message: action.payload.message,
      };
    },
  },
});

export const showCartActions = showCartSlice.actions;

export default showCartSlice.reducer;

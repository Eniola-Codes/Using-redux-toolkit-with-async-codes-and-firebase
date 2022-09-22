import { createSlice } from "@reduxjs/toolkit";

const initialCartItemState = { items: [], totalQuantity: 0, changed : false
};

const cartItemSlice = createSlice({
  name: "cartitemstate",
  initialState: initialCartItemState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      state.totalQuantity++;
      state.changed = true;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    replaceCart(state,action)
    {
        state.totalQuantity = action.payload.totalQuantity;
        state.items = action.payload.items;
    },
    removeFromCart(state, action) {
      const id = action.payload;
      state.changed = true;
      const existingItems = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItems.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItems.quantity--;
        existingItems.totalPrice =
          existingItems.totalPrice - existingItems.price;
      }
    },
  },
});


export const cartItemActions = cartItemSlice.actions;

export default cartItemSlice.reducer;

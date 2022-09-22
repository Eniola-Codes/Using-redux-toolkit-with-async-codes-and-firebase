import { configureStore } from "@reduxjs/toolkit";
import cartitem from "./cartitem";
import showcart from "./showcart";

const store = configureStore({
  reducer: { showCartState: showcart, cartItems: cartitem },
});

export default store;

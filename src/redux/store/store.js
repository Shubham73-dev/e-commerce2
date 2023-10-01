import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/product-slice";
import cartSlice from "./slices/cart-slice";
import itemSlice from "./slices/items-slice";

const store = configureStore({
  reducer: {
    product: productSlice,
    cartItems: cartSlice,
    itemsStat: itemSlice,
  },
});

export default store;

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addCartItems(state, action) {
      state.cartItems.push(action.payload);
    },
    removeCartItems(state, action) {
      state.cartItems.splice(action.payload, 1);
    },
  },
});
export const { addCartItems, removeCartItems } = cartSlice.actions;
export default cartSlice.reducer;

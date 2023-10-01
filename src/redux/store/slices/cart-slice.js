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
  },
});
export const { addCartItems } = cartSlice.actions;
export default cartSlice.reducer;

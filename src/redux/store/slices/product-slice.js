import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customAxios from "../../../axios/axios";
import CONFIG from "../../../config/config";

// fetch call
export const getProducts = createAsyncThunk("/get-products", async () => {
  const response = await customAxios.get(CONFIG.product_URL);
  const data = response.data.products;
  return data;
});

// slice created
const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    isLoading: true, // Initialize isLoading as false
    error: null, // Initialize error as null
  },
  reducers: {
    add(state, action) {
      state.products.push(action.payload);
    },
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.isLoading = true;
      state.error = null; // Reset error when starting the request
    },
    [getProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message; // Set the error message
    },
  },
});

export const { add } = productSlice.actions;
export default productSlice.reducer;

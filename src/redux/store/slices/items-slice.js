import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "itemStatus",
  initialState: {
    setBtnStat: [],
  },
  reducers: {
    addBtnStat(state, action) {
      state.setBtnStat = [];
      state.setBtnStat.push(action.payload);
    },
    toggleBtnStat(state, action) {
      const { id } = action.payload;
      const itemToToggle = state.find((item) => item.id === id);
      if (itemToToggle) {
        itemToToggle.btnStat = !itemToToggle.btnStat;
      }
    },
  },
});

export const { toggleBtnStat, addBtnStat } = itemSlice.actions;
export default itemSlice.reducer;

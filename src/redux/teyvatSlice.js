import { createSlice } from "@reduxjs/toolkit";

const initialState = { scroll: false };

const teyvatSlice = createSlice({
  name: "teyvat",
  initialState,
  reducers: {
    allowScroll(state) {
      state.scroll = true;
    },
    stopScroll(state) {
      state.scroll = false;
    },
    // incrementByAmount(state, action) {
    //   state.value += action.payload;
    // },
  },
});

export const { allowScroll, stopScroll } = teyvatSlice.actions;
export default teyvatSlice.reducer;

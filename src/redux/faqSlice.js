import { createSlice } from "@reduxjs/toolkit";

const initialState = { show: true };

const faqSlice = createSlice({
  name: "faq",
  initialState,
  reducers: {
    showFaq(state) {
      state.show = true;
    },
    hideFaq(state) {
      state.show = false;
    },
    // incrementByAmount(state, action) {
    //   state.value += action.payload;
    // },
  },
});

export const { showFaq, hideFaq } = faqSlice.actions;
export default faqSlice.reducer;

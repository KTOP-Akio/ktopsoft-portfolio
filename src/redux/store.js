import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./layoutSlice";
import faqReducer from "./faqSlice";
import teyvatReducer from "./teyvatSlice";

const store = configureStore({
  reducer: {
    layout: layoutReducer,
    faq: faqReducer,
    teyvat: teyvatReducer,
  },
});

export default store;

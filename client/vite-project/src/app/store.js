import { configureStore } from "@reduxjs/toolkit";
import toolkit_reducer from "../reducer/reducerSlider";

export const store = configureStore({
    reducer: {
      reducer: toolkit_reducer
  
    },
  })
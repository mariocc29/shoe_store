import { configureStore } from "@reduxjs/toolkit";
import statsReducer from "./stats/statsSlice"

export const store = configureStore({
  reducer: {
    stats: statsReducer,
  }
})
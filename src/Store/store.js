import { configureStore } from "@reduxjs/toolkit";
import ToggleSlice from "./ToggleSlice.js";
import ThemeSlice from "./ThemeSlice.js";

export const store = configureStore({
  reducer: {
    ToggleSlice,
    ThemeSlice
  }
});

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // color: true,
  theme: {
    palette: {
      main: "#44475a",
      secondary: "#282A36",
      accent: "#BD93F9",
      textFocused: "#F8F8F2",
      textUnFocused: "#f8f8f833",
      text: "#f8f8f299",
      highlight: "#FF79C6",
      error: "#FF5555"
    },
    breakpoints: {
      xs: 0,
      sm: 600,
      md: 900,
      test: 700,
      test2: 800,
      lg: 1200,
      xl: 1536
    },
    typography: {
      body2: {
        fontSize: 14,
        fontWeight: 400
      },
      button: {
        fontSize: 14,
        fontWeight: 600
      },
      subtitle1: {
        fontSize: 16,
        fontWeight: 400
      }
    }
  }
};

export const ThemeSlice = createSlice({
  name: "ThemeSlice",
  initialState,
  reducers: {
    // used in projects section for projects nav and project display
    changeAccentColor: (state, action) => {
      state.color = state.theme.palette.accent = action.payload;
    }
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

// Action creators are generated for each case reducer function
export const { changeAccentColor } = ThemeSlice.actions;

export default ThemeSlice.reducer;

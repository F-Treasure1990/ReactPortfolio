import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isActive: false,
  projectCounter: 0
};

export const ToggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleContactForm: state => {
      state.isActive = !state.isActive;
    },

    // used in projects section for projects nav and project display
    toggleProjects: (state, action) => {
      state.projectCounter = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { toggleProjects, toggleContactForm } = ToggleSlice.actions;

export default ToggleSlice.reducer;

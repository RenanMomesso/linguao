import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkTheme: false,
  loading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.isDarkTheme = !state.isDarkTheme;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { toggleTheme, setLoading } = uiSlice.actions;
export default uiSlice.reducer;

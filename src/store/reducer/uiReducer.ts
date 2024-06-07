import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkTheme: false,
  loading: false,
  homeMenuItem: null,
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
    selectHomeItem(state, action) {
      state.homeMenuItem = action.payload;
    },
  },
});

export const { toggleTheme, setLoading, selectHomeItem } = uiSlice.actions;
export default uiSlice.reducer;

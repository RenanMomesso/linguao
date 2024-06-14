import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkTheme: false,
  loading: false,
  homeMenuItem: null,
  showBottomNavigation: true,
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
    toggleBottomNavigation(
      state,
      action: {
        payload: boolean;
      },
    ) {
      state.showBottomNavigation = action.payload;
    },
  },
});

export const {
  toggleTheme,
  setLoading,
  selectHomeItem,
  toggleBottomNavigation,
} = uiSlice.actions;
export default uiSlice.reducer;

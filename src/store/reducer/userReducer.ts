import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: User;
  loading: boolean;
  error: string | null;
}

interface User {
  id: number;
  name: string;
  email: string;
  onboarding: boolean;
  nativeLanguange: string;
  nativeLanguangeFlag: string;
  targetLanguange: string;
  level: string;
  reason: string;
  target: string;
  avatar?: string | null;
  isPremium?: boolean;
}

const initialState: UserState = {
  user: {
    id: 0,
    name: "",
    email: "",
    onboarding: false,
    nativeLanguange: "",
    nativeLanguangeFlag: "",
    targetLanguange: "",
    level: "",
    reason: "",
    target: "",
  },
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    setGlobalUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    setUserNativeLanguage(
      state,
      action: PayloadAction<{
        nativeLanguange: string;
        nativeLanguangeFlag: string;
      }>,
    ) {
      state.user.nativeLanguange = action.payload.nativeLanguange;
      state.user.nativeLanguangeFlag = action.payload.nativeLanguangeFlag;
    },
    setTargetLanguage(state, action: PayloadAction<string>) {
      state.user.targetLanguange = action.payload;
    },
    setUserLevel(state, action: PayloadAction<string>) {
      state.user.level = action.payload;
    },
    clearUser(state) {
      state.user = initialState.user;
    },
  },
});

export const {
  updateUser,
  setUserNativeLanguage,
  setTargetLanguage,
  setUserLevel,
  clearUser,
  setGlobalUser,
} = userSlice.actions;

export default userSlice.reducer;

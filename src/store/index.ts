import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import userReducer from "./reducer/userReducer";
import uiReducer from "./reducer/uiReducer";
import chatMessageReducer from "./reducer/chatMessageReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    ui: uiReducer,
    chatMessageReducer: chatMessageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;

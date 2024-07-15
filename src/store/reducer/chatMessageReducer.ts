import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Message } from "../../API";

export interface ChatMessageState {
  messages: Message;
}

const initialState: ChatMessageState = {
  messages: {} as Message,
};

const chatMessageSlice = createSlice({
  name: "chatMessage",
  initialState,
  reducers: {
    setChatMessage(state, action: PayloadAction<Message>) {
      state.messages = action.payload;
    },
  },
});

export const { setChatMessage } = chatMessageSlice.actions;
export default chatMessageSlice.reducer;

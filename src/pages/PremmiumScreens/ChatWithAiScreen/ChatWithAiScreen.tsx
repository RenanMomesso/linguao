import React, { useEffect } from "react";
import { Container, Row } from "@/theme/GlobalComponents";

import { useAppDispatch } from "@/store";
import { toggleBottomNavigation } from "@/store/reducer/uiReducer";
import useChatWithAiScreen from "./useChatWithAiScreen";
import Avatar from "@/components/Avatar/Avatar";
import { theme } from "@/theme/theme";
import HeaderChat from "./components/HeaderChat";
import ChatMessages from "./components/ChatMessages";
import { Message } from "@/API";
import SendMessage from "./components/SendMessage";

const ChatWithAiScreen = () => {
  const {
    aiChatInfo,
    messages,
    handleCreateMessage,
    flatListRef,
    loadingNewMessage,
  } = useChatWithAiScreen();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(toggleBottomNavigation(false));
  }, []);

  return (
    <Container backgroundColor="white" padding={8}>
      <HeaderChat
        aiName={aiChatInfo?.user?.name || ""}
        aiAvatar={aiChatInfo?.user?.avatar || ""}
      />

      <ChatMessages
        messages={(messages?.listMessages?.items as Message[]) || null}
        otherUserId={aiChatInfo?.user?.id || ""}
        otherUserName={aiChatInfo?.user?.name || ""}
        flatListRef={flatListRef}
        loadingNewMessage={loadingNewMessage}
      />
      <SendMessage
        handleCreateMessage={handleCreateMessage}
        aiId={aiChatInfo.user?.id}
      />
    </Container>
  );
};

export default ChatWithAiScreen;

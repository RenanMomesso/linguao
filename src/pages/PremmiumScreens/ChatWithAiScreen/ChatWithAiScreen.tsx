import React, { useEffect, useState } from "react";
import { Container, Row } from "@/theme/GlobalComponents";

import { useAppDispatch } from "@/store";
import { toggleBottomNavigation } from "@/store/reducer/uiReducer";
import useChatWithAiScreen from "./useChatWithAiScreen";
import HeaderChat from "./components/HeaderChat";
import ChatMessages from "./components/ChatMessages";
import { Message } from "@/API";
import SendMessage from "./components/SendMessage/SendMessage";

const ChatWithAiScreen = () => {
  const {
    aiChatInfo,
    messages,
    handleCreateMessage,
    flatListRef,
    loadingNewMessage,
    fetchMoreMessages
  } = useChatWithAiScreen();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(toggleBottomNavigation(false));
  }, []);

  const [loadingMessages, setLoadingMessages] = useState(false);

  return (
    <Container backgroundColor="white" padding={8}>
      <HeaderChat
        aiName={aiChatInfo?.user?.name || ""}
        aiAvatar={aiChatInfo?.user?.avatar || ""}
      />

      <ChatMessages
        messages={messages || null}
        otherUserId={aiChatInfo?.user?.id || ""}
        otherUserName={aiChatInfo?.user?.name || ""}
        loadingNewMessage={loadingMessages}
        fetchMoreMessages={fetchMoreMessages}
      />
      <SendMessage
        handleCreateMessage={handleCreateMessage}
        aiId={aiChatInfo.user?.id}
        setLoadingMessages={setLoadingMessages}
        loadingMessages={loadingMessages}
      />
    </Container>
  );
};

export default ChatWithAiScreen;

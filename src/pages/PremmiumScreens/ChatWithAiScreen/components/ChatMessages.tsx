import { View } from "react-native";
import React, { memo, useCallback } from "react";
import { Container } from "@/theme/GlobalComponents";
import { Message } from "@/API";
import { FlatList } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";

import { speakerVoiceMessage, stopSpeakerVoice } from "@/utils/speakerVoice";

import BottomSheet, {
  BottomSheetRefProps,
} from "@/components/BottomSheet/BottomSheet";
import BottomSheetContent from "./BottomSheetContent";
import { useAppDispatch, useAppSelector } from "@/store";
import { setChatMessage } from "@/store/reducer/chatMessageReducer";
import ChatMessageItem from "./ChatMessageItem";
import LoadingNewMessageItem from "./LoadingNewMessageItem";
import { LoadingIconSvg } from "@/assets/images";
import LottieView from "lottie-react-native";
import { LoadingCircle } from "@/assets/json";

interface ChatMessagesProps {
  messages: Message[] | null;
  otherUserId: string;
  otherUserName: string;
  flatListRef?: React.RefObject<FlatList<Message>>;
  loadingNewMessage: boolean;
  fetchMoreMessages?: () => void;
  avatarUrlAi?: string;
  loadMoreMessages?: boolean;
  handleCreateMessage?: (
    text: string,
    showMenu: boolean,
    messageType: any,
    audioDuration: number,
    audioMessage?: string,
    userSender?: string,
    userName?: string,
  ) => void;
}

const ChatMessages = ({
  messages,
  otherUserId = "",
  otherUserName = "",
  flatListRef,
  loadingNewMessage = false,
  avatarUrlAi,
  loadMoreMessages,
  handleCreateMessage,
  fetchMoreMessages,
}: ChatMessagesProps) => {
  console.log("🚀 ~ loadingNewMessage:", loadingNewMessage);
  const [playAudio, setPlayAudio] = React.useState(false);
  const dispatch = useAppDispatch();
  const sortMessages = messages?.length
    ? [...messages]?.sort((a, b) => {
        if (a?.createdAt && b?.createdAt) {
          return (
            new Date(b?.createdAt).getTime() - new Date(a?.createdAt).getTime()
          );
        }
        return 0;
      })
    : [];

  const [selectedItem, setSelectedItem] = React.useState<Message>(
    {} as Message,
  );

  const ref = React.useRef<BottomSheetRefProps>(null);

  const onPress = useCallback(
    (messageItem: Message) => {
      setSelectedItem(messageItem);
      const isActive = ref?.current?.isActive();
      if (isActive) {
        ref?.current?.scrollTo(0);
      } else {
        ref?.current?.scrollTo(-300);
      }
    },
    [dispatch],
  );

  const handleCloseBottomSheet = () => {
    ref.current?.scrollTo(0);
  };

  const handlePlayAudio = (audioText: string) => {
    if (playAudio) {
      setPlayAudio(false);
      stopSpeakerVoice();
      return;
    }
    setSelectedItem({} as Message);
    setPlayAudio(true);
    speakerVoiceMessage(audioText || "");
  };

  const keyExtractor = (item: Message) => item?.id || "";

  return (
    <>
      <BottomSheet ref={ref}>
        <View style={{ flex: 1, backgroundColor: "orange" }}>
          <BottomSheetContent
            selectedChatMessage={selectedItem}
            setSelectedItem={setSelectedItem}
            handleCloseBottomSheet={handleCloseBottomSheet}
          />
        </View>
      </BottomSheet>
      <Container
        padding={5}
        style={{
          borderRadius: 12,
          flex: 1,
        }}
        backgroundColor={"greyScale400"}>
        <FlatList
          inverted
          ListHeaderComponent={
            loadingNewMessage ? (
              <LoadingNewMessageItem />
            ) : (
              <View style={{ height: 20 }} />
            )
          }
          automaticallyAdjustContentInsets
          contentContainerStyle={{
            paddingHorizontal: 6,
          }}
          ListFooterComponent={
            loadMoreMessages ? (
              <LottieView
                source={LoadingCircle}
                autoPlay
                loop
                style={{ height: 100, width: 100 }}
              />
            ) : (
              () => <View style={{ height: 20 }} />
            )
          }
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
          showsVerticalScrollIndicator={false}
          ref={flatListRef}
          data={sortMessages}
          keyExtractor={keyExtractor}
          onEndReached={fetchMoreMessages}
          renderItem={({ item }) => (
            <ChatMessageItem
              avatarUrlAi={avatarUrlAi || ""}
              item={item}
              setSelectedItem={setSelectedItem}
              selectedItem={selectedItem}
              onPress={onPress}
              handlePlayAudio={handlePlayAudio}
              playAudio={playAudio}
              otherUserId={otherUserId}
            />
          )}
        />
      </Container>
    </>
  );
};

export default memo(ChatMessages);

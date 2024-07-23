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

interface ChatMessagesProps {
  messages: Message[] | null;
  otherUserId: string;
  otherUserName: string;
  flatListRef: React.RefObject<FlatList<Message>>;
  loadingNewMessage: boolean;
}


const ChatMessages = ({
  messages,
  otherUserId = "",
  otherUserName = "",
  flatListRef,
  loadingNewMessage = false,
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

  const [selectedItem, setSelectedItem] = React.useState("");

  const ref = React.useRef<BottomSheetRefProps>(null);

  const onPress = useCallback(
    (messageItem: Message) => {
      dispatch(setChatMessage(messageItem));
      const isActive = ref?.current?.isActive();
      if (isActive) {
        ref?.current?.scrollTo(0);
      } else {
        ref?.current?.scrollTo(-300);
      }
    },
    [dispatch],
  );

  const handlePlayAudio = (audioText: string) => {
    if (playAudio) {
      setPlayAudio(false);
      stopSpeakerVoice();
      return;
    }
    setSelectedItem("");
    setPlayAudio(true);
    speakerVoiceMessage(audioText || "");
  };

  const keyExtractor = (item: Message) => item?.id || "";

  return (
    <>
      <BottomSheet ref={ref}>
        <View style={{ flex: 1, backgroundColor: "orange" }}>
          <BottomSheetContent />
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
              <View style={{ height: 10 }} />
            )
          }
          automaticallyAdjustContentInsets
          contentContainerStyle={{
            paddingHorizontal: 6,
          }}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          showsVerticalScrollIndicator={false}
          ref={flatListRef}
          data={sortMessages}
          keyExtractor={keyExtractor}
          renderItem={({ item }) => (
            <ChatMessageItem
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

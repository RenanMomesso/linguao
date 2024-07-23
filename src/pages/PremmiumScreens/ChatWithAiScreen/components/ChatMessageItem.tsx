import { speakerVoiceMessage, stopSpeakerVoice } from "@/utils/speakerVoice";
import { Message } from "../../../../API";
import React, { memo } from "react";
import ChatUserAudio from "./ChatMessageUserAudio";
import ChatMessageItemAiAudio from "./ChatMessageItemAiAudio";
import { Row } from "@/theme/GlobalComponents";
import { theme } from "@/theme/theme";
import Text from "@/components/Text";
import Animated, { FadeIn, FadeInLeft } from "react-native-reanimated";

const ChatMessageItem = ({
  item,
  setSelectedItem,
  onPress,
  otherUserId,
  handlePlayAudio,
  playAudio,
  selectedItem,
}: {
  item: Message;
  setSelectedItem: (id: string) => void;
  selectedItem: string;
  onPress: (messageItem: Message) => void;
  otherUserId: string;
  handlePlayAudio: (audioText: string) => void;
  playAudio: boolean;
}) => {
  if (item.messageType === "AUDIO" && item.userID !== otherUserId)
    return <ChatUserAudio text={item.text} />;

  if (item.messageType === "AUDIO" && item.userID === otherUserId) {
    return (
      <ChatMessageItemAiAudio
        audioPath={item.text}
        setPlayAudio={() => handlePlayAudio(item.audioText || "")}
        audioIsPlaying={playAudio}
        audioText={item.audioText || ""}
        handleLongPress={() => onPress(item)}
      />
    );
  }

  return (
    <Animated.View
      entering={FadeIn.duration(600)}
      style={{
        backgroundColor:
          item?.userID === otherUserId ? theme.colors.white : "lightgreen",
        padding: 10,
        borderRadius: 12,
        alignSelf: item?.userID === otherUserId ? "flex-start" : "flex-end",
      }}>
      <Text weight="semibold" size="text" color="black" align="justify">
        {item.text}
      </Text>
    </Animated.View>
  );
};

export default memo(ChatMessageItem);

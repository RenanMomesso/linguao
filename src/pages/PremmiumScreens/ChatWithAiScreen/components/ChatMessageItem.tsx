import { speakerVoiceMessage, stopSpeakerVoice } from "@/utils/speakerVoice";
import { Message } from "../../../../API";
import React, { memo } from "react";
import ChatUserAudio from "./ChatMessageUserAudio";
import ChatMessageItemAiAudio from "./ChatMessageItemAiAudio";
import { Row } from "@/theme/GlobalComponents";
import { theme } from "@/theme/theme";
import Text from "@/components/Text";
import Animated, { FadeIn, FadeInLeft } from "react-native-reanimated";
import { View } from "react-native";
import { formatDate } from "@/utils/formatDate";
import Avatar from "@/components/Avatar/Avatar";
import { useAppSelector } from "@/store";
import { TranslatorProvider } from "react-native-translator";

const ChatMessageItem = ({
  item,
  setSelectedItem,
  onPress,
  otherUserId,
  handlePlayAudio,
  playAudio,
  selectedItem,
  avatarUrlAi,
}: {
  item: Message;
  setSelectedItem: (message: Message) => void;
  selectedItem: Message;
  onPress: (messageItem: Message) => void;
  otherUserId: string;
  handlePlayAudio: (audioText: string) => void;
  playAudio: boolean;
  avatarUrlAi: string;
}) => {
  const myUserAvatar = useAppSelector(state => state.user.user.avatar);
  if (item.messageType === "AUDIO" && item.userID !== otherUserId)
    return <ChatUserAudio text={item.text} />;

  if (item.messageType === "AUDIO" && item.userID === otherUserId) {
    return (
      <ChatMessageItemAiAudio
        createdAt={item.createdAt || ""}
        avatarUrlAi={avatarUrlAi}
        audioPath={item.text}
        setPlayAudio={() => handlePlayAudio(item.audioText || "")}
        audioIsPlaying={playAudio}
        audioText={item.audioText || ""}
        handleLongPress={() => onPress(item)}
        selectedItem={selectedItem}
        id={item.id}
      />
    );
  }

  return (
    <View
      style={{
        backgroundColor:
          item?.userID === otherUserId ? theme.colors.white : "lightgreen",
        padding: 10,
        borderRadius: 12,
        alignSelf: item?.userID === otherUserId ? "flex-start" : "flex-end",
        elevation: 3,
      }}>
      <View
        style={{
          position: "absolute",
          right: -5,
          bottom: -15,
          zIndex: 3,
          elevation: 4,
        }}>
        <Avatar
          size="small"
          avatarUrl={item?.userID === otherUserId ? avatarUrlAi : myUserAvatar}
        />
      </View>
      <Text weight="semibold" size="text" color="greyScale800" align="justify">
        {item.text}
      </Text>
      <Text size="tiny" weight="light" align="left" style={{ marginTop: 4 }}>
        {formatDate(item.createdAt || "")}
      </Text>
    </View>
  );
};

export default memo(ChatMessageItem);

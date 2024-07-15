import { stopSpeakerVoice } from "@/utils/speakerVoice";
import { Message } from "../../../../API";
import React from "react";

const ChatMessageItem = ({
  item,
  setSelectedItem,
  onPress,
}: {
  item: Message;
  setSelectedItem: (id: string) => void;
  selectedItem: string;
  onPress: (messageItem: Message) => void;
}) => {
  const [playAudio, setPlayAudio] = React.useState(false);

  const handlePlayAudio = () => {
    if (playAudio) {
      setPlayAudio(false);
      stopSpeakerVoice();
      return;
    }
    setSelectedItem("");
    setPlayAudio(true);
    speakerVoiceMessage(item.audioText || "");
  };

  if (item.messageType === "AUDIO" && item.userID !== otherUserId)
    return <ChatUserAudio text={item.text} />;

  if (item.messageType === "AUDIO" && item.userID === otherUserId) {
    return (
      <ChatMessageItemAiAudio
        audioPath={item.text}
        setPlayAudio={handlePlayAudio}
        audioIsPlaying={playAudio}
        audioText={item.audioText || ""}
        handleLongPress={() => onPress(item)}
      />
    );
  }

  if (item?.messageType === "TEXT") {
    return (
      <Row
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
      </Row>
    );
  }

  return <></>;
};

export default ChatMessageItem;

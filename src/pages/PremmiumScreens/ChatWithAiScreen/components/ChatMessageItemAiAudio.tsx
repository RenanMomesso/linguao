import { Pressable, Alert } from "react-native";
import React from "react";
import calculateDuration from "@/utils/calculateDurationAudio";
import { Row } from "@/theme/GlobalComponents";
import Avatar from "@/components/Avatar/Avatar";
import Button from "@/components/Button/Button";
import AudioPlay from "@/components/AudioPlay/AudioPlay";
import Text from "@/components/Text";

interface ChatMessageItemAiAudio {
  audioText: string;
  audioIsPlaying: boolean;
  handleLongPress: () => void;
  setPlayAudio: () => void;
  audioPath: string;
}
const ChatMessageItemAiAudio = ({
  handleLongPress,
  audioPath,
  audioText,
  audioIsPlaying,
  setPlayAudio,
}: ChatMessageItemAiAudio) => {
  const [showTranslate, setShowTranslate] = React.useState(false);
  const [showTranscribe, setShowTranscribe] = React.useState(false);

  const handlePressTranscribe = () => {
    setShowTranscribe(!showTranscribe);
  };

  return (
    <>
      <Pressable onLongPress={handleLongPress} style={{ zIndex: 1 }}>
        <Row
          style={{
            padding: 10,
            borderRadius: 12,
            alignSelf: "flex-start",
            width: 300,
          }}>
          <Avatar size="small" />
          {/* <Waveform audioPath={item.text} duration={10} /> */}
          <AudioPlay
            audioPath={audioPath}
          />
        </Row>
        <Row>
          <Button
            backgroundColor="primary"
            buttonText="Translate"
            onPressButton={() => {
              Alert.alert("Translate", "Translate");
            }}
            textColor="white"
          />
          <Button
            backgroundColor="primary"
            buttonText="Transcribe"
            onPressButton={handlePressTranscribe}
            textColor="white"
          />
        </Row>
      </Pressable>
      {showTranscribe && (
        <Text size="text" align="left">
          {audioText}
        </Text>
      )}
    </>
  );
};

export default ChatMessageItemAiAudio;

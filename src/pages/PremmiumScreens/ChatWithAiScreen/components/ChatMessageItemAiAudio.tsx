import { Pressable, Alert, View } from "react-native";
import React, { useState, useCallback, useRef, memo } from "react";
import calculateDuration from "@/utils/calculateDurationAudio";
import { Column, Row } from "@/theme/GlobalComponents";
import Avatar from "@/components/Avatar/Avatar";
import Button from "@/components/Button/Button";
import AudioPlay from "@/components/AudioPlay/AudioPlay";
import Text from "@/components/Text";
import BottomSheet, {
  BottomSheetRefProps,
} from "@/components/BottomSheet/BottomSheet";
import { SettingsIcon } from "@/assets/images";
import { Message } from "../../../../API";

interface ChatMessageItemAiAudio {
  audioText: string;
  audioIsPlaying: boolean;
  handleLongPress?: () => void;
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
  const ref = React.useRef<BottomSheetRefProps>(null);

  const handlePressTranscribe = () => {
    setShowTranscribe(!showTranscribe);
  };

  return (
    <>
      <Pressable onLongPress={handleLongPress} style={{ zIndex: 1, gap: 10 }}>
        <Row
          style={{
            borderRadius: 12,
            alignSelf: "flex-start",
            width: 300,
          }}>
          <AudioPlay audioPath={audioPath} />
        </Row>
        <Column style={{ alignItems: "flex-start" }}>
          <Button
            icon={<SettingsIcon />}
            fullWidth
            buttonSize="small"
            backgroundColor="primary"
            buttonText="Menu"
            onPressButton={() => {
              handleLongPress && handleLongPress();
            }}
            textColor="white"
          />
        </Column>
        {/* <Row>
          
          <Button
            buttonSize="small"
            backgroundColor="primary"
            buttonText="Transcribe"
            onPressButton={handlePressTranscribe}
            textColor="white"
          />
        </Row> */}
      </Pressable>
      {showTranscribe && (
        <Text size="text" align="left">
          {audioText}
        </Text>
      )}
    </>
  );
};

export default memo(ChatMessageItemAiAudio);

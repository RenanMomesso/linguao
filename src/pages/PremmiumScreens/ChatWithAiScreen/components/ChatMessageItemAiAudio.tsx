import { Pressable, Alert, View } from "react-native";
import React, { useState, useCallback, useRef } from "react";
import calculateDuration from "@/utils/calculateDurationAudio";
import { Column, Row } from "@/theme/GlobalComponents";
import Avatar from "@/components/Avatar/Avatar";
import Button from "@/components/Button/Button";
import AudioPlay from "@/components/AudioPlay/AudioPlay";
import Text from "@/components/Text";
import BottomSheet, {
  BottomSheetRefProps,
} from "@/components/BottomSheet/BottomSheet";
import { MenuIcon, SettingsIcon } from "@/assets/images";
import { Message } from "../../../../API";
import { theme } from "@/theme/theme";

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
  return (
    <View
      style={{
        backgroundColor: theme.colors.greyScale100,
        borderRadius: 6,
        elevation:6,
        padding:6
      }}>
      <Pressable onLongPress={handleLongPress} style={{ zIndex: 1, gap: 10 }}>
        <Row
          style={{
            borderRadius: 12,
            alignSelf: "flex-start",
            width: 300,
          }}>
          <AudioPlay audioPath={audioPath} />
            <MenuIcon color="primary" width={20} height={20} />
        </Row>
        {/* <Row>
          <Button
            buttonSize="small"
            backgroundColor="primary"
            buttonText="Transcribe"
            onPressButton={() => {}}
            textColor="white"
          />
          <Button
            buttonSize="small"
            backgroundColor="primary"
            buttonText="Transcribe"
            onPressButton={() => {}}
            textColor="white"
          />
        </Row> */}
        <Column style={{ alignItems: "flex-start" }}>
          <Button
            icon={<MenuIcon color="white" width={20} />}
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
      </Pressable>
      {/* {false && (
        <Text size="text" align="left">
          {audioText}
        </Text>
      )} */}
    </View>
  );
};

export default ChatMessageItemAiAudio;

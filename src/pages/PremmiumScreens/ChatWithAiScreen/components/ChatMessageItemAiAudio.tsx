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
        backgroundColor: "white",
        borderRadius: 6,
        elevation: 6,
        padding: 6,
      }}>
      <Pressable onLongPress={handleLongPress} style={{ zIndex: 1, gap: 10 }}>
        <Row
          style={{
            borderRadius: 12,
            alignSelf: "flex-start",
            width: 300,
            gap: 4,
            maxHeight: 40,
          }}>
          <Avatar size="small" />
          <AudioPlay audioPath={audioPath} />
          <Pressable
            onPress={handleLongPress}
            style={{
              backgroundColor: theme.colors.primary,
              height: "100%",
              width: 40,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 8,
            }}>
            <MenuIcon color="white" width={20} height={20} />
          </Pressable>
        </Row>
      </Pressable>
    </View>
  );
};

export default ChatMessageItemAiAudio;

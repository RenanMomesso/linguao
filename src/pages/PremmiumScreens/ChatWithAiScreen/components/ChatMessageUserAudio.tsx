import { View, Text } from "react-native";
import React, { memo } from "react";
import Waveform from "@/pages/Home/components/WaveForm";
import calculateDuration from "@/utils/calculateDurationAudio";

interface ChatUserAudioProps {
  text: string;
}
const ChatUserAudio = ({ text }: ChatUserAudioProps) => {
  console.log("renderizei user chat audio")
  return (
    <View
      style={{
        padding: 10,
        borderRadius: 12,
        alignSelf: "flex-end",
        width: 300,
      }}>
      <Waveform audioPath={text} audioLength={calculateDuration(text, 2)} />
    </View>
  );
};

export default memo(ChatUserAudio);

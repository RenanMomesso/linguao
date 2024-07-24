import { View, Text } from "react-native";
import React, { memo } from "react";
import Waveform from "@/pages/Home/components/WaveForm";
import calculateDuration from "@/utils/calculateDurationAudio";
import AudioPlay from "@/components/AudioPlay/AudioPlay";

interface ChatUserAudioProps {
  text: string;
}
const ChatUserAudio = ({ text }: ChatUserAudioProps) => {
  console.log("renderizei user chat audio");
  return (
    <View
      style={{
        borderRadius: 18,
        alignSelf: "flex-end",
        width: 300,
      }}>
      <AudioPlay audioPath={text} otherUser />
    </View>
  );
};

export default memo(ChatUserAudio);

import React from "react";
import { Pressable } from "react-native";
import LottieView from "lottie-react-native";
import { theme } from "@/theme/theme";
import jsonLottie from "@/assets/json/Lc8090d9Br.json";

interface SpeakerButtonProps {
  soundPlaying: boolean;
  handleSpeak: () => void;
}
const SpeakerButton = ({ soundPlaying, handleSpeak }: SpeakerButtonProps) => {
  return (
    <Pressable
      style={{
        padding: 10,
        borderRadius: 50,
        backgroundColor: theme.colors.primary,
      }}
      onPress={handleSpeak}>
      <LottieView
        progress={100}
        source={jsonLottie}
        autoPlay={soundPlaying}
        loop={false}
        style={{
          height: 25,
          width: 25,
        }}
      />
    </Pressable>
  );
};

export default SpeakerButton;

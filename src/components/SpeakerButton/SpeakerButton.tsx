import React from "react";
import { Pressable } from "react-native";
import LottieView from "lottie-react-native";
import { theme } from "@/theme/theme";
import jsonLottie from "@/assets/json/Lc8090d9Br.json";
export type Size = "small" | "medium" | "large";
interface SpeakerButtonProps {
  soundPlaying: boolean;
  handleSpeak: () => void;
  size?: Size;
}
const SpeakerButton = ({
  soundPlaying,
  handleSpeak,
  size = "medium",
}: SpeakerButtonProps) => {
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
          height: size === "small" ? 15 : size === "medium" ? 25 : 30,
          width: size === "small" ? 15 : size === "medium" ? 25 : 30,
        }}
      />
    </Pressable>
  );
};

export default SpeakerButton;

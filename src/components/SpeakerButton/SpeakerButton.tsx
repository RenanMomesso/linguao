import React from "react";
import { Pressable, PressableProps } from "react-native";
import LottieView from "lottie-react-native";
import { theme } from "@/theme/theme";
import jsonLottie from "@/assets/json/Lc8090d9Br.json";
export type Size = "small" | "medium" | "large";
interface SpeakerButtonProps extends PressableProps {
  soundPlaying: boolean;
  handleSpeak: () => void;
  size?: Size;
}
const SpeakerButton = ({
  soundPlaying,
  handleSpeak,
  size = "medium",
  ...rest
}: SpeakerButtonProps) => {
  return (
    <Pressable
      style={{
        padding: 10,
        borderRadius: 50,
        backgroundColor: theme.colors.primary,
        width: "100%"
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

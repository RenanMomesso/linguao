import React from "react";
import { Pressable, PressableProps, View } from "react-native";
import LottieView from "lottie-react-native";
import { theme } from "@/theme/theme";
import jsonLottie from "@/assets/json/Lc8090d9Br.json";
import Text from "../Text";
import { PauseIcon, PlayIcon } from "@/assets/images";
export type Size = "small" | "medium" | "large";
interface SpeakerButtonProps extends PressableProps {
  soundPlaying: boolean;
  handleSpeak: () => void;
  size?: Size;
  duration: number;
}
const SpeakerButton = ({
  soundPlaying,
  handleSpeak,
  size = "medium",
  duration,
  ...rest
}: SpeakerButtonProps) => {
  return (
    <Pressable
      style={{
        padding: 10,
        borderRadius: 50,
        backgroundColor: theme.colors.primary,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
      }}
      onPress={handleSpeak}>
      {soundPlaying ? (
        <PauseIcon width={25} height={25} />
      ) : (
        <PlayIcon width={25} height={25} />
      )}

      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          height: 2,
        }}></View>
      <Text>{duration}</Text>
    </Pressable>
  );
};

export default SpeakerButton;

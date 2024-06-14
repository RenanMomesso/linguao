import { theme } from "@/theme/theme";
import React from "react";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

type ColorKey = keyof typeof theme.colors;

const AnimatedBottom = ({
  children,
  bgColor = "Purple",
  height = 190,
}: {
  children: React.ReactNode;
  bgColor: ColorKey;
  height?: number;
}) => {
  return (
    <Animated.View
      entering={FadeInDown.duration(200)}
      style={{
        height: height,
        backgroundColor: theme.colors[bgColor] as string,
        position: "absolute",
        bottom: 0,
        width: 400,
        zIndex: 100,
        padding: 20,
        gap:10
      }}>
      {children}
    </Animated.View>
  );
};

export default AnimatedBottom;

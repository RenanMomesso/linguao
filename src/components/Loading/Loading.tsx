import React from "react";
import Animated, {
  Easing,
  useSharedValue,
  withRepeat,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";
import { ForwardedLoadingIcon } from "@/assets/images";

const AnimatedLoadingIcon =
  Animated.createAnimatedComponent(ForwardedLoadingIcon);

const LoadingIcon = () => {
  const rotation = useSharedValue(0);

  rotation.value = withRepeat(
    withTiming(360, {
      duration: 2000,
      easing: Easing.linear,
    }),
    -1,
    false,
  );

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${rotation.value}deg`,
        },
      ],
    };
  });
  return <AnimatedLoadingIcon style={animatedStyle} />;
};

export default LoadingIcon;

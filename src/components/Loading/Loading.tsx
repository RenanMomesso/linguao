import React from "react";
import Animated, {
  Easing,
  useSharedValue,
  withRepeat,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";
import { LoadingIconSvg } from "@/assets/images";
import { View } from "react-native";


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
  return (
    <View
      style={{
        flex: 1,
        position: "absolute",
        zIndex: 999,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        width: "100%",
      }}>
      <Animated.View style={animatedStyle}>
        <LoadingIconSvg />
      </Animated.View>
    </View>
  );
};

export default LoadingIcon;

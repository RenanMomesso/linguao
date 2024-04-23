import { View, Text } from "react-native";
import React from "react";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

const AnimatedBottom = () => {
    // TODO

    // share answer with others
    // save answer
    // report bug

  return (
    <Animated.View
      entering={FadeInDown.duration(200)}
      style={{
        height: 150,
        backgroundColor: "red",
        position: "absolute",
        bottom: 0,
        width: 400,
        zIndex:10
      }}>
      <Text>Success</Text>
    </Animated.View>
  );
};

export default AnimatedBottom;

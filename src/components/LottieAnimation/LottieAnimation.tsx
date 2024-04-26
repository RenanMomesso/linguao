import React, { useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";
import LottieView from "lottie-react-native";

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

export default function ControllingAnimationProgress({
  lottieJsonPath,
}: {
  lottieJsonPath: any;
}) {
  const animationProgress = useRef(new Animated.Value(0));
  const animationRef = useRef<LottieView>(null);

  useEffect(() => {
    // Animated.timing(animationProgress.current, {
    //   toValue: 1,
    //   duration: 5000,
    //   easing: Easing.linear,
    //   useNativeDriver: false,
    // }).start();
    animationRef.current?.play(111,120)
  }, []);

  return (
    <LottieView
      //   autoPlay
      ref={animationRef}
      loop
      style={{
        width: 30,
        height: 30,
      }}
      source={lottieJsonPath}
    />
  );
}

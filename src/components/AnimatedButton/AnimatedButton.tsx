import React, { useRef, useEffect } from "react";
import { TextInput, View, Text, Pressable, Alert } from "react-native";
import styled from "styled-components/native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { theme } from "@/theme/theme";
import ElpiseOrange from "@/assets/images/elipseOrange.svg";
import Union from "@/assets/images/Union.svg";
import StartIcon from "@/assets/images/StartIcon.svg";

type ButtonStatus = "todo" | "done" | "blocked";
interface Button3DProps {
  bgColor?: string;
  bgShadowColor?: string;
  onPress?: () => void;
  rest?: any;
  status?: ButtonStatus;
  children?: React.ReactNode;
  showStart?: boolean;
}

const Button3D: React.FC<Button3DProps> = ({
  bgColor = "#FFC107",
  bgShadowColor = "#FF981F",
  onPress = () => {},
  status = "blocked",
  showStart = false,
  children,
  ...rest
}) => {
  const translateY = useSharedValue(0);
  const scale = useSharedValue(1);

  // define onPressIn and onPressOut handlers
  const onPressIn = () => {
    translateY.value = withSpring(15);
    scale.value = withSpring(0.96);
  };

  const onPressOut = () => {
    translateY.value = withSpring(0);
    scale.value = withSpring(1);
  };

  // create the animated style
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }, { scale: scale.value }],
    };
  });

  useEffect(() => {
    let interval: any = null;
    let interval2: any = null;
    if (showStart) {
      interval = setInterval(() => {
        translateY.value = withSpring(15);
        scale.value = withSpring(0.96);
      }, 4000);

      interval2 = setInterval(() => {
        translateY.value = withSpring(0);
        scale.value = withSpring(1);
      }, 5400);
    }

    return () => {
      clearInterval(interval);
      clearInterval(interval2);
    };
  }, [showStart]);

  return (
    <>
      <Container {...rest}>
        <AnimatedPressable
          disabled={status === "blocked"}
          onPressIn={onPressIn}
          onPressOut={onPressOut}
          style={[
            {
              backgroundColor:
                status === "blocked"
                  ? theme.colors.greyScale300
                  : status === "todo"
                  ? theme.colors.primary
                  : bgColor,
            },
            animatedStyle,
          ]}
          onPress={onPress}
          bgColor={
            status === "blocked"
              ? theme.colors.greyScale300
              : status === "todo"
              ? theme.colors.primary
              : bgColor
          }>
          {showStart && (
            <StartIcon
              style={{ position: "absolute", top: -60, zIndex: 9999 }}
            />
          )}
          <ElpiseOrange
            color={
              status === "blocked"
                ? theme.colors.greyScale400
                : status === "todo"
                ? theme.colors.primary400
                : theme.colors.secondary300
            }
            style={{ position: "absolute", left: 10, top: 10 }}
          />
          <Union
            color={
              status === "blocked"
                ? theme.colors.greyScale400
                : status === "todo"
                ? "white"
                : "white"
            }
          />
        </AnimatedPressable>

        <ShadowView
          bgShadowColor={
            status === "blocked"
              ? theme.colors.greyScale400
              : status === "todo"
              ? "#543ACC"
              : bgShadowColor
          }
        />
      </Container>
    </>
  );
};

const Container = styled(View)`
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  width: 120px;
  height: 90px;
  border-radius: 100px;
`;

const ShadowView = styled(View)<{ bgShadowColor: string }>`
  width: 100%;
  height: 99%;
  background-color: ${({ bgShadowColor }) => bgShadowColor};
  position: absolute;
  bottom: -15px;
  z-index: 0;
  border-radius: 100px;
`;

const CustomPressable = styled(Pressable)<{ bgColor: string }>`
  width: 100%;
  height: 100%;
  background-color: ${({ bgColor }) => bgColor};
  position: absolute;
  bottom: 0;
  z-index: 1;
  border-radius: 100px;
  transform: scaleX(3);
  justify-content: center;
  align-items: center;
`;
const AnimatedPressable = Animated.createAnimatedComponent(CustomPressable);
export default Button3D;

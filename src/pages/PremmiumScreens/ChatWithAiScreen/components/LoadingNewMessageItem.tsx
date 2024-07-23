import { loadingLottieAnimation } from "@/assets/json";
import Text from "@/components/Text";
import { Row } from "@/theme/GlobalComponents";
import { theme } from "@/theme/theme";
import LottieView from "lottie-react-native";
import React from "react";

const LoadingNewMessageItem = () => {
  return (
    <Row
      style={{
        padding: 8,
        marginVertical: 8,
        backgroundColor: theme.colors.white,
        alignSelf: "flex-start",
        borderRadius: 8,
        elevation: 2,
        borderWidth:1,
        borderColor:theme.colors.greyScale200,
      }}>
      <LottieView
        autoPlay
        loop
        source={loadingLottieAnimation}
        style={{ width: 30, top: 2, height: 20, transform: [{ scale: 5 }] }}
      />
    </Row>
  );
};

export default LoadingNewMessageItem;

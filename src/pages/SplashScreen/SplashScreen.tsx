import React, { useCallback } from "react";
import { Container } from "@/theme/GlobalComponents";
import LingoImg from "@/assets/images/LingoImg.svg";
import TextComponent from "@/components/Text";
import LoadingIcon from "@/components/Loading/Loading";
import { View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useTypedNavigation } from "@/hooks/useNavigationTyped";

const SplashScreen = () => {
  const navigation = useTypedNavigation();
  useFocusEffect(
    useCallback(() => {
      setTimeout(() => {
        navigation.navigate("WelcomeScreen");
      }, 2000);
    }, []),
  );

  return (
    <Container
      backgroundColor="white"
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}>
      <LingoImg />
      <TextComponent size="heading1" weight="bold">
        Elingo
      </TextComponent>
      <View
        style={{
          position: "absolute",
          bottom: "10%",
        }}>
        <LoadingIcon />
      </View>
    </Container>
  );
};

export default SplashScreen;

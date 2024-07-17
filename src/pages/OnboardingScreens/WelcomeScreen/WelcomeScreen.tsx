import React from "react";
import { BottomContainer, Container } from "@/theme/GlobalComponents";
import HiThereImgSvg from "@/assets/images/HiThereImg.svg";
import ElingoIcon from "@/assets/images/ElingoIcon.svg";
import TextComponent from "@/components/Text";
import Animated, { FadeInUp } from "react-native-reanimated";
import BarProgress from "@/components/BarProgress/BarProgress";
import Button from "@/components/Button/Button";
import { useTypedNavigation } from "@/hooks/useNavigationTyped";

const WelcomeScreen = () => {
  const navigation = useTypedNavigation();

  const navigateToSelectLanguageScreen = () => {
    navigation.navigate("SelectLanguageScreen");
  };

  return (
    <Container
      backgroundColor="white"
      style={{
        padding: 20,
      }}>
      {/* <BarProgress percentageStatus={0} /> */}
      <Container
        backgroundColor="white"
        style={{
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 30,
          marginTop: 30,
        }}>
        <Animated.View entering={FadeInUp.duration(1000)}>
          <HiThereImgSvg />
        </Animated.View>
        <ElingoIcon style={{ marginRight: -20 }} />
        <TextComponent color="primary" size="heading1">
          Elingo
        </TextComponent>
        <TextComponent size="heading6" align="center">
          Learn languages whenever and {"\n"} wherever you want. It's free and
          forever.
        </TextComponent>
      </Container>
      <BottomContainer>
        <Button
          buttonText="GET STARTED"
          onPressButton={navigateToSelectLanguageScreen}
          backgroundColor="primary"
          textColor="white"
          fullWidth
        />
        <Button
          buttonText="I ALREADY HAVE AN ACCOUNT"
          onPressButton={() => {
            navigation.navigate("SigninScreen");
          }}
          fullWidth
          backgroundColor="primary100"
          textColor="primary"
        />
      </BottomContainer>
    </Container>
  );
};

export default WelcomeScreen;

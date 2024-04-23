import React, { useEffect, useState } from "react";
import { BottomContainer, Container } from "@/theme/GlobalComponents";
import BarProgress from "@/components/BarProgress/BarProgress";
import Animated, { FadeInUp } from "react-native-reanimated";
import { theme } from "@/theme/theme";
import Button from "@/components/Button/Button";
import ElingoBaloons from "@/components/ElingoBaloons/ElingoBaloons";
import HowMuchEnglish from "@/assets/images/HowMuchEnglish.svg";
import { useNavigation } from "@react-navigation/native";

import TextComponent from "@/components/Text";
import { levels } from "@/utils/levels";
import Selectable from "@/components/Selectable/Selectable";
import EmptyBaloon from "@/assets/images/EmptyBaloon.svg";
import { View } from "react-native";
import { useTypedNavigation } from "@/hooks/useNavigationTyped";

const LanguageLevelScreen = () => {
  const navigation = useTypedNavigation();
  const handleContinue = () => {
    navigation.navigate("ReasonStudyScreen");
  };
  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");

  return (
    <Container
      style={{
        padding: 20,
        backgroundColor: theme.colors.white,
      }}>
      <BarProgress percentageStatus={30} />
      <Container
        style={{
          marginTop: 20,
          justifyContent: "flex-start",
          backgroundColor: theme.colors.white,
        }}>
        <Animated.View
          entering={FadeInUp.duration(1000)}
          style={{
            paddingBottom: 20,
            borderBottomWidth: 1,
            borderBottomColor: theme.colors.greyScale400,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <ElingoBaloons
            BaloonImg={() => (
              <View>
                <EmptyBaloon />
                <TextComponent
                  size="heading6"
                  weight="bold"
                  align="justify"
                  style={{ marginTop: 20, position: "absolute", left: 40 }}>
                  How much English {"\n"}do you know?
                </TextComponent>
              </View>
            )}
          />
        </Animated.View>
        <Container
          backgroundColor="white"
          style={{
            gap: 20,
            marginTop: 20,
          }}>
          {levels.map(item => (
            <Selectable>
              <item.Icon />
              <TextComponent size="heading5" align="left" style={{ flex: 1 }}>
                {item.title}
              </TextComponent>
            </Selectable>
          ))}
        </Container>
      </Container>
      <BottomContainer>
        <Button
          buttonText="Continue"
          onPressButton={handleContinue}
          backgroundColor="primary"
          textColor="white"
        />
      </BottomContainer>
    </Container>
  );
};

export default LanguageLevelScreen;

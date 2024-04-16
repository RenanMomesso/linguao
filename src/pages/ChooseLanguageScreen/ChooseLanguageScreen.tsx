import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { BottomContainer, Container } from "@/theme/GlobalComponents";
import BarProgress from "@/components/BarProgress/BarProgress";
import Animated, { FadeInUp } from "react-native-reanimated";
import ElingoAndTextRight from "@/assets/images/ElingoAndTextRight.svg";
import { theme } from "@/theme/theme";
import LanguageList from "@/components/LanguageList/LanguageList";
import TextComponent from "@/components/Text";
import LanguageItem from "@/components/LanguageItem/LanguageItem";
import Button from "@/components/Button/Button";
import ElingoBaloons from "@/components/ElingoBaloons/ElingoBaloons";
import BaloonTextOne from "@/assets/images/BaloonText1.svg";

const ChooseLanguageScreen = () => {
  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState({
    languages: "",
    flags: "",
  } as any);

  const getCountriesFlag = async () => {
    try {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=languages,flags",
      );
      const data = await response.json();
      const responseArray = data.map((item: any) => ({
        languages: item.languages[Object.keys(item.languages)[0]],
        flags: item.flags.png,
      }));

      const removeDuplicateds = responseArray.filter(
        (item: any, index: any, self: any) =>
          index === self.findIndex((t: any) => t.languages === item.languages),
      );
      setLanguages(removeDuplicateds);
    } catch (error) {
      console.log("Error", error);
    }
  };
  useEffect(() => {
    getCountriesFlag();
  }, []);

  return (
    <Container
      style={{
        padding: 20,
        backgroundColor: theme.colors.white,
      }}>
      <BarProgress />
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
          <ElingoBaloons BaloonImg={BaloonTextOne} />
        </Animated.View>
        {selectedLanguage.languages && (
          <>
            <TextComponent
              size="heading5"
              style={{ marginVertical: 20 }}
              weight="bold"
              align="left">
              Your native language
            </TextComponent>
            <LanguageItem
              selectedLanguage={selectedLanguage}
              itemText={selectedLanguage.languages}
              itemImage={selectedLanguage.flags}
              onPressItem={() => {}}
            />
          </>
        )}
        <TextComponent
          size="heading5"
          style={{ marginVertical: 20 }}
          weight="bold"
          align="left">
          App language
        </TextComponent>
        <LanguageList
          selectedLanguage={selectedLanguage}
          data={languages}
          setSelectedLanguage={setSelectedLanguage}
        />
      </Container>
      <BottomContainer>
        <Button
          buttonText="Continue"
          onPressButton={() => {}}
          backgroundColor="primary"
          textColor="white"
        />
      </BottomContainer>
    </Container>
  );
};

export default ChooseLanguageScreen;

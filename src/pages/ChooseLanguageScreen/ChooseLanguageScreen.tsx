import React, { useEffect, useState } from "react";
import { BottomContainer, Container } from "@/theme/GlobalComponents";
import BarProgress from "@/components/BarProgress/BarProgress";
import Animated, { FadeInUp } from "react-native-reanimated";
import { theme } from "@/theme/theme";
import Button from "@/components/Button/Button";
import ElingoBaloons from "@/components/ElingoBaloons/ElingoBaloons";
import WhatLearn from "@/assets/images/WhatLearn.svg";
import LanguageList from "@/components/LanguageList/LanguageList";
import { useTypedNavigation } from "@/hooks/useNavigationTyped";
import { useAppDispatch } from "@/store";
import { setTargetLanguage, updateUser } from "@/store/reducer/userReducer";

const ChooseLanguageScreen = () => {
  
  const dispatch = useAppDispatch();
  const navigation = useTypedNavigation();
  const handleContinue = () => {
    dispatch(setTargetLanguage(selectedLanguage.languages));
    navigation.navigate("LanguageLevelScreen");
  };
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

  const disabledContinue = selectedLanguage.languages === "";

  return (
    <Container
      style={{
        padding: 20,
        backgroundColor: theme.colors.white,
      }}>
      <BarProgress percentageStatus={20} />
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
          <ElingoBaloons BaloonImg={WhatLearn} />
        </Animated.View>
        <LanguageList
          selectedLanguage={selectedLanguage}
          data={languages}
          setSelectedLanguage={setSelectedLanguage}
        />
      </Container>
      <BottomContainer>
        <Button
          buttonText="Continue"
          onPressButton={handleContinue}
          backgroundColor={
            disabledContinue ? "greyScale400" : "primary"
          } 
          disabled={disabledContinue}
          textColor="white"
        />
      </BottomContainer>
    </Container>
  );
};

export default ChooseLanguageScreen;

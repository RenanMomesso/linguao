import React, { useEffect, useState } from "react";
import { BottomContainer, Container } from "@/theme/GlobalComponents";
import BarProgress from "@/components/BarProgress/BarProgress";
import Animated, { FadeInUp } from "react-native-reanimated";
import { theme } from "@/theme/theme";
import LanguageList from "@/components/LanguageList/LanguageList";
import TextComponent from "@/components/Text";
import LanguageItem from "@/components/LanguageItem/LanguageItem";
import Button from "@/components/Button/Button";
import ElingoBaloons from "@/components/ElingoBaloons/ElingoBaloons";
import BaloonTextOne from "@/assets/images/BaloonTextOne.svg";
import { useTypedNavigation } from "@/hooks/useNavigationTyped";
import { getCountryLanguagesFlags } from "@/services/countryFlags";
import { languageProps } from "@/dtos/languages";

const SelectLanguageScreen = () => {
  const navigation = useTypedNavigation();
  const handleContinue = () => {
    navigation.navigate("ChooseLanguageScreen");
  };
  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState<languageProps>({
    languages: "",
    flags: "",
  });

  const getCountriesFlag = async () => {
    try {
      const flagsLanguages = await getCountryLanguagesFlags();
      const removeDuplicateds = flagsLanguages.filter(
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
      <BarProgress percentageStatus={10} />
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
          onPressButton={handleContinue}
          backgroundColor="primary"
          textColor="white"
        />
      </BottomContainer>
    </Container>
  );
};

export default SelectLanguageScreen;

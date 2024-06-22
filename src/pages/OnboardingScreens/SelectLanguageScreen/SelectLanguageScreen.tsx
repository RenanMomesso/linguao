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
import { useAppDispatch, useAppSelector } from "@/store";
import { setUserNativeLanguage, updateUser } from "@/store/reducer/userReducer";

const SelectLanguageScreen = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.user);
  const navigation = useTypedNavigation();

  const handleContinue = () => {
    if(!user.user?.nativeLanguange || !user.user?.nativeLanguangeFlag) {
      return;
    }
    navigation.navigate("ChooseLanguageScreen");
  };
  const [languages, setLanguages] = useState([]);
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

  const handleSelectLanguage = (language: languageProps) => {
    dispatch(
      setUserNativeLanguage({
        nativeLanguange: language.languages,
        nativeLanguangeFlag: language.flags,
      }),
    );
  };

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
          <ElingoBaloons 
            baloonText="What is your native language?"
          />
        </Animated.View>
        {user.user?.nativeLanguange && (
          <>
            <TextComponent
              size="heading5"
              style={{ marginVertical: 20 }}
              weight="bold"
              align="left">
              Your native language
            </TextComponent>
            <LanguageItem
              selectedLanguage={{
                languages: user.user?.nativeLanguange,
                flags: user.user?.nativeLanguangeFlag,
              }}
              itemText={user.user?.nativeLanguange}
              itemImage={user.user.nativeLanguangeFlag}
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
          selectedLanguage={{
            languages: user.user?.nativeLanguange,
            flags: user.user?.nativeLanguangeFlag,
          }}
          data={languages}
          setSelectedLanguage={handleSelectLanguage}
        />
      </Container>
      <BottomContainer>
        <Button
          disabled={!user.user?.nativeLanguange || !user.user?.nativeLanguangeFlag}
          buttonText="Continue"
          onPressButton={handleContinue}
          backgroundColor={user.user?.nativeLanguange && user.user?.nativeLanguangeFlag ? "primary" : "greyScale400"}
          textColor="white"
        />
      </BottomContainer>
    </Container>
  );
};

export default SelectLanguageScreen;

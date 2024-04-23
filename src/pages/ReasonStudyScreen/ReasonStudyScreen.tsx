import { View, Text, FlatList } from "react-native";
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
import EmptyBaloon from "@/assets/images/EmptyBaloon.svg";
import { studyReasons } from "@/utils/studyReasons";
import Selectable from "@/components/Selectable/Selectable";
import { useTypedNavigation } from "@/hooks/useNavigationTyped";

const ReasonStudyScreen = () => {
  const navigation = useTypedNavigation();
  const handleContinue = () => {
    navigation.navigate("StudyTargetScreen");
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

  return (
    <Container
      style={{
        padding: 20,
        backgroundColor: theme.colors.white,
      }}>
      <BarProgress percentageStatus={40} />
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
                  Why are you {"\n"}studying English?
                </TextComponent>
              </View>
            )}
          />
        </Animated.View>

        <FlatList
          contentContainerStyle={{
            paddingVertical: 20,
          }}
          ItemSeparatorComponent={() => {
            return <View style={{ marginVertical: 10 }} />;
          }}
          data={studyReasons}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <Selectable>
              <TextComponent size="heading4" align="left">
                {item.icon}
              </TextComponent>
              <TextComponent size="heading5" align="left">
                {item.title}
              </TextComponent>
            </Selectable>
          )}
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

export default ReasonStudyScreen;

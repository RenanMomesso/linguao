import { View, Text, SectionList, Pressable } from "react-native";
import React, { useCallback, useEffect } from "react";
import LinguaoDoubt from "@/assets/images/LinguaoDoubt.svg";
import AnimatedButton from "@/components/AnimatedButton/AnimatedButton";
import { useTypedNavigation } from "@/hooks/useNavigationTyped";
import { useFocusEffect } from "@react-navigation/native";
import { theme } from "@/theme/theme";
import TextComponent from "@/components/Text";
import LottieView from "lottie-react-native";

const homePlaysData = [
  {
    title: "Lesson 2 - Initial Training",
    description: "Describing the plays",
    id: 1,
    data: [
      {
        id: 1,
        title: "The Lion King",
        location: "Lyceum Theatre",
        status: "done",
      },
      {
        id: 2,
        title: "Wicked",
        location: "Apollo Victoria Theatre",

        status: "todo",
      },
      {
        id: 3,
        title: "The Phantom of the Opera",
        location: "Her Majesty's Theatre",
        status: "blocked",
      },
    ],
  },
  {
    id: 2,
    title: "New",
    description: "bla",
    data: [
      {
        id: 4,
        title: "Hamilton",
        location: "Victoria Palace Theatre",

        status: "blocked",
      },
      {
        id: 5,
        title: "Six",
        location: "Vaudeville Theatre",

        status: "blocked",
      },
      {
        id: 6,
        title: "Mamma Mia!",
        location: "Novello Theatre",
        status: "blocked",
      },
    ],
  },
  {
    id: 3,
    title: "Trending",
    data: [
      {
        id: 7,
        title: "Les Misérables",
        location: "Sondheim Theatre",
        status: "blocked",
      },
      {
        id: 8,
        title: "The Book of Mormon",
        location: "Prince of Wales Theatre",
        status: "blocked",
      },
      {
        id: 9,
        title: "Mary Poppins",
        location: "Prince Edward Theatre",
        status: "blocked",
      },
      {
        id: 10,
        title: "Matilda",
        location: "Cambridge Theatre",
        status: "blocked",
      },
      {
        id: 11,
        title: "The Play That Goes Wrong",
        status: "blocked",
        location: "Duchess Theatre",
      },
      {
        id: 12,
        title: "The king",
        location: "Lyceum Theatre",
        status: "blocked",
      },
    ],
  },
];

const HomePlays = () => {
  const navigation = useTypedNavigation();

  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({
        display: "flex",
      });
    }, []),
  );

  return (
    <SectionList
      showsVerticalScrollIndicator={false}
      sections={homePlaysData}
      ListFooterComponent={() => <View style={{ height: 100 }} />}
      renderSectionHeader={({ section }) => (
        <>
          <View
            style={{
              backgroundColor: "orange",
              padding: 10,
              borderBottomColor: "black",
              marginVertical: 10,
              height: 100,
              marginBottom: 40,
              display: "flex",
              gap: 20,
            }}>
            <TextComponent
              size="heading5"
              align="left"
              color="white"
              weight="bold">
              {section.title}
            </TextComponent>
            <TextComponent size="heading6" align="left" color="white">
              {section.description}
            </TextComponent>
            <Pressable style={{ position: "absolute", right: 20, top: 50 }}>
              <TextComponent size="heading6" align="left" color="white">
                See all
              </TextComponent>
            </Pressable>
          </View>
        </>
      )}
      ItemSeparatorComponent={() => (
        <View
          style={{
            height: 30,
          }}
        />
      )}
      SectionSeparatorComponent={() => (
        <View
          style={{
            height: 30,
          }}
        />
      )}
      renderItem={({ item, index, section }) => {
        return (
          <View
            style={{
              position: "relative",
              marginLeft: index < 3 ? 50 * (index + 1) : 50 * (index - 1),
              alignItems: "center",
              flexDirection: "row",
            }}>
            <AnimatedButton
              status={item.status as any}
              showStart={
                index === 1 && section.title === "Lesson 2 - Initial Training"
              }
              onPress={() => {
                navigation.navigate("ExercicesLoading");
                navigation.getParent()?.setOptions({
                  tabBarStyle: {
                    display: "none",
                  },
                });
              }}
            />
            {/* {index === 1 && (
              <LinguaoDoubt
                style={{ position: "absolute", zIndex: 99, right: 10 }}
              />
            )} */}

            {index === 1 && section.id === 1 && (
              <LinguaoDoubt
                style={{ position: "absolute", zIndex: 99, right: 10 }}
              />
            )}
            {index === 1 && section.id === 2 && (
              <LottieView
                style={{
                  position: "absolute",
                  zIndex: 99,
                  right: 0,
                  height: 200,
                  width: 200,
                }}
                source={require("../../../../assets/json/ExampleAnimationLottie.json")}
                autoPlay
                loop
              />
            )}
            {index === 1 && section.id === 3 && (
              <LottieView
                style={{
                  position: "absolute",
                  zIndex: 99,
                  right: 0,
                  height: 200,
                  width: 200,
                }}
                source={require("../../../../assets/json/Animation2.json")}
                autoPlay
                loop
              />
            )}
            {index === 4 && section.id === 3 && (
              <LottieView
                style={{
                  position: "absolute",
                  zIndex: 99,
                  left: -180,
                  height: 200,
                  width: 200,
                }}
                source={require("../../../../assets/json/Animation2.json")}
                autoPlay
                loop
              />
            )}
          </View>
        );
      }}
    />
  );
};

export default HomePlays;

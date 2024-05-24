import { View, Text, SectionList } from "react-native";
import React, { useCallback, useEffect } from "react";
import LinguaoDoubt from "@/assets/images/LinguaoDoubt.svg";
import AnimatedButton from "@/components/AnimatedButton/AnimatedButton";
import { useTypedNavigation } from "@/hooks/useNavigationTyped";
import { useFocusEffect } from "@react-navigation/native";
import { theme } from "@/theme/theme";

const homePlaysData = [
  {
    title: "Popular",
    data: [
      {
        id: 1,
        title: "The Lion King",
        location: "Lyceum Theatre",
      },
      {
        id: 2,
        title: "Wicked",
        location: "Apollo Victoria Theatre",
      },
      {
        id: 3,
        title: "The Phantom of the Opera",
        location: "Her Majesty's Theatre",
      },
    ],
  },
  {
    title: "New",
    data: [
      {
        id: 4,
        title: "Hamilton",
        location: "Victoria Palace Theatre",
      },
      {
        id: 5,
        title: "Six",
        location: "Vaudeville Theatre",
      },
      {
        id: 6,
        title: "Mamma Mia!",
        location: "Novello Theatre",
      },
    ],
  },
  {
    title: "Trending",
    data: [
      {
        id: 7,
        title: "Les Misérables",
        location: "Sondheim Theatre",
      },
      {
        id: 8,
        title: "The Book of Mormon",
        location: "Prince of Wales Theatre",
      },
      {
        id: 9,
        title: "Mary Poppins",
        location: "Prince Edward Theatre",
      },
      {
        id: 10,
        title: "Matilda",
        location: "Cambridge Theatre",
      },
      {
        id: 11,
        title: "The Play That Goes Wrong",
        location: "Duchess Theatre",
      },
      {
        id: 12,
        title: "The king",
        location: "Lyceum Theatre",
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
      sections={homePlaysData}
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
            }}>
            
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
              
              showStart={index < 1}
              onPress={() => {
                navigation.navigate("ExercicesLoading");
                navigation.getParent()?.setOptions({
                  tabBarStyle: {
                    display: "none",
                  },
                });
              }}
            />
            {index === 1 && (
              <LinguaoDoubt
                style={{ position: "absolute", zIndex: 99, right: 0 }}
              />
            )}
          </View>
        );
      }}
    />
  );
};

export default HomePlays;

import React, { useEffect, useState } from "react";
import { BottomContainer, Container } from "@/theme/GlobalComponents";
import BarProgress from "@/components/BarProgress/BarProgress";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import { theme } from "@/theme/theme";
import Button from "@/components/Button/Button";
import ElingoBaloons from "@/components/ElingoBaloons/ElingoBaloons";
import TextComponent from "@/components/Text";
import { levels } from "@/utils/levels";
import Selectable from "@/components/Selectable/Selectable";
import EmptyBaloon from "@/assets/images/EmptyBaloon.svg";
import { View } from "react-native";
import { useTypedNavigation } from "@/hooks/useNavigationTyped";
import { useAppSelector } from "@/store";
import { useDispatch } from "react-redux";
import { setUserLevel } from "@/store/reducer/userReducer";

const LanguageLevelScreen = () => {
  const dispatch = useDispatch();
  const user = useAppSelector(state => state.user);
  const navigation = useTypedNavigation();
  const handleContinue = () => {
    navigation.navigate("ReasonStudyScreen");
  };

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
                  How much {user.user.targetLanguange} {"\n"}do you know?
                </TextComponent>
              </View>
            )}
          />
        </Animated.View>
        <Animated.View style={{ flex: 1 }} entering={FadeInDown.duration(900)}>
          <Container
            backgroundColor="white"
            style={{
              gap: 20,
              marginTop: 20,
            }}>
            {levels.map(item => (
              <Selectable
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 20,
                  borderRadius: 8,
                  borderWidth: 1,
                  borderColor: theme.colors.greyScale400,
                  backgroundColor:
                    item.title === user.user.level
                      ? theme.colors.primary200
                      : theme.colors.white,
                }}
                onPress={() => dispatch(setUserLevel(item.title))}>
                <item.Icon />
                <TextComponent size="heading5" align="left" style={{ flex: 1 }}>
                  {item.title}
                </TextComponent>
              </Selectable>
            ))}
          </Container>
        </Animated.View>
      </Container>
      <BottomContainer>
        <Button
          buttonText="Continue"
          onPressButton={handleContinue}
          backgroundColor={user.user.level ? "primary" : "greyScale400"}
          textColor="white"
          disabled={!user.user.level}
        />
      </BottomContainer>
    </Container>
  );
};

export default LanguageLevelScreen;

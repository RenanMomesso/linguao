import { View, Text } from "react-native";
import React, { useCallback, useEffect } from "react";
import { Container } from "@/theme/GlobalComponents";
import LinguaoMeditation from "@/assets/images/LinguaoMeditation.svg";
import { useTypedNavigation } from "@/hooks/useNavigationTyped";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { ExercisesStack } from "@/interface/navigation.interface";

const LoadingExercisesScreen = () => {
  const navigation = useNavigation<ExercisesStack>();

  useFocusEffect(
    useCallback(() => {
      setTimeout(() => {
        navigation.navigate("WhatDoesTheAudioSayScreen");
      }, 2000);
    }, []),
  );

  return (
    <Container
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}>
      <LinguaoMeditation />
    </Container>
  );
};

export default LoadingExercisesScreen;

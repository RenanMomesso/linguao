import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Container } from "@/theme/GlobalComponents";
import LinguaoMeditation from "@/assets/images/LinguaoMeditation.svg";
import { useTypedNavigation } from "@/hooks/useNavigationTyped";
import { useNavigation } from "@react-navigation/native";
import { ExercisesStack } from "@/interface/navigation.interface";

const LoadingExercisesScreen = () => {
  const navigation = useNavigation<ExercisesStack>();

  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 1,
        routes: [{ name: "TranslateSentenceScreen" }],
      });
    }, 3000);
  }, []);

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

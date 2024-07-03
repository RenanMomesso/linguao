import GoBack from "@/components/GoBack/GoBack";
import Text from "@/components/Text";
import useHideBottomNavigation from "@/hooks/useHideBottomNavigation";
import { PremmiumStack } from "@/interface/navigation.interface";
import PremmiumLayout from "@/layouts/PremmiumLayout";
import { Row } from "@/theme/GlobalComponents";
import React from "react";
import { Pressable } from "react-native";

interface InstantaneousTranslationScreenProps {
  navigation: PremmiumStack;
}
const InstantaneousTranslationScreen = ({
  navigation,
}: InstantaneousTranslationScreenProps) => {
  useHideBottomNavigation();

  return (
    <PremmiumLayout backgroundColor="white">
      <Pressable onPress={() => navigation.goBack()}>
        <Row>
          <GoBack />
          <Text>Instant Translation</Text>
        </Row>
        
      </Pressable>
    </PremmiumLayout>
  );
};

export default InstantaneousTranslationScreen;

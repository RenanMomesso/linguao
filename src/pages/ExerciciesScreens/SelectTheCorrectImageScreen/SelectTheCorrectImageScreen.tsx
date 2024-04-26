import { View, Text } from "react-native";
import React from "react";
import ExercicesLayout from "@/layouts/ExercicesLayout";
import Button from "@/components/Button/Button";

const SelectTheCorrectImageScreen = (props: any) => {
  console.log("🚀 ~ SelectTheCorrectImageScreen ~ props:", props);
  return (
    <ExercicesLayout
      barProgressPercentage={80}
      pageTitle="Select the correct image">
      <Text>SelectTheCorrectImageScreen</Text>
      <ExercicesLayout.Footer>
        <Button
          backgroundColor="Blue"
          buttonText="Next"
          onPressButton={() => {}}
          touchSoundDisabled={false}
          textColor="white"
        />
      </ExercicesLayout.Footer>
    </ExercicesLayout>
  );
};

export default SelectTheCorrectImageScreen;

import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import ExercicesLayout from "@/layouts/ExercicesLayout";
import BoxImgTxt from "@/components/BoxImgTxt/BoxImgTxt";
import Button from "@/components/Button/Button";
import { ExercisesStack } from "@/interface/navigation.interface";
import { Row } from "@/theme/GlobalComponents";
import { TouchableOpacity } from "react-native-gesture-handler";
import { theme } from "@/theme/theme";
import LottieView from "lottie-react-native";
import TextComponent from "@/components/Text";
import jsonLottie from "@/assets/json/Lc8090d9Br.json";

interface SelectCorrectImgTextScreenProps {
  navigation: ExercisesStack;
}

const SelectCorrectImgTextScreen = ({
  navigation,
}: SelectCorrectImgTextScreenProps) => {
  const [soundPlaying, setSoundPlaying] = useState(false);
  return (
    <ExercicesLayout
      barProgressPercentage={80}
      pageTitle="Select the correct image">
      <Row
        style={{
          gap: 10,
          marginBottom: 50,
        }}>
        {/* <AudioPlayer /> */}
        <TouchableOpacity
          style={{
            padding: 10,
            // height: 50,
            // width: 50,
            borderRadius: 50,
            backgroundColor: theme.colors.primary,
          }}
          onPress={() => setSoundPlaying(prev => !prev)}>
          <LottieView
            progress={100}
            source={jsonLottie}
            autoPlay={soundPlaying}
            loop={false}
            style={{
              height: 30,
              width: 30,
            }}
          />
        </TouchableOpacity>
        <TextComponent
          size="heading5"
          align="left"
          numberOfLines={2}
          weight="bold"
          style={{
            flex: 1,
            flexWrap: "wrap",
            maxWidth: "80%",
          }}>
          The quick brown fox jumps over the lazy dog
        </TextComponent>
      </Row>

      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 20 }}>
        <Pressable
          style={{
            width: "47%",
            height: 70,
            borderWidth: 1,
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <TextComponent size="heading5" align="center" weight="bold">
            Dog
          </TextComponent>
        </Pressable>
        <Pressable
          style={{
            width: "47%",
            height: 70,
            borderWidth: 1,
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <TextComponent size="heading5" align="center" weight="bold">
            Dog
          </TextComponent>
        </Pressable>
        <Pressable
          style={{
            width: "47%",
            height: 70,
            borderWidth: 1,
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <TextComponent size="heading5" align="center" weight="bold">
            Dog
          </TextComponent>
        </Pressable>
        <Pressable
          style={{
            width: "47%",
            height: 70,
            borderWidth: 1,
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <TextComponent size="heading5" align="center" weight="bold">
            Dog
          </TextComponent>
        </Pressable>
      </View>
      <ExercicesLayout.Footer>
        <Button
          disabled={false}
          backgroundColor="primary"
          buttonText="Next"
          onPressButton={() => {
            navigation.navigate("TypeWhatYouHearScreen");
          }}
          touchSoundDisabled={false}
          textColor="Red"
        />
      </ExercicesLayout.Footer>
    </ExercicesLayout>
  );
};

export default SelectCorrectImgTextScreen;

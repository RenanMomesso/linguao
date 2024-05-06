import { View, Text } from "react-native";
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
        <BoxImgTxt
          imgUrl="https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg"
          text="A cat"
        />
        <BoxImgTxt
          imgUrl="https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg"
          text="A dog"
        />

        <BoxImgTxt
          imgUrl="https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg"
          text="A bird"
        />

        <BoxImgTxt
          imgUrl="https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg"
          text="A fish"
        />
      </View>
      <ExercicesLayout.Footer>
        <Button
          disabled={false}
          backgroundColor="primary"
          buttonText="Next"
          onPressButton={() => {
            navigation.navigate("LessonCompletedScreen");
          }}
          touchSoundDisabled={false}
          textColor="Red"
        />
      </ExercicesLayout.Footer>
    </ExercicesLayout>
  );
};

export default SelectCorrectImgTextScreen;

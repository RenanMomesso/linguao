import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import ExercicesLayout from "@/layouts/ExercicesLayout";
import { Row } from "@/theme/GlobalComponents";
import { theme } from "@/theme/theme";
import LottieView from "lottie-react-native";
import TextComponent from "@/components/Text";
import Button from "@/components/Button/Button";
import Selectable from "@/components/Selectable/Selectable";
import { useNavigation } from "@react-navigation/native";
import { ExercisesStack } from "@/interface/navigation.interface";

const WhatDoesTheAudioSayScreen = () => {

  const navigation = useNavigation<ExercisesStack>();
  

  return (
    <ExercicesLayout
      barProgressPercentage={80}
      pageTitle="What does the sentence mean ?">
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
          onPress={() => {}}>
          {/* <LottieView
            progress={100}
            source={jsonLottie}
            autoPlay={soundPlaying}
            loop={false}
            style={{
              height: 30,
              width: 30,
            }}
          /> */}
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

      <View style={{
        gap: 16,
      }}>
        <Selectable style={{
            borderColor: theme.colors.greyScale300,
        }}>
          <TextComponent size="heading6" weight="bold" align="center">
            The quick brown fox jumps over the lazy dog
          </TextComponent>
        </Selectable>

        <Selectable  style={{
            borderColor: theme.colors.primary,
            borderWidth:2,
            backgroundColor: theme.colors.primary100,
        }}>
          <TextComponent size="heading6" weight="bold" align="center">
            The quick brown fox jumps over the lazy dog
          </TextComponent>
        </Selectable>

        <Selectable style={{
            borderColor: theme.colors.greyScale300,
        }}>
          <TextComponent size="heading6" weight="bold" align="center">
            The quick brown fox jumps over the lazy dog
          </TextComponent>
        </Selectable>
      </View>

      <ExercicesLayout.Footer>
        <Button
          backgroundColor={true ? "primary" : "greyScale300"}
          buttonText="Check Answers"
          textColor="white"
          disabled={false}
          onPressButton={() => {
            navigation.navigate("WhatDoesTheSentenceSayScreen")
          }}
        />
      </ExercicesLayout.Footer>
      {/* {showAnswer && <AnimatedBottom />} */}
    </ExercicesLayout>
  );
};

export default WhatDoesTheAudioSayScreen;

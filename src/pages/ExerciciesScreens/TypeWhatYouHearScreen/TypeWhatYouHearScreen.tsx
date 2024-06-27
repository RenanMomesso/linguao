import { View, TouchableOpacity } from "react-native";
import React from "react";
import ExercicesLayout from "@/layouts/ExercicesLayout";
import { theme } from "@/theme/theme";
import TextComponent from "@/components/Text";
import Button from "@/components/Button/Button";

import TapAudioCircle from "@/assets/images/TapAudioCircle.svg";
import WordsSelectors from "../../TranslateSentenceScreen/components/WordsSelectors";

import BottomSheetAnswer from "../components/BottomSheetAnswer/BottomSheetAnswer";
import CustomInput from "@/components/Input/Input";
import useKeyboard from "@/hooks/useKeyboard";

const TypeWhatYouHearScreen = (props:any) => {
  const [text, setText] = React.useState("");

  const isKeyboardOpen = useKeyboard();

  return (
    <ExercicesLayout
      barProgressPercentage={80}
      pageTitle="What does the audio say?">
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 1,
          borderColor: theme.colors.greyScale300,
          borderRadius: 24,
          padding: 8,
        }}>
        <TouchableOpacity
          onPress={() => {}}
          style={{ height: 100, marginTop: -10 }}>
          <TapAudioCircle height={120} />
        </TouchableOpacity>
        <TextComponent>Tap to play audio</TextComponent>
      </View>

      <View style={{ height: 20 }} />
      <CustomInput
        type="textarea"
        placeholder="Enter long text here..."
        onChangeText={(text) => setText(text)}
      />

      {!isKeyboardOpen && <ExercicesLayout.Footer>
        <Button
          backgroundColor={true ? "primary" : "greyScale300"}
          buttonText="Check Answers"
          textColor="white"
          disabled={false}
          onPressButton={() => {
            props.navigation.navigate("SelectMatchAudioWithTextScreen");
          }}
        />
      </ExercicesLayout.Footer>}
      {false && (
        <BottomSheetAnswer
          correctlyAnswered={true}
          translation={""}
          handleAlert={() => {}}
          handleClickContinue={() => {}}
          handleShare={() => {}}
        />
      )}
    </ExercicesLayout>
  );
};

export default TypeWhatYouHearScreen;

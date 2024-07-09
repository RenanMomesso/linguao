import { MicrophoneIcon } from "@/assets/images";
import GoBack from "@/components/GoBack/GoBack";
import CustomPicker from "@/components/ListPicker/ListPicker";
import Selectable from "@/components/Selectable/Selectable";
import Text from "@/components/Text";
import useHideBottomNavigation from "@/hooks/useHideBottomNavigation";
import useVoiceRecognition from "@/hooks/useVoiceRecognition";
import { PremmiumStack } from "@/interface/navigation.interface";
import PremmiumLayout from "@/layouts/PremmiumLayout";
import { Container, Row } from "@/theme/GlobalComponents";
import { theme } from "@/theme/theme";
import React, { useState } from "react";
import { Alert, Pressable, ScrollView, TextInput } from "react-native";
import Translator, { TranslatorProvider } from "react-native-translator";

interface InstantaneousTranslationScreenProps {
  navigation: PremmiumStack;
}

const items = [
  { label: "English", value: "en" },
  { label: "Spanish", value: "es" },
  { label: "German", value: "de" },
  { label: "French", value: "fr" },
  { label: "Portuguese", value: "pt" },
  { label: "Mandarin", value: "zh" },
];
const InstantaneousTranslationScreen = ({
  navigation,
}: InstantaneousTranslationScreenProps) => {
  useHideBottomNavigation();
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [from, setFrom] = useState("en");

  const { voiceResult, startRecognizing, stopRecognizing } =
    useVoiceRecognition();
  console.log(JSON.stringify(voiceResult, undefined, 3));

  return (
    <PremmiumLayout backgroundColor="white">
      <TranslatorProvider>
        <Pressable onPress={() => navigation.goBack()}>
          <Row>
            <GoBack />
            <Text>Instant Translation</Text>
          </Row>
        </Pressable>
        <Selectable
          disabled={voiceResult.isRecording}
          onPressIn={startRecognizing}
          onPressOut={stopRecognizing}
          style={{
            marginTop: 20,
            borderColor: voiceResult.isRecording
              ? theme.colors.primary
              : theme.colors.greyScale300,
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 24,
          }}>
          <Row>
            <MicrophoneIcon />
            <Text size="heading6" weight="bold" align="center" color="primary">
              Tap to talk
            </Text>
          </Row>
        </Selectable>
        <Row style={{
          marginVertical:20
        }}>
          <Text>From:</Text>
          <CustomPicker
            items={items}
            selectedValue={from}
            onValueChange={setFrom}
          />
        </Row>
        <Row>
          <Text>to:</Text>
          <CustomPicker
            items={items}
            selectedValue={selectedLanguage}
            onValueChange={setSelectedLanguage}
          />
        </Row>
        <Container
          padding={5}
          style={{
            marginTop: 20,
            elevation: 2,
            backgroundColor: "white",
            borderWidth: 1,
            borderColor: "lightgray",
            borderRadius: 8,
          }}>
          <ScrollView contentContainerStyle={{ flex: 1 }}>
            <Text color="primary" align="justify">
              {result}
            </Text>
          </ScrollView>
        </Container>
        {voiceResult.results.length > 0 && !voiceResult.isRecording && (
          <Translator
            from="en"
            to={selectedLanguage}
            type="google"
            value={voiceResult.results[0]}
            onTranslated={t => {
              if (voiceResult.isRecording) return;
              setResult(t);
            }}
          />
        )}
      </TranslatorProvider>
    </PremmiumLayout>
  );
};

export default InstantaneousTranslationScreen;

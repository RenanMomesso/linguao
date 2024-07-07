import React from "react";
import { View, Text, Button, Pressable } from "react-native";
import useVoiceRecognition from "@/hooks/useVoiceRecognition";
import Waveform from "./WaveForm"; // Adjust the import path as necessary
import useRecordAudio from "@/hooks/useRecordAudio";

const VoiceRecognitionComponent = () => {
  const {
    voiceResult,
    startRecognizing,
    stopRecognizing,
    cancelRecognizing,
    audioPath,
    convertAudioToText,
    transcription,
  } = useRecordAudio();

  const {
    startRecognizing: startRecognizingVoice,
    stopRecognizing: stopRecognizingVoice,
    voiceResult: voiceResultVoice,
  } = useVoiceRecognition();

  return (
    <View style={{ padding: 20 }}>
      <Pressable
        style={{
          width: "100%",
          padding: 10,
          backgroundColor: voiceResult.isRecording ? "red" : "blue",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 5,
        }}
        onPressIn={startRecognizing}
        onPressOut={stopRecognizing}>
        <Text style={{ color: "white" }}>Press and hold to record</Text>
      </Pressable>
      <Pressable
        style={{
          width: "100%",
          padding: 10,
          backgroundColor: voiceResult.isRecording ? "red" : "blue",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 5,
        }}
        onPressIn={startRecognizingVoice}
        onPressOut={stopRecognizingVoice}>
        <Text style={{ color: "white" }}>Press and hold to record</Text>
      </Pressable>

      <Text>{JSON.stringify(voiceResultVoice, undefined, 3)}</Text>
      {voiceResult.isRecording && <Text>Recording...</Text>}

      <View>
        <Text>Transcriptions:</Text>
        {transcription}
      </View>

      {voiceResult.error && <Text>Error: {voiceResult.error}</Text>}
      <Text>Duration: {voiceResult.duration} ms</Text>
      <View style={{ marginTop: 50 }}>
        {audioPath && !voiceResult.isRecording && !!voiceResult.duration && (
          <Waveform duration={voiceResult.duration} audioPath={audioPath} />
        )}
      </View>
      <Pressable
        onPress={convertAudioToText}
        style={{
          width: "100%",
          padding: 10,
          backgroundColor: "lightblue",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 5,
          marginBottom: 10,
        }}>
        <Text>AWS PREDICTION: text</Text>
      </Pressable>
    </View>
  );
};

export default VoiceRecognitionComponent;

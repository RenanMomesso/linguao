import React from "react";
import { View, Text, Button } from "react-native";
import useVoiceRecognition from "@/hooks/useVoiceRecognition";
import Waveform from "./WaveForm"; // Adjust the import path as necessary

const VoiceRecognitionComponent = () => {
  const {
    voiceResult,
    startRecognizing,
    stopRecognizing,
    cancelRecognizing,
    audioPath,
  } = useVoiceRecognition();

  return (
    <View style={{ padding: 20 }}>
      <Button title="Start Recording" onPress={startRecognizing} />
      <Button title="Stop Recording" onPress={stopRecognizing} />
      <Button title="Cancel Recording" onPress={cancelRecognizing} />

      {voiceResult.isRecording && <Text>Recording...</Text>}

      <View>
        <Text>Transcriptions:</Text>
        {voiceResult.results.map((result, index) => (
          <Text key={index}>{result}</Text>
        ))}
      </View>

      {voiceResult.error && <Text>Error: {voiceResult.error}</Text>}
      <Text>Duration: {voiceResult.duration} ms</Text>
      <View style={{ marginTop: 50 }}>
        {audioPath && (
          <Waveform duration={voiceResult.duration} audioPath={audioPath} />
        )}
      </View>
      <Text style={{}}>Conveert to text</Text>
    </View>
  );
};

export default VoiceRecognitionComponent;

import TTS from "react-native-tts";

export const speakerVoiceMessage = (message: string) => {
  return TTS.speak(message, {
    androidParams: {
      KEY_PARAM_PAN: 1,
      KEY_PARAM_VOLUME: 1,
      KEY_PARAM_STREAM: "STREAM_MUSIC",
    },
    rate: 0.9,
    iosVoiceId: "com.apple.ttsbundle.Samantha-compact",
  });
};

export const stopSpeakerVoice = () => {
  return TTS.stop();
}

import TTS from "react-native-tts";
const voices = TTS.voices();

TTS.setDefaultVoice("en-us-x-iol-local");
TTS.setDefaultRate(0.55);
TTS.setDefaultPitch(0.8)

const availableVoices = voices.then(voices => {
  voices.filter(v => !v.networkConnectionRequired && !v.notInstalled)
  .map(v => {
    console.log({
      id: v.id,
      name: v.name,
      language: v.language,
    })
    return { id: v.id, name: v.name, language: v.language };
  });
});

export const getAvailableVoices = async () => {
  console.log("Available voices: ", await availableVoices);
  return availableVoices;
};

export const speakerVoiceMessage = async (message: string) => {
  getAvailableVoices();
  try {
      return TTS.speak(message);
  } catch (error) {
    console.log("Error speaking message: ", error);
  }
};

export const stopSpeakerVoice = () => {
  return TTS.stop();
};

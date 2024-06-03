import Voice, {
  SpeechErrorEvent,
  SpeechResultsEvent,
} from "@react-native-voice/voice";
import { useEffect, useState } from "react";

export interface IVoiceResult {
  regognized: string;
  pitch: string;
  error: string;
  end: string;
  started: string;
  results: string[];
  partialResults: string[];
  isRecording: boolean;
}

const useVoiceRecognition = () => {
  const [voiceResult, setVoiceResult] = useState<IVoiceResult>({
    regognized: "",
    pitch: "",
    error: "",
    end: "",
    started: "",
    results: [],
    partialResults: [],
    isRecording: false,
  });

  const resetState = () => {
    setVoiceResult({
      regognized: "",
      pitch: "",
      error: "",
      end: "",
      started: "",
      results: [],
      partialResults: [],
      isRecording: true,
    });
  };

  const startRecognizing = async () => {
    resetState();
    try {
      await Voice.start("en-US");
    } catch (e) {
      console.error(e);
    }
  };

  const stopRecognizing = async () => {
    try {
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }
  };

  const cancelRecognizing = async () => {
    try {
      await Voice.cancel();
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    Voice.onSpeechStart = (e: any) => {
      setVoiceResult(previousState => ({
        ...previousState,
        started: e.value,
        isRecording: true,
      }));
    };

    Voice.onSpeechError = (e: SpeechErrorEvent) => {
      setVoiceResult(previousState => ({
        ...previousState,
        error: e?.error?.message || "",
        isRecording: false,
      }));
    };

    Voice.onSpeechEnd = (e: any) => {
      setVoiceResult(previousState => ({
        ...previousState,
        end: e.value,
        isRecording: false,
      }));
    };

    Voice.onSpeechRecognized = (e: any) => {
      setVoiceResult(previousState => ({
        ...previousState,
        regognized: e.value,
      }));
    };

    Voice.onSpeechResults = (e: SpeechResultsEvent) => {
      if (!e.value) return;
      console.log("onSpeechResults: ", e);
      setVoiceResult(previousState => {
        return {
          ...previousState,
          results: e.value!,
        };
      });
    };

    Voice.onSpeechPartialResults = (e: any) => {
      setVoiceResult(previousState => ({
        ...previousState,
        partialResults: e.value,
      }));
    };

    // Voice.onSpeechVolumeChanged = (e: any) => {
    //   setVoiceResult(previousState => ({ ...previousState, pitch: e.value }));
    // };

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  return {
    voiceResult,
    startRecognizing,
    stopRecognizing,
    cancelRecognizing,
  };
};

export default useVoiceRecognition;

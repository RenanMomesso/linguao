import Voice, {
  SpeechErrorEvent,
  SpeechResultsEvent,
} from "@react-native-voice/voice";
import { useEffect, useState } from "react";
import AudioRecorderPlayer from "react-native-audio-recorder-player";
import RNFS from "react-native-fs";
import { View, Text, Button } from "react-native";
// import Prediction from "aws-amplify/p"

const audioRecorderPlayer = new AudioRecorderPlayer();

export interface IVoiceResult {
  recognized: string;
  pitch: string;
  error: string;
  end: string;
  started: string;
  results: string[];
  partialResults: string[];
  isRecording: boolean;
  duration: number;
}

const useVoiceRecognition = () => {
  const [voiceResult, setVoiceResult] = useState<IVoiceResult>({
    recognized: "",
    pitch: "",
    error: "",
    end: "",
    started: "",
    results: [],
    partialResults: [],
    isRecording: false,
    duration: 0,
  });

  const [audioPath, setAudioPath] = useState<string | null>(null);

  const resetState = () => {
    setVoiceResult({
      recognized: "",
      pitch: "",
      error: "",
      end: "",
      started: "",
      results: [],
      partialResults: [],
      isRecording: false,
      duration: 0,
    });
  };

  const startRecognizing = async () => {
    resetState();
    try {
      const path = `${RNFS.DocumentDirectoryPath}/test.mp4`;
      const result = await audioRecorderPlayer.startRecorder(path);
      setAudioPath(result);

      audioRecorderPlayer.addRecordBackListener(async e => {
        await Voice.start("en-US");
        setVoiceResult(prevState => ({
          ...prevState,
          duration: e.currentPosition,
        }));
      });
    } catch (e) {
      console.error(e);
    }
  };

  const stopRecognizing = async () => {
    try {
      await Voice.stop();
      const result = await audioRecorderPlayer.stopRecorder();
      setAudioPath(result);
      audioRecorderPlayer.removeRecordBackListener();
    } catch (e) {
      console.error(e);
    }
  };

  const cancelRecognizing = async () => {
    try {
      await Voice.cancel();
      await audioRecorderPlayer.stopRecorder();
      setAudioPath(null);
      audioRecorderPlayer.removeRecordBackListener();
    } catch (e) {
      console.error(e);
    }
  };

  const playRecording = async () => {
    if (audioPath) {
      try {
        await audioRecorderPlayer.startPlayer(audioPath);
      } catch (e) {
        console.error(e);
      }
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
        recognized: e.value,
      }));
    };

    Voice.onSpeechResults = (e: SpeechResultsEvent) => {
      console.log("onSpeechResults:", e);
      if (e.value) {
        setVoiceResult(previousState => ({
          ...previousState,
          results: e.value,
        }));
      }
    };

    Voice.onSpeechPartialResults = (e: any) => {
      setVoiceResult(previousState => ({
        ...previousState,
        partialResults: e.value,
      }));
    };

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  return {
    voiceResult,
    startRecognizing,
    stopRecognizing,
    cancelRecognizing,
    playRecording,
    audioPath,
  };
};

export default useVoiceRecognition;

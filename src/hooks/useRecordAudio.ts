import { useState } from "react";
import AudioRecorderPlayer from "react-native-audio-recorder-player";
import RNFS from "react-native-fs";
import axios from "axios";

const OpenAI_API_KEY =
  "sk-proj-OfkcEpPiSvQjwDGTs8hxT3BlbkFJFUiXbwvGHXD256DaspJH";
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

const useRecordAudio = () => {
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
  const [transcription, setTranscription] = useState<string | null>(null);

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
      console.log("🚀 ~ startRecognizing ~ result:", result);
      setAudioPath(result);

      audioRecorderPlayer.addRecordBackListener(e => {
        
        console.log("@@@@@@@@@@@@@@@@@@@@@@@Event: ", e);
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
      const result = await audioRecorderPlayer.stopRecorder();
      setAudioPath(result);
      setVoiceResult(prevState => ({
        ...prevState,
        isRecording: false,
      }));
      audioRecorderPlayer.removeRecordBackListener();
    } catch (e) {
      console.error(e);
    }
  };

  const cancelRecognizing = async () => {
    try {
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

  const convertAudioToText = async () => {
    if (!audioPath) return;

    try {
      const formData = new FormData();
      formData.append("file", {
        uri: "https://linguaoimagebucket13eb4-dev.s3.amazonaws.com/public/e498e478-3071-7042-da1d-3736b5ee6244/3gGnm1E1BzJM-audio.mp3",
        name: "audio.mp4",
        type: "audio/mp4",
      } as any);
      formData.append("model", "whisper-1");
      formData.append("language", "en");

      const response = await axios.post(
        "https://api.openai.com/v1/audio/transcriptions",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${OpenAI_API_KEY}`,
          },
        },
      );
      console.log("@@@@@@@@@@RESPONSE: ", response.data);
      setTranscription(response.data.transcription);
      setVoiceResult(prevState => ({
        ...prevState,
        results: response.data.transcription,
      }));
    } catch (error: any) {
      console.error("Error in audio-to-text conversion:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
      }
    }
  };

  const handleResetAudio = () => {
    setAudioPath(null);
    setTranscription(null);
    resetState();
  }

  return {
    voiceResult,
    startRecognizing,
    stopRecognizing,
    cancelRecognizing,
    playRecording,
    audioPath,
    convertAudioToText,
    transcription,
    handleResetAudio
  };
};

export default useRecordAudio;

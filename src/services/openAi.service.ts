import axios from "axios";
import { sendFileToStorage } from "./sendFileToStorage";
import { generateRandomValue } from "@/utils/generateRandomValue";
import { Buffer } from "buffer";
import base64ToArrayBuffer from "@/utils/base64toString";
import { base64StringToBlob } from "blob-util";

const OpenAI_API_KEY =
  "sk-proj-4biiUmZMYhgc4UeWj6H5T3BlbkFJCspXYoT5bubj2NRNSz0Q";

interface Message {
  role: "system" | "user" | "assistant";
  content: string;
}

interface OpenAIResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
  choices: Array<{
    message: Message;
    finish_reason: string;
    index: number;
  }>;
}

const apiKey = "sk-proj-OfkcEpPiSvQjwDGTs8hxT3BlbkFJFUiXbwvGHXD256DaspJH"; // Ensure you have your API key set in the environment variables
export const sendMessageToOpenAI = async (
  text: string,
): Promise<OpenAIResponse | null> => {
  if (!apiKey) {
    console.error("API key is not set");
    return null;
  }

  const url = "https://api.openai.com/v1/chat/completions";
  const data = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `
        You are a english teacher. 
        Help the student to learn english. 
        You don't replicate codes, or talk about programming. 
        You are a english teacher.
        You must answer like you were speaking to a student.
        Your answer must be at most 150 words.
        You don't generate code in any language like python, java,javascript, etc.
        when someone ask you to generate code you must say: "I'm sorry, I can't help you with that. I'm an english teacher."
        
        `,
      },
      {
        role: "user",
        content: text,
      },
    ],
  };

  try {
    const response = await axios.post<OpenAIResponse>(url, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error sending message to OpenAI:", error);
    return null;
  }
};

export const convertAudioToText = async (audioPath: string) => {
  console.log("🚀 ~ convertAudioToText ~ audioPath:", audioPath);
  if (!audioPath) {
    throw new Error("Audio path is required");
  }

  try {
    const formData = new FormData();
    formData.append("file", {
      uri: audioPath,
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
    return response?.data?.text;
  } catch (error: any) {
    console.error("Error in audio-to-text conversion:", error);
    if (error.response) {
      console.error("Response data:", error.response.data);
    }
  }
};

export async function generateSpeechAndUploadToS3(inputText: string) {
  console.log("🚀 ~ generateSpeechAndUploadToS3 ~ inputText:", inputText);
  try {
    const response: any = await axios.post(
      "https://api.openai.com/v1/audio/speech",
      {
        model: "tts-1",
        input: inputText,
        voice: "alloy",
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        responseType: "arraybuffer", // This is important for handling binary data
      },
    );

    const sendAudioToS3 = await sendFileToStorage(
      response.data,
      `aiaudio/${generateRandomValue(12)}-audio.mp3`,
      false,
    );

    return sendAudioToS3;
  } catch (error) {
    console.error("Error generating speech:", error);
    throw error;
  }
}

const axios = require("axios");
const apiKey =
"sk-proj-OfkcEpPiSvQjwDGTs8hxT3BlbkFJFUiXbwvGHXD256DaspJH";

const generateSpeechFromText = async inputText => {
  console.log("🚀 ~ generateSpeechAndUploadToS3 ~ inputText:", inputText);
  try {
    const response = await axios.post(
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
        responseType: "arraybuffer",
      },
    );

    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error("Error generating speech:", error);
    throw error;
  }
};

module.exports = { generateSpeechFromText };

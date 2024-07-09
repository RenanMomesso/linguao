/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	API_LINGUAO_GRAPHQLAPIIDOUTPUT
	API_LINGUAO_GRAPHQLAPIENDPOINTOUTPUT
	API_LINGUAO_GRAPHQLAPIKEYOUTPUT
	API_LINGUAO_MESSAGETABLE_NAME
	API_LINGUAO_MESSAGETABLE_ARN
	linguaoaireply
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

console.log("ENV:", process.env);
const axios = require("axios");

const S3_BUCKET_NAME = "linguaoaireply";
const convertAudioToText = async audioPath => {
  if (!audioPath) return;

  try {
    const formData = new FormData();
    formData.append("file", {
      uri: audioPath,
      name: "audio.mp4",
      type: "audio/mp4",
    });
    formData.append("model", "whisper-1");
    formData.append("language", "en");

    const response = await axios.post(
      "https://api.openai.com/v1/audio/transcriptions",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${OPEN_AI_KEY}`,
        },
      },
    );
    console.log("@@@@@@@@@@RESPONSE: ", response.data);
    return response?.data?.text;
  } catch (error) {
    console.error("Error in audio-to-text conversion:", error);
    throw new Error("Error in audio-to-text conversion");
  }
};
exports.handler = async event => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  return {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
    body: JSON.stringify("Hello from Lambda!"),
  };
};

/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	API_LINGUAO_GRAPHQLAPIIDOUTPUT
	API_LINGUAO_GRAPHQLAPIENDPOINTOUTPUT
	API_LINGUAO_GRAPHQLAPIKEYOUTPUT
	API_LINGUAO_MESSAGETABLE_NAME
	API_LINGUAO_MESSAGETABLE_ARN
	linguaoaireply
Amplify Params - DO NOT EDIT */

// /**
//  * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
//  */
// const awsSdk = require("aws-sdk");
// const axios = require("axios");
// const OPEN_AI_KEY = "sk-proj-OfkcEpPiSvQjwDGTs8hxT3BlbkFJFUiXbwvGHXD256DaspJH";
// const S3_BUCKET_NAME = "linguaoaireply";
// console.log(process.env);
// const convertAudioToText = async audioPath => {
//   if (!audioPath) return;

//   try {
//     const formData = new FormData();
//     formData.append("file", {
//       uri: audioPath,
//       name: "audio.mp4",
//       type: "audio/mp4",
//     });
//     formData.append("model", "whisper-1");
//     formData.append("language", "en");

//     const response = await axios.post(
//       "https://api.openai.com/v1/audio/transcriptions",
//       formData,
//       {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${OPEN_AI_KEY}`,
//         },
//       },
//     );
//     console.log("@@@@@@@@@@RESPONSE: ", response.data);
//     return response?.data?.text;
//   } catch (error) {
//     console.error("Error in audio-to-text conversion:", error);
//     throw new Error("Error in audio-to-text conversion");
//   }
// };

// const sendMessageToOpenAI = async text => {
//   // Ensure you have your API key set in the environment variables
//   if (!OPEN_AI_KEY) {
//     console.error("API key is not set");
//     return null;
//   }

//   const url = "https://api.openai.com/v1/chat/completions";
//   const data = {
//     model: "gpt-3.5-turbo",
//     messages: [
//       {
//         role: "system",
//         content: `
//           You are a english teacher.
//           Help the student to learn english.
//           You don't replicate codes, or talk about programming.
//           You are a english teacher.
//           You must answer like you were speaking to a student.
//           Your answer must be at most 150 words.
//           You don't generate code in any language like python, java,javascript, etc.
//           when someone ask you to generate code you must say: "I'm sorry, I can't help you with that. I'm an english teacher."

//           `,
//       },
//       {
//         role: "user",
//         content: text,
//       },
//     ],
//   };

//   try {
//     const response = await axios.post(url, data, {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${OPEN_AI_KEY}`,
//       },
//     });

//     return response.data;
//   } catch (error) {
//     throw new Error("Error in sending message to OpenAI");
//   }
// };

// async function generateSpeechAndUploadToS3(inputText, s3Key) {
//   try {
//     const response = await axios.post(
//       "https://api.openai.com/v1/audio/speech",
//       {
//         model: "tts-1",
//         input: inputText,
//         voice: "alloy",
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${OPEN_AI_KEY}`,
//           "Content-Type": "application/json",
//         },
//         responseType: "arraybuffer", // This is important for handling binary data
//       },
//     );

//     // Upload the audio data to S3
//     const uploadParams = {
//       Bucket: S3_BUCKET_NAME,
//       Key: s3Key,
//       Body: response.data,
//       ContentType: "audio/mp3",
//     };

//     await s3.upload(uploadParams).promise();
//     console.log(`Audio successfully uploaded to ${S3_BUCKET_NAME}/${s3Key}`);
//   } catch (error) {
//     console.error(
//       "Error generating speech or uploading to S3:",
//       error.response ? error.response.data : error.message,
//     );
//   }
// }

// // ai para converter em audio
// // enviar audio de resposta
// export async function handler(event, ...args) {
//   const generateAIAudio = async text => {
//     try {
//       const audioToText = await convertAudioToText(text);
//       const aiReply = await sendMessageToOpenAI(audioToText);
//       console.log("🚀 ~ generateAIAudio ~ aiReply:", aiReply);
//     } catch (error) {
//       console.error("Error in generating AI audio:", error);
//       return {
//         statusCode: 500,
//         body: JSON.stringify("Error in generating AI audio"),
//       };
//     }
//   };

//   console.log("🚀 ~ event:", event)
//   const response = await generateAIAudio("Hello, how are you?");
//   console.log("🚀 ~ response:", response);

//   return {
//     statusCode: 200,
//     //  Uncomment below to enable CORS requests
//     //  headers: {
//     //      "Access-Control-Allow-Origin": "*",
//     //      "Access-Control-Allow-Headers": "*"
//     //  },
//     body: JSON.stringify("Hello from Lambda!"),
//   };
// }

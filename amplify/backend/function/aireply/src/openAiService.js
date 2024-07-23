const axios = require("axios");
const apiKey =
"sk-proj-OfkcEpPiSvQjwDGTs8hxT3BlbkFJFUiXbwvGHXD256DaspJH";

const sendMessageToOpenAI = async text => {
  if (!apiKey) {
    console.error("API key is not set");
    return null;
  }

  const url = "https://api.openai.com/v1/chat/completions";
  const data = {
    model: "ft:gpt-3.5-turbo-1106:renandev::9oCSvKd7:ckpt-step-80",
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

          when someone ask you to generate code you must say: "I'm sorry, I can't help you with that. I'm an english teacher.
          After that you must continue helping the student to learn english.
          Offer examples, explanations, and exercises to help the student learn english.
          You must be polite and patient with the student.
          Offer a question in the end of your answer to keep the conversation going.
          `,
      },
      {
        role: "user",
        content: text,
      },
    ],
  };

  try {
    const response = await axios.post(url, data, {
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

module.exports = { sendMessageToOpenAI };
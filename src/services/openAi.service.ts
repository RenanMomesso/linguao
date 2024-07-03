import axios from "axios";

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

export const sendMessageToOpenAI = async (
  text: string,
): Promise<OpenAIResponse | null> => {
  const apiKey = "sk-proj-OfkcEpPiSvQjwDGTs8hxT3BlbkFJFUiXbwvGHXD256DaspJH"; // Ensure you have your API key set in the environment variables
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


// Example usage:

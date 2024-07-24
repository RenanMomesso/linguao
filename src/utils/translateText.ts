import axios from "axios";

export const translationText = async (text: string, targetLang: string = 'pt') => {
  try {
    const response = await axios.get(
      "https://api.mymemory.translated.net/get",
      {
        params: {
          q: text,
          langpair: `en|${targetLang}`, // assuming the source language is English
        },
      },
    );
    if (response.data && response.data.responseData) {
      return response.data.responseData.translatedText;
    } else {
      throw new Error("Translation failed");
    }
  } catch (error) {
    console.error("Error translating text:", error);
    return null;
  }
};

export default translationText;

import axios from "axios";

export const getCountryLanguagesFlags = async () => {
  try {
    const response = await axios.get(
      "https://restcountries.com/v3.1/all?fields=languages,flags",
    );
    const data = response.data;
    const flagsAndLanguages = data.map((item: any) => ({
      languages: item.languages[Object.keys(item.languages)[0]],
      flags: item.flags.png,
    }));
    return flagsAndLanguages;
  } catch (error) {
    console.log("Error", error);
  }
};

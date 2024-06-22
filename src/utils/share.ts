import RNShare from "react-native-share";
import { imgToBase64 } from "./imgToBase64";

export const share = async (title, imageUrl) => {
  console.log("🚀 ~ share ~ imageUrl:", imageUrl);

  try {
    // Download the image
    const base64Image = await imgToBase64(imageUrl);

    // Share the image using RNShare
    const shareOptions = {
      url: `data:image/png;base64,${base64Image}`,
    };

    console.log({ shareOptions });
    const result = await RNShare.open({
      title,
      ...shareOptions,
    });
    console.log("🚀 ~ share ~ result:", result);
  } catch (error) {
    console.error("Error sharing image:", error);
  }
};

// Example usage
const imageUrl =
  "https://amplify-linguao-bucket.s3.amazonaws.com/images/Frame+6.png"; // Ensure this is a direct image link
// share("Check this image", imageUrl);

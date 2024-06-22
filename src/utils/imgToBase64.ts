import RNFetchBlob from "rn-fetch-blob";

export const imgToBase64 = async (imageUrl: string) => {
  try {
    // Download the image
    const res = await RNFetchBlob.config({
      fileCache: true,
    }).fetch("GET", imageUrl);

    // Get the path to the downloaded image
    const imgPath = res.path();

    // Convert the image to a base64 encoded string
    const base64Image = await res.base64();

    return base64Image;
  } catch (error) {
    console.error("Error converting image to base64:", error);
  }
};
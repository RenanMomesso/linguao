import awsmobile from '../aws-exports'
import { uploadData, downloadData } from "aws-amplify/storage";

export const sendFileToStorage = async (file: any, fileName: string) => {
  console.log(file, "file");
  try {
    const responseAudio = await fetch(file);
    const blob = await responseAudio.blob();
    const result = uploadData({
      data: blob,
      key: `${fileName}.mp3`,
      options: {
        onProgress: progress => {
          console.log(
            `Uploaded: ${progress.transferredBytes}/${progress.totalBytes}`,
          );
        },
      },
    }).result.then(res => {
      const endpoint = `https://${awsmobile.aws_user_files_s3_bucket}.s3.amazonaws.com/public/${fileName}.mp3`;
      console.log(endpoint);
      return endpoint
    });
    console.log({ result });
    return result;
  } catch (error) {
    console.log("Error uploading file: ", error);
    return null;
  }
};

export const getFileFromStorage = async (fileName: string) => {
  try {
    const result = downloadData({
      key: `${fileName}.mp3`,
    }).result.then(res => {
      const endpoint = ``;
    });
    console.log({ result });
    return result;
  } catch (error) {
    console.log("Error uploading file: ", error);
    return null;
  }
};

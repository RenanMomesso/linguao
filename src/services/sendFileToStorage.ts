import awsmobile from "../aws-exports";
import { uploadData, downloadData } from "aws-amplify/storage";
export type StorageUploadDataPayload =
  | Blob
  | ArrayBufferView
  | ArrayBuffer
  | string;

export const sendFileToStorage = async (
  file: any,
  fileName: string,
  convertToBlob: boolean = true,
) => {
  console.log(file, "file");
  let blob: StorageUploadDataPayload = file;
  try {
    if (convertToBlob) {
      const responseAudio = await fetch(file);
      blob = await responseAudio.blob();
    }
    let response;
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
      response = endpoint;
      return endpoint;
    });
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

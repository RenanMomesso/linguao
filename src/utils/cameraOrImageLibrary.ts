import {
  launchCamera,
  launchImageLibrary,
  Asset,
} from "react-native-image-picker";

class CameraOrImageLibrary {
  static openCamera = (): Promise<Asset | null> => {
    return new Promise((resolve, reject) => {
      launchCamera({ mediaType: "photo" }, response => {
        if (response.didCancel) {
          resolve(null); // Return null if the user cancelled the image picker
        } else if (response.errorCode) {
          reject(response.errorMessage); // Reject if there was an error
        } else if (response.assets && response.assets.length > 0) {
          resolve(response.assets[0]); // Return the first asset if successful
        } else {
          resolve(null); // Handle the case where no assets are returned
        }
      });
    });
  };

  static openImageLibrary = async (): Promise<Asset | null> => {
    try {
      const response = await launchImageLibrary({ mediaType: "photo" });
      if (response.didCancel) {
        return null;
      }
      return response.assets?.[0] || null;
    } catch (error) {
      console.error("Error opening image library", error);
      return null;
    }
  };
}

export const { openCamera, openImageLibrary } = CameraOrImageLibrary;

if (__DEV__) {
  import("./ReactoTronConfig");
}
import { Amplify } from "aws-amplify";
import amplifyconfig from "./src/amplifyconfiguration.json";
Amplify.configure(amplifyconfig);
import { AppRegistry, Alert } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import TrackPlayer from "react-native-track-player";
import RNR from "react-native-restart";


const myErrorHandler = (error, isFatal) => {
  // Log the error to an external service
  console.log("Error caught by custom handler:", error);

  // Optionally, show an alert to the user
  if (isFatal) {
    console.log("Fatal error detected", isFatal);
    Alert.alert(
      "Unexpected error occurred",
      `
      Error: ${isFatal ? "Fatal:" : ""} ${error.name} ${error.message}
      
      We will need to restart the app.
      `,
      [
        {
          text: "Restart",
          onPress: () => {
            // RNR?.restart();
          },
        },
      ],
    );
  } else {
    console.log(error); // Log non-fatal errors to console
  }
};

ErrorUtils.setGlobalHandler(myErrorHandler);

TrackPlayer.setupPlayer().then(() => {
  // The player is ready to be used
  console.log("Player is set up");
});

AppRegistry.registerComponent(appName, () => App);

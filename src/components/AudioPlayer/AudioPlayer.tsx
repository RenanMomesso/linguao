import { Button, View } from "react-native";
import Sound from "react-native-sound";

// Enable playback in silence mode (iOS only)
Sound.setCategory("Playback");

let sound:any = null;

function playSoundFromURL() {
  // Initialize the sound object
  sound = new Sound(
    "https://commondatastorage.googleapis.com/codeskulptor-assets/sounddogs/soundtrack.mp3",
    null,
    error => {
      if (error) {
        console.log("Failed to load the sound", error);
        return;
      }
      // Play the sound if the file is loaded successfully
      sound.play(success => {
        if (success) {
          console.log("Successfully played");
        } else {
          console.log("Playback failed due to audio decoding errors");
        }
        // Release the resource when it's not needed
        sound.release();
      });
    },
  );
}

function stopSound() {
  if (sound) {
    sound.stop(() => {
      console.log("Sound stopped");
    });
  }
}

function pauseSound() {
  if (sound) {
    sound.pause(() => {
      console.log("Sound paused");
    });
  }
}

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Play Sound" onPress={playSoundFromURL} />
      <Button title="Stop Sound" onPress={stopSound} />
      <Button title="Pause Sound" onPress={pauseSound} />
    </View>
  );
}

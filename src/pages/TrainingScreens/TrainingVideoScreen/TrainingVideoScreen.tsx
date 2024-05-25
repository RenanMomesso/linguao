import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useEffect } from "react";
import YoutubeIframe, { YoutubeIframeRef } from "react-native-youtube-iframe";
import TextComponent from "@/components/Text";
import ReactNativeVideo, { VideoRef } from "react-native-video";
import GoBack from "@/components/GoBack/GoBack";

const TrainingVideoScreen = () => {
  const ref = React.useRef<YoutubeIframeRef>(null);
  const videoRef = React.useRef<VideoRef>(null);
  const [playing, setPlaying] = React.useState(true);
  const [videoPlaying, setVideoPlaying] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);

  const playVideo = () => {
    setPlaying(true);
  };

  const pauseVideo = () => {
    setPlaying(false);
    ref.current?.getCurrentTime().then(console.warn);
  };

  const videoRefPlay = () => {
    // videoRef.current?.resume();
    setVideoPlaying(true);
  };

  const videoPause = () => {
    // videoRef.current?.pause();
    setVideoPlaying(false);
    // videoRef.current?.
  };

  const handleProgress = progress => {
    setCurrentTime(progress.currentTime);
  };

  const handleLoad = meta => {
    setDuration(meta.duration);
  };

  console.log({
    currentTime,
    duration,
  });

  const handleBack10 = () => {
    videoRef.current?.seek(currentTime - 10);
  };

  return (
    <View>
      <GoBack />
      {/* <Pressable
        style={{
          height: 250,
          width: "100%",
          backgroundColor: "black",
          position: "absolute",
          opacity: 0.5,
          zIndex: 1,
        }}
        onPress={playing ? pauseVideo : playVideo}></Pressable>
      <YoutubeIframe
        ref={ref}
        height={300}
        forceAndroidAutoplay={true}
        play={playing}
        onFullScreenChange={status =>
          console.warn(`Fullscreen status: ${status}`)
        }
        initialPlayerParams={{
          cc_lang_pref: "us",
          controls: false,
          rel: false, // Disable related videos
          //   showinfo: 0, // Hide video title and uploader
          showClosedCaptions: false,
          modestbranding: false,
          color: "red",
        }}
        webViewProps={{
          onShouldStartLoadWithRequest: request => {
            return request.mainDocumentURL === "about:blank";
          },
        }}
        videoId={"dQw4w9WgXcQ"} // Replace with your YouTube video ID
      /> */}

      <ReactNativeVideo
        ref={videoRef}
        source={{
          uri: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
        }}
        style={{
          height: 300,
          zIndex: 0,
        }}
        controls={true}
        paused={!videoPlaying}
        onProgress={handleProgress}
        onLoad={handleLoad}
      />

      <Pressable onPress={videoRefPlay}>
        <Text>Play Video</Text>
      </Pressable>

      <Pressable onPress={videoPause}>
        <Text>Pause Video</Text>
      </Pressable>
      <Pressable onPress={handleBack10}>
        <Text>Back 10 Video</Text>
      </Pressable>

      <View
        style={{
          backgroundColor: "red",
          height: 300,
        }}></View>
    </View>
  );
};

export default TrainingVideoScreen;

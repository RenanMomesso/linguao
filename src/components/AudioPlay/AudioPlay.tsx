import React, { useState, useEffect, useRef } from "react";
import { View, Pressable } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from "react-native-reanimated";
import Sound from "react-native-sound";
import styled from "styled-components/native";
import { PauseIcon, PlayIcon } from "@/assets/images";
import { theme } from "@/theme/theme";
import formatTime from "@/utils/formatTime";
import LoadingIcon from "../Loading/Loading";
import Text from "../Text";

const WaveformThumb = styled(Animated.View)`
  height: 14px;
  width: 14px;
  border-radius: 14px;
  background-color: white;
  position: absolute;
  aspect-ratio: 2;
  border: 1px solid white;
  top: -6px;
`;

const calculateLeftPosition = (percentage, trackWidth) => {
  "worklet"; // Mark this function as a worklet
  return (percentage / 100) * trackWidth;
};

const AudioPlay = ({ audioPath }: { audioPath: string }) => {
  const AnimatedIndicator = Animated.createAnimatedComponent(WaveformThumb);
  const trackWidth = 180; // Width of the track in pixels
  const progress = useSharedValue(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const soundRef = useRef<Sound>(null);
  const intervalRef = useRef(null);
  const [speedAudio, setSpeedAudio] = useState(1); // [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]
  const [loadingDuration, setLoadingDuration] = useState(true);

  useEffect(() => {
    Sound.setCategory("Playback");
    if (audioPath.length === 0 || !audioPath.includes('https://') || !audioPath.includes("http://")) return;
    const sound = new Sound(audioPath, null, error => {
      if (error) {
        console.log("failed to load the sound", error);
        return;
      }
      setDuration(sound.getDuration());
      soundRef.current = sound;
      setLoadingDuration(false);
    });

    return () => {
      if (soundRef.current) {
        soundRef.current.release();
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [audioPath]);

  const updateProgress = value => {
    "worklet";
    progress.value = value;
  };

  const handlePlayEnd = success => {
    if (success) {
      setIsPlaying(false);
      runOnJS(updateProgress)(0);
    } else {
      console.log("playback failed due to audio decoding errors");
    }
  };

  const setAudioSpeed = speed => {
    if (soundRef.current) {
      soundRef.current?.setSpeed(speed);
    }
  };

  const playAudio = () => {
    if (soundRef.current) {
      setIsPlaying(true);
      soundRef.current.play(handlePlayEnd);

      intervalRef.current = setInterval(() => {
        if (soundRef.current) {
          soundRef.current.getCurrentTime(seconds => {
            const currentProgress = (seconds / duration) * 100;
            runOnJS(updateProgress)(currentProgress);
          });
        }
      }, 100);
    }
  };

  const stopAudio = () => {
    if (soundRef.current) {
      setIsPlaying(false);
      soundRef.current.stop(() => {
        runOnJS(updateProgress)(0);
      });
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
  };

  const animatedIndicatorStyle = useAnimatedStyle(() => ({
    left: withTiming(calculateLeftPosition(progress.value, trackWidth)),
  }));

  const durationToMilliseconds = duration * 1000;

  return (
    <Pressable
      style={{
        padding: 10,
        borderRadius: 50,
        backgroundColor: theme.colors.primary,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
      }}>
      {isPlaying ? (
        <PauseIcon onPress={stopAudio} color={"white"} width={25} height={25} />
      ) : (
        <PlayIcon onPress={playAudio} color="white" width={25} height={25} />
      )}

      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          height: 2,
          position: "relative",
          width: trackWidth,
        }}>
        <AnimatedIndicator style={animatedIndicatorStyle} />
      </View>
      <Text color="white" size="tiny">
        {formatTime(durationToMilliseconds)}
      </Text>
      <Text onPress={() => setAudioSpeed(2)}>
        v:{soundRef.current?.getSpeed()}
      </Text>
    </Pressable>
  );
};

export default AudioPlay;
